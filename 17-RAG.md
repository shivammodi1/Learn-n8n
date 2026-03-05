# RAG ( Retreival-Augemented Generation ):

- RAG is a **Framework** that combines *LLM's* with *External Knowledge Model*, first it will retrives the relevant data, then generates the answer.
- *Helps AI to give more accurate and context-aware responses*.
- It just like **AI + smart search engine working together**.

# LLM vs RAG 

| LLM (Language Model)                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------|
| LLM ko ek baar bahut bade dataset par **train** kiya jata hai aur phir wahi knowledge use karta hai.                              |
| LLM ka knowledge **training time tak hi limited hota hai**. Agar new information aa jaye to model ko dubara train karna padta hai.|
| Kabhi-kabhi LLM **galat(hallucinated) ya outdated answer** de sakta hai kyunki uske paas latest data nahi hota.                                 |
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
