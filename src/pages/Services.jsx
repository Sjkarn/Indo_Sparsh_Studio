import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      {/* Header */}
      <div className="services-header">
        <h1>
          Our <span>Services</span>
        </h1>
        <p>
          We craft powerful digital solutions that combine design, technology,
          and strategy to help brands grow and dominate the future.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon holo ai">
            <span className="holo-core"></span>

            <div className="energy-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <h3>AI Solutions</h3>
          <p>
            Intelligent automation, smart systems, and data-driven solutions.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon holo dev">
            <span className="holo-core"></span>
            <div className="energy-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <h3>Web & App Development</h3>
          <p>High-performance websites and applications with stunning UI.</p>
        </div>

        <div className="service-card">
          <div className="service-icon holo cyber">
            <span className="holo-core"></span>
            <div className="energy-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <h3>Cyber Security</h3>
          <p>Advanced digital protection and modern security architecture.</p>
        </div>

        <div className="service-card">
          <div className="service-icon holo design">
            <span className="holo-core"></span>
            <div className="energy-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <h3>UI/UX Design</h3>
          <p>Futuristic designs focused on users and brand experience.</p>
        </div>

        <div className="service-card">
          <div className="service-icon holo cloud">
            <span className="holo-core"></span>
            <div className="energy-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <h3>Cloud & DevOps</h3>
          <p>Scalable cloud systems and optimized DevOps pipelines.</p>
        </div>

        <div className="service-card">
          <div className="service-icon holo brand">
            <span className="holo-core"></span>
            <div className="energy-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <h3>Digital Branding</h3>
          <p>Brand identity and creative digital experiences.</p>
        </div>
      </div>
    </section>
  );
}
