
require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);


const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const Assessment = require("./models/Assessment");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// Home Route
app.get("/", (req, res) => {
  res.send("CancerVision AI Backend Running");
});

// Predict Route
   app.post("/predict", async (req, res) => {
  console.log("Request received!");
  console.log(req.body);

  const { age, smoking, alcohol, familyHistory } = req.body;

  let score = 0;

  if (Number(age) >= 50) score += 30;
  if (smoking === "Yes") score += 30;
  if (alcohol === "Yes") score += 20;
  if (familyHistory === "Yes") score += 20;

  let risk = "";
  let recommendation = "";

  if (score <= 30) {
    risk = "Low";
    recommendation = "Maintain a healthy lifestyle and regular checkups.";
  } else if (score <= 60) {
    risk = "Medium";
    recommendation = "Consult a doctor and consider regular screening.";
  } else {
    risk = "High";
    recommendation = "Please consult an oncologist as soon as possible.";
  }

  const assessment = new Assessment({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    smoking,
    alcohol,
    familyHistory,
    risk,
    score: score + "%",
    recommendation,
  });

  await assessment.save();

  res.json({
    risk,
    score: score + "%",
    recommendation,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});