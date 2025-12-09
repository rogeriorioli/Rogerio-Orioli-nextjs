import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<boolean> => {
  const ai = getAIClient();
  if (!ai) return false;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    const initialized = await initializeChat();
    if (!initialized) {
      return "Desculpe, não consegui conectar ao serviço de IA no momento. Verifique a configuração da chave API.";
    }
  }

  try {
    // We can assume chatSession is not null here due to the check above, but TS needs assurance or optional chaining
    const response: GenerateContentResponse = await chatSession!.sendMessage({
      message: message
    });
    
    return response.text || "Não consegui gerar uma resposta. Tente novamente.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.";
  }
};