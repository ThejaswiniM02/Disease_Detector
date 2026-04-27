import pickle
import numpy as np
from pathlib import Path

MODEL_PATH = Path(__file__).parent.parent / "models"

with open(MODEL_PATH / "diabetes_model.pkl", "rb") as f:
    _model = pickle.load(f)

with open(MODEL_PATH / "diabetes_scaler.pkl", "rb") as f:
    _scaler = pickle.load(f)

FEATURE_ORDER = [
    "Pregnancies", "Glucose", "BloodPressure", "SkinThickness",
    "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"
]

FEATURE_LABELS = {
    "Pregnancies": "Number of Pregnancies",
    "Glucose": "Glucose Level",
    "BloodPressure": "Blood Pressure",
    "SkinThickness": "Skin Thickness",
    "Insulin": "Insulin Level",
    "BMI": "BMI",
    "DiabetesPedigreeFunction": "Family History Score",
    "Age": "Age"
}

def predict_diabetes(data: dict) -> dict:
    features = np.array([[data[k] for k in FEATURE_ORDER]])
    features_scaled = _scaler.transform(features)

    probability = float(_model.predict_proba(features_scaled)[0][1])

    if probability >= 0.65:
        risk_level = "High"
        recommendation = "Consult an endocrinologist or diabetologist immediately."
    elif probability >= 0.35:
        risk_level = "Moderate"
        recommendation = "Consider lifestyle changes and schedule a fasting glucose test."
    else:
        risk_level = "Low"
        recommendation = "Keep up healthy habits and monitor glucose periodically."

    importances = _model.feature_importances_
    top_indices = np.argsort(importances)[::-1][:3]
    top_factors = [
        {"feature": FEATURE_LABELS[FEATURE_ORDER[i]], "importance": round(float(importances[i]), 3)}
        for i in top_indices
    ]

    return {
        "probability": round(probability, 3),
        "risk_level": risk_level,
        "recommendation": recommendation,
        "top_factors": top_factors,
        "disclaimer": "This is not a medical diagnosis. Always consult a qualified physician."
    }