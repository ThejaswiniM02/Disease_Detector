import pickle
import numpy as np
from pathlib import Path

MODEL_PATH = Path(__file__).parent.parent / "models"

with open(MODEL_PATH / "heart_model.pkl", "rb") as f:
    _model = pickle.load(f)

with open(MODEL_PATH / "heart_scaler.pkl", "rb") as f:
    _scaler = pickle.load(f)

FEATURE_ORDER = [
    "age", "sex", "cp", "trestbps", "chol",
    "fbs", "restecg", "thalch", "exang",
    "oldpeak", "slope", "ca", "thal"
]

FEATURE_LABELS = {
    "age": "Age",
    "sex": "Sex",
    "cp": "Chest Pain",
    "trestbps": "Blood Pressure",
    "chol": "Cholesterol",
    "fbs": "Fasting Blood Sugar",
    "restecg": "Resting ECG",
    "thalach": "Max Heart Rate",
    "exang": "Exercise Angina",
    "oldpeak": "ST Depression",
    "slope": "ST Slope",
    "ca": "Major Vessels",
    "thal": "Thalassemia"
}

def predict_heart(data: dict) -> dict:
    features = np.array([[data[k] for k in FEATURE_ORDER]])
    features_scaled = _scaler.transform(features)

    probability = float(_model.predict_proba(features_scaled)[0][1])

    if probability >= 0.65:
        risk_level = "High"
        recommendation = "Please consult a cardiologist immediately."
    elif probability >= 0.35:
        risk_level = "Moderate"
        recommendation = "Schedule a check-up with your doctor soon."
    else:
        risk_level = "Low"
        recommendation = "Maintain a healthy lifestyle and regular check-ups."

    # Top 3 contributing features
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