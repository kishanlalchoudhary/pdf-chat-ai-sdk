import z from "zod";

const envSchema = z.object({
  OPENAI_API_KEY: z.string().trim().min(1),
  PINECONE_API_KEY: z.string().trim().min(1),
  PINECONE_INDEX_NAME: z.string().trim().min(1),
  PDF_PATH: z.string().trim().min(1),
  INDEX_INIT_TIMEOUT: z.coerce.number().min(1),
  LANGCHAIN_TRACING_V2: z.coerce.boolean(),
  LANGCHAIN_ENDPOINT: z.string().trim().min(1),
  LANGCHAIN_API_KEY: z.string().trim().min(1),
  LANGCHAIN_PROJECT: z.string().trim().min(1),
  HELICONE_API_KEY: z.string().trim().min(1),
});

export const env = envSchema.parse(process.env);
