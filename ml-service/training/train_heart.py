import pandas as pd
import numpy as np
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, roc_auc_score

df = pd.read_csv("datasets/heart.csv")

FEATURES = [
    "age", "sex", "cp", "trestbps", "chol",
    "fbs", "restecg", "thalch", "exang",
    "oldpeak", "slope", "ca", "thal"
]
TARGET = "num"

# Convert target to binary
df[TARGET] = (df[TARGET] > 0).astype(int)

# Encode string columns to numbers
df["sex"] = df["sex"].map({"Male": 1, "Female": 0})
df["cp"] = df["cp"].map({
    "typical angina": 3,
    "atypical angina": 2,
    "non-anginal": 1,
    "asymptomatic": 0
})
df["fbs"] = df["fbs"].map({True: 1, False: 0})
df["restecg"] = df["restecg"].map({
    "normal": 0,
    "st-t abnormality": 1,
    "lv hypertrophy": 2
})
df["exang"] = df["exang"].map({True: 1, False: 0})
df["slope"] = df["slope"].map({
    "upsloping": 0,
    "flat": 1,
    "downsloping": 2
})
df["thal"] = df["thal"].map({
    "normal": 2,
    "fixed defect": 1,
    "reversable defect": 3
})

# Drop rows with missing/unmapped values
df = df.dropna(subset=FEATURES + [TARGET])

X = df[FEATURES]
y = df[TARGET]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42, stratify=y
)

model = RandomForestClassifier(
    n_estimators=200,
    max_depth=8,
    min_samples_split=5,
    random_state=42,
    class_weight="balanced"
)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]

print("=== Heart Disease Model ===")
print(classification_report(y_test, y_pred))
print(f"ROC-AUC: {roc_auc_score(y_test, y_proba):.4f}")

with open("../models/heart_model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("../models/heart_scaler.pkl", "wb") as f:
    pickle.dump(scaler, f)

print("\nSaved: heart_model.pkl, heart_scaler.pkl")