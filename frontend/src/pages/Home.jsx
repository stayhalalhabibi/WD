import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}

      <section className="home">

        <div className="hero">

          <div className="hero-text">

            <h1>
              Welcome to <span>CancerVision AI</span>
            </h1>

            <p>
              Empowering early cancer risk assessment using
              Artificial Intelligence. Our smart healthcare
              platform analyzes health information and provides
              personalized cancer risk predictions to encourage
              early awareness and preventive care.
            </p>

            <div className="hero-buttons">

              <Link to="/assessment" className="btn-primary">
                Start Assessment
              </Link>

              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>

            </div>

          </div>

          <div className="hero-image">

            <div className="ai-card">

              <div className="ai-icon">🧬</div>

              <h2>AI Powered Prediction</h2>

              <p>
                Analyze health data with intelligent algorithms
                to estimate cancer risk quickly and accurately.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Why Choose CancerVision AI?
          </h2>

          <p className="section-subtitle">
            A modern healthcare platform built with Artificial
            Intelligence to help users understand their health
            risks and make informed decisions.
          </p>

          <div className="grid-3">

            <div className="card">
              <h2>🧠 AI Analysis</h2>

              <p>
                Uses intelligent algorithms to analyze health
                information and estimate cancer risk.
              </p>
            </div>

            <div className="card">
              <h2>⚡ Fast Results</h2>

              <p>
                Get instant prediction reports within seconds
                after submitting your health details.
              </p>
            </div>

            <div className="card">
              <h2>🔒 Secure Data</h2>

              <p>
                Your health information remains private and is
                processed securely.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Platform Highlights
          </h2>

          <div className="grid-3">

            <div className="card">

              <h1 style={{ color: "#2563eb" }}>98%</h1>

              <p>Prediction Accuracy</p>

            </div>

            <div className="card">

              <h1 style={{ color: "#10b981" }}>24/7</h1>

              <p>AI Availability</p>

            </div>

            <div className="card">

              <h1 style={{ color: "#ef4444" }}>1000+</h1>

              <p>Health Assessments</p>

            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="section">

        <div className="container">

          <div className="card" style={{ textAlign: "center" }}>

            <h2 className="section-title">
              Take Your Health Assessment Today
            </h2>

            <p className="section-subtitle">
              Early awareness can make a difference. Start your
              AI-powered cancer risk assessment now.
            </p>

            <Link to="/assessment" className="btn">
              Start Free Assessment
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;