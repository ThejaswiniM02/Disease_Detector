from pydantic import BaseModel, Field

class HeartInput(BaseModel):
    age: int = Field(..., ge=20, le=80, description="Age in years")
    sex: int = Field(..., ge=0, le=1, description="0=Female, 1=Male")
    cp: int = Field(..., ge=0, le=3, description="Chest pain type: 0=None, 1=Mild, 2=Moderate, 3=Severe")
    trestbps: float = Field(..., ge=80, le=200, description="Resting blood pressure (mmHg)")
    chol: float = Field(..., ge=100, le=600, description="Cholesterol (mg/dL)")
    fbs: int = Field(..., ge=0, le=1, description="Fasting blood sugar > 120: 0=No, 1=Yes")
    restecg: int = Field(..., ge=0, le=2, description="Resting ECG: 0=Normal, 1=ST abnormality, 2=LV hypertrophy")
    thalch: float = Field(..., ge=60, le=220, description="Max heart rate achieved")
    exang: int = Field(..., ge=0, le=1, description="Exercise-induced angina: 0=No, 1=Yes")
    oldpeak: float = Field(..., ge=0.0, le=6.0, description="ST depression during exercise")
    slope: int = Field(..., ge=0, le=2, description="Slope of peak ST segment: 0=Up, 1=Flat, 2=Down")
    ca: int = Field(..., ge=0, le=4, description="Major vessels colored by fluoroscopy")
    thal: int = Field(..., ge=0, le=3, description="Thalassemia: 1=Fixed defect, 2=Normal, 3=Reversible defect")