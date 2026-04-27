export const DIABETES_QUESTIONS = [
  {
    id: "Age",
    type: "slider",
    question: "How old are you?",
    label: "Age",
    min: 18, max: 90, step: 1, default: 30, unit: " yrs"
  },
  {
    id: "Pregnancies",
    type: "slider",
    question: "How many times have you been pregnant? (Enter 0 if not applicable)",
    label: "Number of Pregnancies",
    min: 0, max: 20, step: 1, default: 0, unit: ""
  },
  {
    id: "Glucose",
    type: "slider",
    question: "What is your plasma glucose concentration? (2-hour oral glucose tolerance test)",
    label: "Glucose Level",
    min: 50, max: 300, step: 1, default: 100, unit: " mg/dL"
  },
  {
    id: "BloodPressure",
    type: "slider",
    question: "What is your diastolic blood pressure?",
    label: "Blood Pressure",
    min: 40, max: 140, step: 1, default: 72, unit: " mmHg"
  },
  {
    id: "SkinThickness",
    type: "slider",
    question: "Triceps skin fold thickness (enter 0 if unknown)",
    label: "Skin Thickness",
    min: 0, max: 100, step: 1, default: 20, unit: " mm"
  },
  {
    id: "Insulin",
    type: "slider",
    question: "2-Hour serum insulin level (enter 0 if unknown)",
    label: "Insulin",
    min: 0, max: 900, step: 1, default: 79, unit: " μU/mL"
  },
  {
    id: "BMI",
    type: "slider",
    question: "What is your Body Mass Index (BMI)?",
    label: "BMI",
    min: 10, max: 70, step: 0.1, default: 25.0, unit: " kg/m²"
  },
  {
    id: "DiabetesPedigreeFunction",
    type: "slider",
    question: "Diabetes pedigree function score (0 = no family history, 2.5 = strong history)",
    label: "Family History Score",
    min: 0, max: 2.5, step: 0.01, default: 0.3, unit: ""
  }
];