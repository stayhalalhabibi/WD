import { useState } from "react";
import axios from "axios";

import "./Assessment.css";

function Assessment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    smoking: "",
    familyHistory: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.smoking ||
      !formData.familyHistory
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        {
          age: Number(formData.age),
          smoking: formData.smoking,
          familyHistory: formData.familyHistory,
        }
      );

      setResult({
        level: response.data.riskLevel,
        score: `${response.data.riskScore}%`,
        recommendation: response.data.recommendation,
      });
    } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("MESSAGE:", error.message);
  console.log("RESPONSE:", error.response);
  console.log("REQUEST:", error.request);

  alert("Backend connection failed.");
}
  };

  return (
  <div
    style={{
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <h1>🏥 CancerVision AI</h1>

    <h3>Early Cancer Risk Assessment System</h3>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Your Age"
        value={formData.age}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="smoking"
        value={formData.smoking}
        onChange={handleChange}
      >
        <option value="">Smoking?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <br /><br />

      <select
        name="familyHistory"
        value={formData.familyHistory}
        onChange={handleChange}
      >
        <option value="">Family History?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <br /><br />

      <button type="submit">
        Check Risk
      </button>
    </form>

    {result && (
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2>📊 Assessment Report</h2>

        <p>
          <strong>Name:</strong> {formData.name}
        </p>

        <p
         style={{
           color:
            result.level === "High Risk"
             ? "red"
             : result.level === "Moderate Risk"
             ? "orange"
             : "green",
            fontWeight: "bold",
            fontSize: "22px",
       }}
>
       Risk Level: {result.level}
       </p>

        <p>
          <strong>Risk Score:</strong> {result.score}
          <div
  style={{
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: "10px",
    marginTop: "10px",
  }}
>
  <div
    style={{
      width: result.score,
      height: "20px",
      borderRadius: "10px",
      backgroundColor:
        result.level === "High Risk"
          ? "red"
          : result.level === "Moderate Risk"
          ? "orange"
          : "green",
    }}
  ></div>
</div>
        </p>

        <p>
          <strong>Recommendation:</strong>{" "}
          {result.recommendation}
        </p>
      </div>
    )}
  </div>
);
    
}

export default Assessment;