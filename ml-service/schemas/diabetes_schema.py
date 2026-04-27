from pydantic import BaseModel, Field

class DiabetesInput(BaseModel):
    Pregnancies: int = Field(..., ge=0, le=20)
    Glucose: float = Field(..., ge=50, le=300, description="Plasma glucose concentration")
    BloodPressure: float = Field(..., ge=40, le=140, description="Diastolic blood pressure (mmHg)")
    SkinThickness: float = Field(..., ge=0, le=100, description="Triceps skin fold thickness (mm)")
    Insulin: float = Field(..., ge=0, le=900, description="2-Hour serum insulin (mu U/ml)")
    BMI: float = Field(..., ge=10.0, le=70.0, description="Body mass index")
    DiabetesPedigreeFunction: float = Field(..., ge=0.0, le=2.5, description="Diabetes pedigree function")
    Age: int = Field(..., ge=18, le=90)