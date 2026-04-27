from fastapi import APIRouter, HTTPException
from schemas.heart_schema import HeartInput
from ml.heart_predictor import predict_heart

router = APIRouter()

@router.post("/heart")
def heart_prediction(data: HeartInput):
    try:
        result = predict_heart(data.model_dump())
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))