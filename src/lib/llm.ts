import { ChatOpenAI } from "@langchain/openai";
import { env } from "./config";

export const createStreamingModel = (user: string) => {
  return new ChatOpenAI({
    apiKey: env.OPENAI_API_KEY,
    modelName: "gpt-4o",
    streaming: true,
    verbose: true,
    temperature: 0,
    configuration: {
      basePath: "https://oai.helicone.ai/v1",
      defaultHeaders: {
        "Helicone-Auth": `Bearer ${env.HELICONE_API_KEY}`,
        "Helicone-Property-User": user,
      },
    },
  });
};

export const createNonStreamingModel = (user: string) => {
  return new ChatOpenAI({
    apiKey: env.OPENAI_API_KEY,
    modelName: "gpt-4o",
    verbose: true,
    temperature: 0,
    configuration: {
      basePath: "https://oai.helicone.ai/v1",
      defaultHeaders: {
        "Helicone-Auth": `Bearer ${env.HELICONE_API_KEY}`,
        "Helicone-Property-User": user,
      },
    },
  });
};
