import { useState } from "react";
import { predictHeart, predictDiabetes } from "@/services/api";

export function usePrediction(type) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiFn = type === "heart" ? predictHeart : predictDiabetes;
      const res = await apiFn(formData);
      const data = res.data;
      console.log("Raw API response:", data);

      // Remap snake_case to camelCase
      setResult({
        probability: data.probability,
        riskLevel: data.riskLevel || data.risk_level,
        recommendation: data.recommendation,
        topFactors: data.topFactors || data.top_factors || [],
        disclaimer: data.disclaimer
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return { result, loading, error, submit, reset };
}