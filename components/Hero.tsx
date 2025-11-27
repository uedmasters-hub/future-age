import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Plus, Minus, Scan } from 'lucide-react';

const ParticleGlobe: React.FC<{ 
  zoomChange: number; 
  onZoomHandled: () => void;
  onRegionChange: (region: string | null) => void;
}> = ({ zoomChange, onZoomHandled, onRegionChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastReportedRegion = useRef<string | null>(null);

  // Store simulation state in a ref to persist across renders without resetting
  const simRef = useRef({
    particles: [] as { 
      x: number; y: number; z: number; 
      baseX: number; baseY: number; baseZ: number;
      size: number; baseColor: string;
      iconType?: 'headphone' | 'chip' | 'bolt' | 'hotel' | 'car' | 'bus'; 
      morphProgress: number; // 0 to 1
    }[],
    
    // Multiple Flights State Machine
    flights: [] as {
      id: number;
      state: 'takeoff' | 'flying' | 'landing';
      timer: number;
      startIdx: number;
      endIdx: number;
      progress: number; // 0 to 1
      trail: {x: number, y: number, opacity: number}[];
      angle: number;
    }[],
    flightSpawnTimer: 0,

    // Icon State Machine
    activeIconIndex: -1,
    iconState: 'idle' as 'idle' | 'in' | 'hold' | 'out',
    iconTimer: 0,
    
    rotation: { x: 0.2, y: 0.2 },
    targetRotation: { x: 0.2, y: 0.2 },
    zoom: 1.1,
    targetZoom: 1.1,
    isDragging: false,
    lastMousePosition: { x: 0, y: 0 },
    mousePosition: { x: -5000, y: -5000 },
    isHovering: false,
    width: 0,
    height: 0,
    dpr: 1
  });

  // Handle Zoom Prop Changes via Ref
  useEffect(() => {
    if (zoomChange !== 0) {
      simRef.current.targetZoom += zoomChange * 0.5;
      simRef.current.targetZoom = Math.max(0.5, Math.min(simRef.current.targetZoom, 3.0));
      onZoomHandled();
    }
  }, [zoomChange, onZoomHandled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // --- Configuration ---
    const particleCount = 800; 
    const globeRadiusRatio = 0.38;
    const DAMPING = 0.05;
    const AUTO_ROTATION_SPEED = 0.0005;

    // --- Assets ---
    // Minimalist Airliner Silhouette (Centered at 0,0, pointing Right)
    const planePath = new Path2D("M10 0 C10 1.5 5 2.5 0 2.5 L-4 10 L-6 10 L-2 2.5 L-9 2.5 L-11 5 L-13 5 L-12 0 L-13 -5 L-11 -5 L-9 -2.5 L-2 -2.5 L-6 -10 L-4 -10 L0 -2.5 C5 -2.5 10 -1.5 10 0 Z");

    // Polyfill helper for Round Rect (Canvas API support varies)
    const roundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    // --- Initialization ---
    const initParticles = () => {
      const { width, height } = simRef.current;
      simRef.current.particles = [];
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const r = Math.min(width, height) * globeRadiusRatio;

      // Reset states
      simRef.current.activeIconIndex = -1;
      simRef.current.iconState = 'idle';
      simRef.current.iconTimer = 0;
      simRef.current.flights = [];
      simRef.current.flightSpawnTimer = 0;

      for (let i = 0; i < particleCount; i++) {
        const y = 1 - (i / (particleCount - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        simRef.current.particles.push({ 
          x: x * r, y: y * r, z: z * r,
          baseX: x * r, baseY: y * r, baseZ: z * r,
          size: Math.random() * 1.5 + 0.5,
          baseColor: i % 20 === 0 ? '#FF2E00' : 'rgba(30, 30, 30, 0.6)',
          morphProgress: 0,
        });
      }
    };

    const resize = () => {
      if (!container || !canvas) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      simRef.current.width = width;
      simRef.current.height = height;
      simRef.current.dpr = dpr;
      
      initParticles(); 
    };
    
    resize();
    window.addEventListener('resize', resize);

    // --- Interaction Handlers ---
    const handleMouseDown = (e: MouseEvent) => {
      simRef.current.isDragging = true;
      simRef.current.lastMousePosition = { x: e.clientX, y: e.clientY };
      container.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      simRef.current.isDragging = false;
      container.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      simRef.current.mousePosition = { x, y };
      simRef.current.isHovering = true;

      // Identify approximate region logic
      const cx = simRef.current.width / 2;
      const cy = simRef.current.height / 2;
      const dx = x - cx;
      const dy = y - cy;
      
      let region = "AMERICAS_GRID";
      if (dx > 0 && dy < 0) region = "NEURAL_NORTHEAST";
      else if (dx > 0 && dy > 0) region = "APAC_CLUSTER";
      else if (dx < 0 && dy > 0) region = "EMEA_NODE";
      else if (dx < 0 && dy < 0) region = "LATAM_SECTOR";
      
      if (region !== lastReportedRegion.current) {
        lastReportedRegion.current = region;
        onRegionChange(region);
      }

      if (simRef.current.isDragging) {
        const deltaX = e.clientX - simRef.current.lastMousePosition.x;
        const deltaY = e.clientY - simRef.current.lastMousePosition.y;
        
        simRef.current.targetRotation.y += deltaX * 0.005;
        simRef.current.targetRotation.x += deltaY * 0.005;
        
        simRef.current.lastMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => {
      simRef.current.isHovering = false;
      simRef.current.mousePosition = { x: -5000, y: -5000 };
      if (lastReportedRegion.current !== null) {
        lastReportedRegion.current = null;
        onRegionChange(null);
      }
    };

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // --- Helper Math ---
    const project3D = (x: number, y: number, z: number, width: number, height: number, scale: number) => {
        const centerX = width / 2;
        const centerY = height / 2;
        return {
            x: x * scale + centerX,
            y: y * scale + centerY,
            z: z
        };
    };

    const rotate3D = (x: number, y: number, z: number, rx: number, ry: number) => {
        const cosX = Math.cos(rx);
        const sinX = Math.sin(rx);
        const cosY = Math.cos(ry);
        const sinY = Math.sin(ry);

        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;
        let y1 = y;

        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;
        let x2 = x1;

        return { x: x2, y: y2, z: z2 };
    }

    // --- Animation Loop ---
    let animationFrameId: number;
    let time = 0;
    let flightIdCounter = 0;

    const render = () => {
      time += 0.01;
      
      const { width, height } = simRef.current;
      
      // Clear
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;

      // Physics Interpolation
      simRef.current.rotation.x += (simRef.current.targetRotation.x - simRef.current.rotation.x) * DAMPING;
      simRef.current.rotation.y += (simRef.current.targetRotation.y - simRef.current.rotation.y) * DAMPING;
      simRef.current.zoom += (simRef.current.targetZoom - simRef.current.zoom) * DAMPING;

      if (!simRef.current.isDragging) {
        simRef.current.targetRotation.y += AUTO_ROTATION_SPEED;
      }

      // --- LOGIC: Flight Spawning ---
      
      simRef.current.flightSpawnTimer++;

      // Helper to find Visible Nodes
      const getVisibleNodes = () => {
          const visibleIndices: number[] = [];
          const activeNodes = new Set<number>();
          simRef.current.flights.forEach(f => { activeNodes.add(f.startIdx); activeNodes.add(f.endIdx); });

          for(let i=0; i<simRef.current.particles.length; i++) {
             if (activeNodes.has(i)) continue;
             const p = simRef.current.particles[i];
             const rot = rotate3D(p.baseX, p.baseY, p.baseZ, simRef.current.rotation.x, simRef.current.rotation.y);
             if (rot.z < -50) {
                 const scale = (1000 / (1000 + rot.z)) * simRef.current.zoom;
                 const proj = project3D(rot.x, rot.y, rot.z, width, height, scale);
                 const padding = 50;
                 if (proj.x > padding && proj.x < width - padding && proj.y > padding && proj.y < height - padding) {
                     visibleIndices.push(i);
                 }
             }
          }
          return { visibleIndices, activeNodes };
      };

      // Spawn Flights
      if (simRef.current.flightSpawnTimer > 400 && simRef.current.flights.length < 3) {
          const { visibleIndices, activeNodes } = getVisibleNodes();
          if (visibleIndices.length >= 2) {
              const startIdx = visibleIndices[Math.floor(Math.random() * visibleIndices.length)];
              let endIdx = visibleIndices[Math.floor(Math.random() * visibleIndices.length)];
              let attempts = 0;
              while ((endIdx === startIdx || activeNodes.has(endIdx)) && attempts < 10) {
                  endIdx = visibleIndices[Math.floor(Math.random() * visibleIndices.length)];
                  attempts++;
              }
              if (endIdx !== startIdx) {
                simRef.current.flights.push({
                    id: flightIdCounter++,
                    state: 'takeoff',
                    timer: 0,
                    startIdx,
                    endIdx,
                    progress: 0,
                    trail: [],
                    angle: 0
                });
                simRef.current.flightSpawnTimer = 0;
              }
          }
      }

      // 2. Flight Updates
      for (let i = simRef.current.flights.length - 1; i >= 0; i--) {
          const f = simRef.current.flights[i];
          if (f.state === 'takeoff') {
              f.timer++;
              if (f.timer > 90) { f.state = 'flying'; f.timer = 0; }
          } else if (f.state === 'flying') {
              f.progress += 0.0008;
              if (f.progress >= 1) { f.state = 'landing'; f.timer = 0; }
          } else if (f.state === 'landing') {
              f.timer++;
              if (f.timer > 90) { simRef.current.flights.splice(i, 1); }
          }
      }

      // --- LOGIC: Icon Morph State Machine (Hover Controlled) ---
      // Only spawn/show icons when hovering. Keep them static (hold) while hovering.
      
      if (simRef.current.isHovering) {
        if (simRef.current.iconState === 'idle') {
            const frontIndices: number[] = [];
            for(let i=0; i<simRef.current.particles.length; i++) {
               const p = simRef.current.particles[i];
               const rot = rotate3D(p.baseX, p.baseY, p.baseZ, simRef.current.rotation.x, simRef.current.rotation.y);
               if (rot.z < -100) { 
                   frontIndices.push(i);
               }
            }

            if (frontIndices.length > 0) {
              simRef.current.activeIconIndex = frontIndices[Math.floor(Math.random() * frontIndices.length)];
              simRef.current.iconState = 'in';
              const p = simRef.current.particles[simRef.current.activeIconIndex];
              const types: ('headphone' | 'chip' | 'bolt' | 'hotel' | 'car' | 'bus')[] = ['headphone', 'chip', 'bolt', 'hotel', 'car', 'bus'];
              p.iconType = types[Math.floor(Math.random() * types.length)];
              p.morphProgress = 0.01;
            }
        }
      } else {
        // Not hovering: Only transition to OUT if currently IN or HOLD
        if (simRef.current.iconState === 'in' || simRef.current.iconState === 'hold') {
            simRef.current.iconState = 'out';
        }
      }

      // State Transitions
      if (simRef.current.iconState === 'in') {
          const p = simRef.current.particles[simRef.current.activeIconIndex];
          if (p) {
              p.morphProgress += 0.05;
              if (p.morphProgress >= 1) {
                  p.morphProgress = 1;
                  simRef.current.iconState = 'hold';
              }
          } else { simRef.current.iconState = 'idle'; }
      } else if (simRef.current.iconState === 'hold') {
          // Static hold - do nothing until hover ends
      } else if (simRef.current.iconState === 'out') {
          const p = simRef.current.particles[simRef.current.activeIconIndex];
          if (p) {
              p.morphProgress -= 0.05;
              if (p.morphProgress <= 0) {
                  p.morphProgress = 0;
                  p.iconType = undefined;
                  simRef.current.activeIconIndex = -1;
                  simRef.current.iconState = 'idle';
              }
          } else { simRef.current.iconState = 'idle'; }
      }


      // --- Projection Loop ---
      const projectedPoints: {
          x: number, y: number, z: number, 
          original: any, scale: number, alpha: number
      }[] = [];

      // 1. Project Particles
      simRef.current.particles.forEach((p) => {
        const rotated = rotate3D(p.baseX, p.baseY, p.baseZ, simRef.current.rotation.x, simRef.current.rotation.y);
        const fov = 1000;
        const scale = (fov / (fov + rotated.z)) * simRef.current.zoom;
        const projected = project3D(rotated.x, rotated.y, rotated.z, width, height, scale);

        // Magnetic Deformation (Mouse)
        const mousePos = simRef.current.mousePosition;
        const dx = projected.x - mousePos.x;
        const dy = projected.y - mousePos.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (simRef.current.isHovering && dist < 200 && rotated.z < 100) {
            const pullStrength = (1 - dist / 200) * 30;
            projected.x -= (dx / dist) * pullStrength;
            projected.y -= (dy / dist) * pullStrength;
        }

        const maxR = Math.min(width, height) * globeRadiusRatio;
        const normalizedZ = (rotated.z + maxR) / (2 * maxR); 
        const alpha = Math.max(0.15, 1 - (normalizedZ * 0.85));

        projectedPoints.push({ ...projected, original: p, scale, alpha, z: rotated.z });
      });

      // Sort by Z (Painter's Algorithm)
      projectedPoints.sort((a, b) => b.z - a.z);


      // --- DRAWING ---

      // 1. Draw Network Connections
      projectedPoints.forEach((p, i) => {
        // OPTIMIZATION: Only connect particles on the front face (negative Z or close to it)
        // This significantly reduces visual complexity and "messiness".
        if (p.z > 10) return;

        const mousePos = simRef.current.mousePosition;
        const isNearMouse = simRef.current.isHovering && 
           Math.abs(p.x - mousePos.x) < 120 && 
           Math.abs(p.y - mousePos.y) < 120;
        const checkRange = isNearMouse ? 20 : 8; 
        
        for (let j = i + 1; j < Math.min(i + checkRange, projectedPoints.length); j++) {
           const p2 = projectedPoints[j];
           
           // Skip connections to back dots (though loop order usually handles this)
           if (p2.z > 10) continue; 

           const distSq = (p.x - p2.x)**2 + (p.y - p2.y)**2;
           const threshold = isNearMouse ? (70 * simRef.current.zoom) : (45 * simRef.current.zoom);

           if (distSq < threshold * threshold) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              if (isNearMouse) {
                  ctx.strokeStyle = `rgba(255, 46, 0, ${0.4})`;
                  ctx.lineWidth = 0.8;
              } else {
                  const avgAlpha = (p.alpha + p2.alpha) / 2;
                  const breath = (Math.sin(time + p.x * 0.01) + 1) * 0.5;
                  ctx.strokeStyle = `rgba(10, 10, 10, ${avgAlpha * 0.15 * breath})`;
                  ctx.lineWidth = 0.4;
              }
              ctx.stroke();
           }
        }
      });

      // 3. Draw Flights (Highlights, Trails, Planes)
      simRef.current.flights.forEach(f => {
          const startP = simRef.current.particles[f.startIdx];
          const endP = simRef.current.particles[f.endIdx];
          let startNodeProjected = null;
          let endNodeProjected = null;
          let planeProjected = null;

          if (startP) {
              const rotS = rotate3D(startP.baseX, startP.baseY, startP.baseZ, simRef.current.rotation.x, simRef.current.rotation.y);
              const scaleS = (1000 / (1000 + rotS.z)) * simRef.current.zoom;
              startNodeProjected = { ...project3D(rotS.x, rotS.y, rotS.z, width, height, scaleS), scale: scaleS, z: rotS.z };
          }
          if (endP) {
             const rotE = rotate3D(endP.baseX, endP.baseY, endP.baseZ, simRef.current.rotation.x, simRef.current.rotation.y);
             const scaleE = (1000 / (1000 + rotE.z)) * simRef.current.zoom;
             endNodeProjected = { ...project3D(rotE.x, rotE.y, rotE.z, width, height, scaleE), scale: scaleE, z: rotE.z };
          }

          if (startNodeProjected && (f.state === 'takeoff' || (f.state === 'flying' && f.progress < 0.2))) {
             if (startNodeProjected.z > -500) {
                 const pulse = (Math.sin(time * 10) + 1) * 0.5;
                 const depthScale = startNodeProjected.scale / simRef.current.zoom; 
                 const radius = 10 * depthScale + (pulse * 10 * depthScale);
                 ctx.beginPath();
                 ctx.arc(startNodeProjected.x, startNodeProjected.y, radius, 0, Math.PI * 2);
                 ctx.strokeStyle = `rgba(255, 46, 0, ${1 - pulse})`;
                 ctx.lineWidth = 2;
                 ctx.stroke();
             }
          }
          if (endNodeProjected && (f.state === 'landing' || (f.state === 'flying' && f.progress > 0.5))) {
             if (endNodeProjected.z > -500) {
                 const pulse = (Math.sin(time * 15) + 1) * 0.5;
                 const intensity = f.state === 'landing' ? 1 : (f.progress - 0.5) * 2;
                 const depthScale = endNodeProjected.scale / simRef.current.zoom;
                 const radius = 10 * depthScale + (pulse * 8 * depthScale);
                 ctx.beginPath();
                 ctx.arc(endNodeProjected.x, endNodeProjected.y, radius, 0, Math.PI * 2);
                 ctx.strokeStyle = `rgba(255, 46, 0, ${(1 - pulse) * intensity})`;
                 ctx.lineWidth = 2;
                 ctx.stroke();
             }
          }

          if ((f.state === 'flying' || f.state === 'landing') && startP && endP) {
              const effectiveProgress = f.state === 'landing' ? 1 : f.progress;
              const lx = startP.baseX + (endP.baseX - startP.baseX) * effectiveProgress;
              const ly = startP.baseY + (endP.baseY - startP.baseY) * effectiveProgress;
              const lz = startP.baseZ + (endP.baseZ - startP.baseZ) * effectiveProgress;
              const arcHeight = 100 * Math.sin(effectiveProgress * Math.PI); 
              const len = Math.sqrt(lx*lx + ly*ly + lz*lz);
              const nx = lx / len; const ny = ly / len; const nz = lz / len;
              const currentR = Math.min(width, height) * globeRadiusRatio + arcHeight;
              const cx = nx * currentR; const cy = ny * currentR; const cz = nz * currentR;
              
              const rot = rotate3D(cx, cy, cz, simRef.current.rotation.x, simRef.current.rotation.y);
              const scale = (1000 / (1000 + rot.z)) * simRef.current.zoom;
              planeProjected = { ...project3D(rot.x, rot.y, rot.z, width, height, scale), scale };
              
              if (f.state === 'flying') {
                  f.trail.push({ x: planeProjected.x, y: planeProjected.y, opacity: 1 });
                  if (f.trail.length > 80) f.trail.shift();
                  if (f.trail.length > 1) {
                      const prev = f.trail[f.trail.length - 2];
                      f.angle = Math.atan2(planeProjected.y - prev.y, planeProjected.x - prev.x);
                  }
              }

              if (f.trail.length > 0) {
                  ctx.beginPath();
                  ctx.moveTo(f.trail[0].x, f.trail[0].y);
                  for(let i=1; i<f.trail.length; i++) {
                      ctx.lineTo(f.trail[i].x, f.trail[i].y);
                  }
                  ctx.lineCap = 'round';
                  ctx.lineWidth = 2;
                  
                  // New logic: Arch visible only at "high speed" (middle of flight)
                  let trailAlpha = 0;
                  if (f.state === 'flying') {
                      // Sine wave peaks at progress 0.5 (mid-flight), 0 at start/end
                      trailAlpha = Math.sin(f.progress * Math.PI) * 0.6;
                  }
                  
                  if (trailAlpha > 0.01) {
                      ctx.strokeStyle = `rgba(255, 46, 0, ${trailAlpha})`;
                      ctx.stroke();
                  }
              }

              if (planeProjected) {
                  ctx.save();
                  ctx.translate(planeProjected.x, planeProjected.y);
                  ctx.rotate(f.angle);
                  const planeDisplayScale = (planeProjected.scale / simRef.current.zoom) * 0.45;
                  ctx.scale(planeDisplayScale, planeDisplayScale);
                  const planeAlpha = f.state === 'landing' ? (1 - (f.timer / 90)) : 1;
                  ctx.globalAlpha = planeAlpha;
                  ctx.fillStyle = '#FF2E00';
                  ctx.shadowColor = '#FF2E00';
                  ctx.shadowBlur = 10;
                  ctx.fill(planePath);
                  ctx.restore();
              }
          }
      });


      // 4. Draw Particles & Icons
      projectedPoints.forEach((p) => {
        // Check for Main Icon
        const isMainMorph = p.original.iconType && p.original.morphProgress > 0;
        
        if (isMainMorph) {
            ctx.save();
            ctx.translate(p.x, p.y);
            
            const type = p.original.iconType;
            const progress = p.original.morphProgress;

            const isTravel = type === 'hotel' || type === 'car' || type === 'bus';
            const depthScale = p.scale / simRef.current.zoom;
            const baseScale = isTravel ? 0.95 : 0.60;
            const iconScale = depthScale * baseScale * (1 + progress * 0.2); 

            ctx.scale(iconScale, iconScale);
            ctx.globalAlpha = p.alpha * progress; 
            ctx.fillStyle = '#FF2E00';
            
            if (type === 'headphone') {
                ctx.strokeStyle = '#FF2E00'; ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.arc(0, -1, 5, Math.PI, 0); ctx.stroke();
                ctx.fillRect(-6, -1, 2, 5); ctx.fillRect(4, -1, 2, 5);
            } else if (type === 'chip') {
                ctx.fillRect(-6, -6, 12, 12); ctx.clearRect(-3, -3, 6, 6);
                ctx.fillRect(-8, -2, 2, 4); ctx.fillRect(6, -2, 2, 4);
                ctx.fillRect(-2, -8, 4, 2); ctx.fillRect(-2, 6, 4, 2);
            } else if (type === 'bolt') {
                ctx.beginPath();
                ctx.moveTo(2, -8); ctx.lineTo(-4, 0); ctx.lineTo(0, 0);
                ctx.lineTo(-2, 8); ctx.lineTo(4, 0); ctx.lineTo(0, 0);
                ctx.fill();
            } else if (type === 'hotel') {
                ctx.beginPath(); ctx.rect(-6, -8, 12, 16); ctx.fill();
                ctx.clearRect(-4, -6, 3, 3); ctx.clearRect(1, -6, 3, 3);
                ctx.clearRect(-4, -1, 3, 3); ctx.clearRect(1, -1, 3, 3);
                ctx.clearRect(-4, 4, 3, 3); ctx.clearRect(1, 4, 3, 3);
            } else if (type === 'car') {
                ctx.beginPath(); ctx.moveTo(-6, 0); 
                ctx.lineTo(-5, -5); ctx.lineTo(5, -5); ctx.lineTo(6, 0); 
                ctx.lineTo(6, 4); ctx.lineTo(-6, 4); ctx.fill();
                ctx.fillStyle = '#FFFFFF'; ctx.fillRect(-5, 1, 2, 2); ctx.fillRect(3, 1, 2, 2);
            } else if (type === 'bus') {
                roundedRect(ctx, -6, -8, 12, 14, 2); ctx.fill();
                ctx.clearRect(-5, -6, 10, 4);
                ctx.fillStyle = '#FFFFFF'; ctx.fillRect(-5, 2, 2, 2); ctx.fillRect(3, 2, 2, 2);
            }

            if (progress > 0.8) {
                 ctx.shadowColor = '#FF2E00'; ctx.shadowBlur = 10;
            }
            if (type !== 'car' && type !== 'bus') ctx.fill(); 
            ctx.restore();
        } else {
            ctx.beginPath();
            
            // Allow dots to scale UP when zooming in.
            // Using p.scale directly includes the zoom multiplier.
            // p.scale = (fov / (fov+z)) * zoom
            let displaySize = p.original.size * p.scale; 
            
            const mousePos = simRef.current.mousePosition;
            const isNearMouse = simRef.current.isHovering && 
                Math.abs(p.x - mousePos.x) < 120 && Math.abs(p.y - mousePos.y) < 120;

            if (isNearMouse) {
                ctx.fillStyle = '#FF2E00'; displaySize *= 1.5;
            } else {
                if (p.original.baseColor.startsWith('#')) {
                    ctx.fillStyle = `rgba(255, 46, 0, ${p.alpha})`; 
                } else {
                    ctx.fillStyle = `rgba(30, 30, 30, ${p.alpha * 0.6})`;
                }
            }
            ctx.arc(p.x, p.y, displaySize, 0, Math.PI * 2);
            ctx.fill();
        }
      });

      // 6. Reticle
      if (lastReportedRegion.current && simRef.current.isHovering) {
         ctx.strokeStyle = 'rgba(255, 46, 0, 0.3)';
         ctx.lineWidth = 1;
         ctx.beginPath();
         ctx.arc(simRef.current.mousePosition.x, simRef.current.mousePosition.y, 40, 0, Math.PI*2);
         ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, []); // Empty dependency array ensures we don't re-init on props change

  return (
    <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing relative bg-off-white">
        <canvas ref={canvasRef} className="block w-full h-full" />
        
        {/* Hero Content Overlay */}
        <HeroOverlay onZoomIn={() => {
            simRef.current.targetZoom += 0.3;
            simRef.current.targetZoom = Math.min(simRef.current.targetZoom, 3.0);
        }} onZoomOut={() => {
            simRef.current.targetZoom -= 0.3;
            simRef.current.targetZoom = Math.max(simRef.current.targetZoom, 0.5);
        }} 
        activeRegion={lastReportedRegion.current}
        />
    </div>
  );
};

// --- Sub-Components (Typed Text, etc) ---

const HeroOverlay: React.FC<{
    onZoomIn: () => void;
    onZoomOut: () => void;
    activeRegion: string | null;
}> = ({ onZoomIn, onZoomOut, activeRegion }) => {
    // Typing Logic
    const HERO_CYCLES = [
      { title: "FUTURE\nBUSINESSES,\nBUILT TOGETHER.", desc: "Bridging the gap between organic creativity and synthetic speed. Our frameworks empower teams to achieve exponential output without losing the human touch." },
      { title: "COGNITIVE\nARCHITECTURES,\nDEPLOYED.", desc: "We engineer neural architectures that learn from your data ecosystem, transforming static information into dynamic, predictive intelligence that grows with your market." },
      { title: "SYNTHETIC\nINTUITION,\nSCALED.", desc: "From vision to execution, FutureAge brings the strategy, capital, and expertise needed to help founders and enterprises build, scale, and stay ahead of change." },
    ];
  
    const [cycleIdx, setCycleIdx] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [descVisible, setDescVisible] = useState(true);
    const [descHeight, setDescHeight] = useState<number | 'auto'>('auto');
    const descTextRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const currentCycle = HERO_CYCLES[cycleIdx];
      const targetText = currentCycle.title;
      let timer: ReturnType<typeof setTimeout>;
  
      if (isDeleting) {
        if (text.length > 0) {
          timer = setTimeout(() => {
             setText(targetText.substring(0, text.length - 1));
          }, 20);
        } else {
           setCycleIdx((prev) => (prev + 1) % HERO_CYCLES.length);
           setIsDeleting(false);
        }
      } else {
         if (text.length < targetText.length) {
            timer = setTimeout(() => {
               setText(targetText.substring(0, text.length + 1));
            }, 60 + Math.random() * 30);
         } else {
             // Finished typing, show desc
             setDescVisible(true);
             timer = setTimeout(() => {
                 setDescVisible(false);
                 setIsDeleting(true);
             }, 6000); 
         }
      }
      
      if (isDeleting && text.length === targetText.length) {
          setDescVisible(false);
      }
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, cycleIdx]);

  
    // Resize Observer for Dynamic Description Height
    useEffect(() => {
      if (!descTextRef.current) return;
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
           if (entry.target === descTextRef.current) {
               // Add padding to height
               // Wrapper has p-8 (32px top + 32px bottom = 64px).
               // Adding 66px to be safe.
               setDescHeight(entry.contentRect.height + 66); 
           }
        }
      });
      observer.observe(descTextRef.current);
      return () => observer.disconnect();
    }, [cycleIdx]); // Re-bind when content likely changes
  
    return (
      <div className="absolute inset-0 z-10 pointer-events-none h-full w-full">
        <div className="container mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-12 grid-rows-[min-content_1fr_min-content] gap-x-8 pt-32 pb-12 md:pb-24">
            
            {/* ROW 1: Title */}
            <div className="col-span-1 lg:col-span-12 pointer-events-auto z-20 self-start">
               <div className="max-w-6xl">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.85] text-carbon whitespace-pre-line">
                  {text}
                  <span className="inline-block w-3 md:w-5 h-12 md:h-20 bg-swiss-red ml-2 animate-pulse align-middle" />
                </h1>
              </div>
            </div>

            {/* ROW 2: Spacer / Middle area for globe interaction */}
            <div className="col-span-1 lg:col-span-12 pointer-events-none" />

            {/* ROW 3: Bottom Interface */}
            
            {/* Scanning UI (Bottom Left) */}
            <div className="col-span-1 lg:col-span-4 flex items-end pointer-events-auto z-20">
                 <div className={`flex flex-col gap-1 transition-opacity duration-500 ${activeRegion ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-3">
                        <Scan className="w-5 h-5 text-swiss-red animate-spin-slow" />
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scanning Sector</span>
                    </div>
                    <div className="text-2xl font-display font-bold uppercase text-carbon pl-8 tracking-tight">
                        {activeRegion || "GLOBAL_VIEW"}
                    </div>
                 </div>
            </div>

            {/* Spacer (Center) */}
            <div className="hidden lg:block lg:col-span-3" />

            {/* Controls & Desc (Bottom Right) */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-end items-end gap-4 pointer-events-auto z-20">
                {/* Zoom Controls */}
                <div className="flex flex-row bg-white border border-gray-200 shadow-sm">
                    <button onClick={onZoomOut} className="w-10 h-10 flex items-center justify-center hover:bg-carbon hover:text-white transition-colors border-r border-gray-200 group">
                        <Minus className="w-4 h-4 group-hover:scale-90 transition-transform" />
                    </button>
                    <button onClick={onZoomIn} className="w-10 h-10 flex items-center justify-center hover:bg-carbon hover:text-white transition-colors group">
                        <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Description Card */}
                <div 
                  className="bg-white/90 backdrop-blur-md p-8 border-l-4 border-swiss-red shadow-xl w-full transition-[height] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] overflow-hidden relative"
                  style={{ height: descHeight === 'auto' ? 'auto' : `${descHeight}px` }}
                >
                   {/* Skeleton Loader */}
                   <div className={`absolute left-0 right-0 top-0 bottom-24 px-8 flex flex-col justify-center space-y-3 transition-opacity duration-500 ${!descVisible ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
                      <div className="h-2.5 bg-gray-200 rounded-full w-3/4 animate-pulse" />
                      <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse delay-75" />
                      <div className="h-2.5 bg-gray-200 rounded-full w-5/6 animate-pulse delay-150" />
                      <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-swiss-red uppercase tracking-widest animate-pulse">
                          <div className="w-1.5 h-1.5 bg-swiss-red rounded-full" />
                          Constructing Narrative...
                      </div>
                   </div>
      
                   {/* Actual Content */}
                   <div ref={descTextRef} className="flex flex-col">
                      <p className={`text-base font-sans text-gray-600 leading-relaxed mb-8 transition-all duration-700 ${descVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'}`}>
                        {HERO_CYCLES[cycleIdx].desc}
                      </p>
                      
                      <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest bg-carbon text-white px-8 py-4 hover:bg-swiss-red transition-all duration-300 w-full justify-center opacity-100">
                        Start Your Journey
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
const Hero: React.FC = () => {
    // Lift state up so overlay can control simulation
    const [zoomChange, setZoomChange] = useState(0);
    const [activeRegion, setActiveRegion] = useState<string | null>(null);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-off-white">
            <div className="absolute inset-0">
                <ParticleGlobe 
                   zoomChange={zoomChange} 
                   onZoomHandled={() => setZoomChange(0)} 
                   onRegionChange={setActiveRegion}
                />
            </div>
        </section>
    );
};

export default Hero;