# 📄 AI Document Chat Workflow (Short Hinglish Guide)

Ye workflow user ko **PDF upload karke uske andar se question poochne** deta hai.
AI **PDF ko read karta hai aur document ke basis par answer deta hai**.

**Tools:** n8n + Google Gemini + Vector Store (RAG)

---

## ⚙️ Workflow Flow

User → Webhook → Extract from File → Vector Store → Wait → AI Agent → Respond to Webhook

---

## 1️⃣ Webhook (Trigger)

**Purpose:** Frontend (HTML page) se incoming **POST request receive karna**, jisme **PDF file aur user ka question** hota hai.

---

## 2️⃣ Extract from File

**Purpose:** Aayi hui **PDF file ko read karna** aur usme se **saara text extract karna** taaki AI usko process kar sake.

---

## 3️⃣ Embeddings Google Gemini

**Purpose:** Extracted text ko **AI searchable format (vector embeddings)** me convert karna.

---

## 4️⃣ Simple Vector Store

**Purpose:** Extracted text aur uske **embeddings ko database me store karna** taaki AI baad me document me search kar sake.

---

## 5️⃣ Wait Node

**Purpose:** Workflow me **chhota pause dena** taaki vector store ko **indexing aur data save karne ka time mil sake**.

---

## 6️⃣ AI Agent (Main Brain)

**Purpose:** User ke question ko process karna aur **tools (Model, Memory, Vector Store)** ka use karke correct answer find karna.

---

## 7️⃣ Google Gemini Chat Model

**Purpose:** Ye **main AI model** hai jo user ke prompt ko samajhkar **final human-readable answer generate karta hai**.

---

## 8️⃣ Simple Memory

**Purpose:** **Conversation context yaad rakhna** taaki AI ko previous messages ya chat history yaad rahe.

---

## 9️⃣ Simple Vector Store Tool + Embeddings

**Purpose:** AI Agent isko **search tool** ki tarah use karta hai.
Jab user question poochta hai, ye tool **document me relevant information dhoondh kar AI ko deta hai**.

---

## 🔟 Respond to Webhook

**Purpose:** AI Agent ka **final generated answer wapas frontend (HTML page) ko bhejna** taaki user apna result dekh sake.

---

# 🚀 Result

**User:**
PDF upload karega aur question puchega.

**AI:**
PDF read karega → relevant information search karega → **accurate answer return karega**.

Is tarah ye system ek **PDF Chatbot / Document Q&A System (RAG)** ban jata hai.
