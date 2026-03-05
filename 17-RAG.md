# RAG ( Retreival-Augemented Generation ):

- RAG is a **Framework** that combines *LLM's* with *External Knowledge Model*, first it will retrives the relevant data, then generates the answer.
- *Helps AI to give more accurate and context-aware responses*.
- It just like **AI + smart search engine working together**.

# LLM vs RAG 

| LLM (Language Model)                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------|
| LLM ko ek baar bahut bade dataset par **train** kiya jata hai aur phir wahi knowledge use karta hai.                              |
| LLM ka knowledge **training time tak hi limited hota hai**. Agar new information aa jaye to model ko dubara train karna padta hai.|
| Kabhi-kabhi LLM **galat ya outdated answer** de sakta hai kyunki uske paas latest data nahi hota.                                 |
| LLM **general knowledge aur language understanding** me strong hota hai.                                                          |
| Example: Agar LLM se pucha "2026 ka latest AI model kya hai", to shayad wo purana answer de de.                                   |


| RAG (Retrieval-Augmented Generation)                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------- |
|  RAG model **external sources (database, documents, internet)** se information retrieve karke answer generate karta hai.|
| RAG **real-time ya updated information** ko access kar sakta hai bina model ko retrain kiye.                            |
| RAG **relevant documents search karke** answer banata hai, isliye zyada accurate hone ke chances hote hain.             |
| RAG **specific information aur factual queries** ke liye zyada useful hota hai.                                         |
| RAG pehle **latest sources search karega**, phir unke basis par answer generate karega.                                 |


## Simple Difference
* **LLM:** Sirf apni training knowledge se answer deta hai.
* **RAG:** Pehle information **search karta hai**, phir usko use karke answer generate karta hai.

# Importance of RAG:
- It improves the **accuracy** of AI responses by using up-to-date information.
- It *reduces hallucination* (jab AI galat ya irrelevant information generate karta hai).
- Enables use of private business data.
- Cheaper the frequent fine-tuning of LLMs.
- Powers modern enterprises AI systems with real-time data access.

# How RAG works:
1. Users sends query to RAG system.
2. Query is converted into embeddings (numerical representation).
3. Vector database me similar embeddings search kiya jata hai.
4. Retrieved data is added to the prompt.
5. LLM generates the final grounded answer based on retrieved information.
6. Users receive accurate and context-aware response.

# Core Components of RAG:
1. **Retriver**:
- Searches for relevant information based on query.
- Uses similarity macthing techniques to find relevant documents.
- Example: Vector search, keyword matching.

2. **Knowledge Base**:
- Store of information that retriever accesses (PDFs, docs, web pages, databases, etc.).
- Is is a sourece of truth for the RAG system.
- Example: Vector database, document store.

3. **Vector Database**:
- Stores embeddings.
- Enables fast similarity search.
- Example: Pinecone, Weaviate.

4. **Generator (LLM)**:
- Produces the final answer.
- Uses retrieved context.
- Example: GPT-4, Llama 3.

# What are Embeddings?
- Text ko numerical format me convert karne ka process.
- Similar meaning wale texts ke embeddings similar hote hain.
- In RAG system query converted into embedding, becuase similar words have a similar embedding, so it easy to find relevant information.
- It captures the semantic meaning, not just keywords.
- Example: *"What is AI?" aur "Define Artificial Intelligence" ke embeddings similar honge, kyunki dono ka meaning same hai.*


# What is Vector Database?
- A specialized database designed to store and search high-dimensional vectors (embeddings).
- Iski helps se RAG system ko relevant infomation find krna easy hota hai.
- It uses similarity search algorithms to quickly retrieve relevant data based on query embeddings.
- Eaxmple: *Netflix ke recommendation system me user ke preferences ke basis par similar movies recommend karna.*

# RAG vs Fine-tuning:
**RAG**:
- Uses external knowledge sources.
- Real-time information access.
- No need for retraining.
- More flexible and scalable.
**Fine-tuning**:
- Retrains the entire model on new data.
- Time-consuming and expensive.
- Best for specific tasks but less flexible for general use.
- *Many companies use RAG first , fine-tuning only when necessary.*