# 🏥 Disease Detector

An AI-powered health risk assessment web application that predicts the risk of **heart disease** and **diabetes** using machine learning, with a RAG-powered health chatbot assistant.

> ⚠️ **Disclaimer:** This is not a medical diagnosis tool. Always consult a qualified physician for professional medical advice.

---

## 🏗️ Architecture
Frontend (Next.js :3000)

↓

Spring Boot Backend (:8080)

↓

FastAPI ML Service :8000
- Heart Disease Model 
 - Diabetes Model
   
↓

 RAG Service  :8001
 - LangChain + FAISS   
 - Ollama LLaMA 3.2    


---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, Tailwind CSS, Framer Motion |
| Backend | Spring Boot 3.3, Java 21 |
| ML Service | FastAPI, scikit-learn, Python |
| RAG Service | LangChain, FAISS, Ollama (LLaMA 3.2) |
| Models | Random Forest (Heart), Gradient Boosting (Diabetes) |

---

## 📊 Model Performance

| Model | Accuracy | ROC-AUC |
|---|---|---|
| Heart Disease | 82% | 91.5% |
| Diabetes | 75% | 81.6% |

Trained on:
- [UCI Heart Disease Dataset]
- [Pima Indians Diabetes Dataset]

---

## 🚀 Getting Started

### Prerequisites
- Java 21
- Python 3.10+
- Node.js 18+
- [Ollama](https://ollama.com) with `llama3.2` pulled

### 1. ML Service
```bash
cd ml-service

# Install dependencies
pip install -r requirements.txt

# Train models (download datasets first into training/datasets/)
cd training
python train_heart.py
python train_diabetes.py
cd ..

# Start ML service
uvicorn main:app --port 8000 --reload
```

### 2. RAG Service
```bash
cd rag-service

# Install dependencies
pip install -r requirements.txt

# Build vector store (run once)
python ingestion/ingest.py

# Start RAG service
uvicorn main:app --port 8001 --reload
```

### 3. Spring Boot Backend
```bash
cd Disease_Detector  # Eclipse project
# Run DiseaseDetectorApplication.java as Java Application
# Starts on :8080
```

### 4. Frontend
```bash
cd frontend
npm install
npm run dev
# Opens on :3000
```

### Datasets (download manually)
Place these in `ml-service/training/datasets/`:
- `heart.csv` — [UCI Heart Disease]
- `diabetes.csv` — [Pima Diabetes]

---

## 📁 Project Structure
Disease_Detector/
├── Disease_Detector/        # Spring Boot Backend (Eclipse)
├── frontend/                # Next.js Frontend
├── ml-service/              # FastAPI ML Microservice
│   ├── routers/
│   ├── ml/
│   ├── schemas/
│   └── training/
└── rag-service/             # LangChain RAG Chatbot
├── rag/
└── ingestion/

---
🔄 Future Improvements
Add more disease models
Improve UI/UX
Add user authentication
Deploy to cloud (AWS / Vercel)
Add LLM-based health assistant

📌 Author
Thejaswini M
Computer Science Student | Full Stack + AI Enthusiast
