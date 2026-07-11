const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CancerVision AI Backend Running");
});

app.post("/predict", (req, res) => {
  const { age, smoking, familyHistory } = req.body;

  let score = 0;

  if (age > 50) score += 30;
  if (smoking === "Yes") score += 35;
  if (familyHistory === "Yes") score += 35;

  let level = "";
  let recommendation = "";

  if (score >= 70) {
    level = "High Risk";
    recommendation =
      "Please consult a healthcare professional.";
  } else if (score >= 40) {
    level = "Moderate Risk";
    recommendation =
      "Consider regular health screenings.";
  } else {
    level = "Low Risk";
    recommendation =
      "Maintain a healthy lifestyle.";
  }

  res.json({
    riskLevel: level,
    riskScore: score,
    recommendation,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});