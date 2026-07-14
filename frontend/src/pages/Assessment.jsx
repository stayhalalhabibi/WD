import "./Assessment.css";
import { useState } from "react";

function Assessment() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    smoking: "No",
    alcohol: "No",
    familyHistory: "No",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation starts here
  if (formData.name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (formData.age === "") {
    alert("Please enter your age.");
    return;
  }
  // starts loading 
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setResult(data);
      setLoading(false);

      

    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Unable to connect to backend.");
    }
  };

  return (
    <section className="assessment">
      <div className="assessment-card">
        <h1>Cancer Risk Assessment</h1>

        <p>
          Fill in your health information to estimate your cancer risk.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}

          <div className="form-group">
            <label>Full Name</label>

            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          {/* Age */}

          <div className="form-group">
            <label>Age</label>

            <input
              className="form-control"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </div>

          {/* Gender */}

          <div className="form-group">
            <label>Gender</label>

            <select
              className="form-control"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Smoking */}

          <div className="form-group">
            <label>Smoking</label>

            <select
              className="form-control"
              name="smoking"
              value={formData.smoking}
              onChange={handleChange}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Alcohol */}

          <div className="form-group">
            <label>Alcohol Consumption</label>

            <select
              className="form-control"
              name="alcohol"
              value={formData.alcohol}
              onChange={handleChange}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Family History */}

          <div className="form-group">
            <label>Family History</label>

            <select
              className="form-control"
              name="familyHistory"
              value={formData.familyHistory}
              onChange={handleChange}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

           <button
  className="predict-btn"
  type="submit"
  disabled={loading}
>
  {loading ? "Predicting..." : "Predict Risk"}
</button>

        </form>

      {result && (
  <div className="result">

    <h2>Prediction Result</h2>

    <div className={`risk ${result.risk.toLowerCase()}`}>
      {result.risk}
    </div>

    <h3>Risk Score</h3>

    <h1>{result.score}</h1>

    <p>{result.recommendation}</p>

      </div>
      )}
      </div>
    </section>
  );
}

export default Assessment;
