import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <h1 className="about-title">
          About CancerVision AI
        </h1>

        <p className="about-subtitle">
          CancerVision AI is an intelligent healthcare platform
          that helps users estimate cancer risk using artificial
          intelligence and health-related information.
        </p>

        <div className="about-grid">

          <div className="about-card">

            <div className="icon">🎯</div>

            <h2>Mission</h2>

            <p>
              Help people detect cancer risks early
              through AI-powered assessment.
            </p>

          </div>

          <div className="about-card">

            <div className="icon">👁️</div>

            <h2>Vision</h2>

            <p>
              Make healthcare technology accessible
              to everyone.
            </p>

          </div>

          <div className="about-card">

            <div className="icon">🤖</div>

            <h2>Technology</h2>

            <p>
              Built using React, Node.js,
              Express, MongoDB and AI.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;