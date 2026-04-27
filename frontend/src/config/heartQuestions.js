export const HEART_QUESTIONS = [
  {
    id: "age",
    type: "slider",
    question: "How old are you?",
    label: "Age",
    min: 20, max: 80, step: 1, default: 40, unit: " yrs"
  },
  {
    id: "sex",
    type: "select",
    question: "What is your biological sex?",
    label: "Sex",
    default: 1,
    options: [
      { label: "Male", value: 1 },
      { label: "Female", value: 0 }
    ]
  },
  {
    id: "cp",
    type: "select",
    question: "How would you describe any chest pain you experience?",
    label: "Chest Pain Type",
    default: 0,
    options: [
      { label: "No chest pain", value: 0 },
      { label: "Mild / Atypical", value: 1 },
      { label: "Non-anginal pain", value: 2 },
      { label: "Typical angina (severe)", value: 3 }
    ]
  },
  {
    id: "trestbps",
    type: "slider",
    question: "What is your resting blood pressure?",
    label: "Resting Blood Pressure",
    min: 80, max: 200, step: 1, default: 120, unit: " mmHg"
  },
  {
    id: "chol",
    type: "slider",
    question: "What is your cholesterol level?",
    label: "Serum Cholesterol",
    min: 100, max: 600, step: 1, default: 200, unit: " mg/dL"
  },
  {
    id: "fbs",
    type: "select",
    question: "Is your fasting blood sugar above 120 mg/dL?",
    label: "Fasting Blood Sugar",
    default: 0,
    options: [
      { label: "No (≤ 120 mg/dL)", value: 0 },
      { label: "Yes (> 120 mg/dL)", value: 1 }
    ]
  },
  {
    id: "restecg",
    type: "select",
    question: "What are your resting ECG results?",
    label: "Resting ECG",
    default: 0,
    options: [
      { label: "Normal", value: 0 },
      { label: "ST-T wave abnormality", value: 1 },
      { label: "Left ventricular hypertrophy", value: 2 }
    ]
  },
  {
    id: "thalch",
    type: "slider",
    question: "What is your maximum heart rate during exercise?",
    label: "Max Heart Rate",
    min: 60, max: 220, step: 1, default: 150, unit: " bpm"
  },
  {
    id: "exang",
    type: "select",
    question: "Do you experience chest pain during physical activity?",
    label: "Exercise-Induced Angina",
    default: 0,
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 }
    ]
  },
  {
    id: "oldpeak",
    type: "slider",
    question: "ST depression level (from your ECG, if available — enter 0 if unsure)",
    label: "ST Depression",
    min: 0, max: 6, step: 0.1, default: 1.0, unit: ""
  },
  {
    id: "slope",
    type: "select",
    question: "What is the slope of your peak exercise ST segment?",
    label: "ST Slope",
    default: 1,
    options: [
      { label: "Upsloping", value: 0 },
      { label: "Flat", value: 1 },
      { label: "Downsloping", value: 2 }
    ]
  },
  {
    id: "ca",
    type: "slider",
    question: "Number of major vessels colored by fluoroscopy (0 if unsure)",
    label: "Major Vessels",
    min: 0, max: 4, step: 1, default: 0, unit: ""
  },
  {
    id: "thal",
    type: "select",
    question: "Do you have a known thalassemia condition?",
    label: "Thalassemia",
    default: 2,
    options: [
      { label: "Normal", value: 2 },
      { label: "Fixed defect", value: 1 },
      { label: "Reversible defect", value: 3 }
    ]
  }
];