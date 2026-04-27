from fastapi import APIRouter, HTTPException
from schemas.diabetes_schema import DiabetesInput
from ml.diabetes_predictor import predict_diabetes

router = APIRouter()

@router.post("/diabetes")
def diabetes_prediction(data: DiabetesInput):
    try:
        result = predict_diabetes(data.model_dump())
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))