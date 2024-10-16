import { env } from "./config";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";

export async function embedAndStoreDocs(
  client: Pinecone,
  docs: Document<Record<string, any>>[]
) {
  try {
    const embeddings = new OpenAIEmbeddings({
      apiKey: env.OPENAI_API_KEY,
      model: "text-embedding-ada-002",
    });
    const index = client.Index(env.PINECONE_INDEX_NAME);
;
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      textKey: "text",
    });
  } catch (error) {
    console.log("error ", error);
    throw new Error("Failed to load your docs !");
  }
}

export async function getVectorStore(client: Pinecone) {
  try {
    const embeddings = new OpenAIEmbeddings({
      apiKey: env.OPENAI_API_KEY,
      model: "text-embedding-ada-002",
    });
    const index = client.Index(env.PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      textKey: "text",
    });

    return vectorStore;
  } catch (error) {
    console.log("error ", error);
    throw new Error("Something went wrong while getting vector store !");
  }
}
