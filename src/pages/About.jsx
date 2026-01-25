import "./About.css";

export default function About() {
  return (
    <section className="about2">
      {/* HERO SPLIT */}
      <div className="about2-hero">
        <div className="about2-left">
          <h1>
            We Are <span>Indo Sparsh</span>
          </h1>
          <p>
            A creative-tech studio crafting futuristic digital experiences. We
            blend design, development, and intelligence to build products that
            feel alive.
          </p>

          <div className="about2-stats">
            <div>
              <h2>50+</h2>
              <span>Projects</span>
            </div>
            <div>
              <h2>20+</h2>
              <span>Clients</span>
            </div>
            <div>
              <h2>5+</h2>
              <span>Years</span>
            </div>
          </div>
        </div>

        <div className="about2-right">
          <div className="energy-core">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* GLASS CARDS */}
      <div className="about2-cards">
        <div className="a2-card">
          <h3>🚀 Mission</h3>
          <p>
            Empower brands with intelligent digital solutions that scale,
            perform, and inspire.
          </p>
        </div>

        <div className="a2-card glow">
          <h3>🧠 Vision</h3>
          <p>
            To shape the future of human-centered technology through immersive
            experiences.
          </p>
        </div>

        <div className="a2-card">
          <h3>⚡ What We Do</h3>
          <p>
            Web & app development, AI integrations, UI/UX systems, and digital
            growth platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
