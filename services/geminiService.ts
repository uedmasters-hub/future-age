
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateInsight = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a futuristic foresight engine. Provide a brief, high-impact insight (max 20 words) about the future of: ${topic}. Style: Abstract, sophisticated, enterprise-grade executive summary.`,
    });
    return response.text || "Insight unavailable.";
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};
