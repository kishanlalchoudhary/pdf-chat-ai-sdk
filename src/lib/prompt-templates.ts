// Creates a standalone question from the chat-history and the current question
export const STANDALONE_QUESTION_TEMPLATE = `
Rephrase the follow-up question below into a clear, standalone question, using the context from the conversation provided.

Conversation History:
{chat_history}

Follow-Up Question: {question}

Give standalone question`;

// Actual question you ask the chat and send the response to client
export const QA_TEMPLATE = `
You are a knowledgeable AI assistant. Use the context provided below to deliver a clear, concise, and accurate response to the question.

- If the information needed is not in the context, reply with: "I'm not sure based on the provided information."
- Avoid fabricating or assuming information.
- If the question is irrelevant to the context, respond: "I am designed to answer questions related to the given context."

{context}

Question: {question}

Give answer in markdown format`;