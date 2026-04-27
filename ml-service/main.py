from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import heart, diabetes

app = FastAPI(
    title="Disease Detector ML Service",
    description="ML prediction microservice for heart disease and diabetes",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # Spring Boot
    allow_methods=["POST", "GET"],
    allow_headers=["*"]
)

app.include_router(heart.router, prefix="/predict", tags=["Heart"])
app.include_router(diabetes.router, prefix="/predict", tags=["Diabetes"])

@app.get("/health")
def health():
    return {"status": "ok", "service": "ml-service"}