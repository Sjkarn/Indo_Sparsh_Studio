// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Indo Sparsh Studio – Home</p>
//     </div>
//   );
// }

import "./Home.css";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="home-container">
          <h1>
            Crafting <span>Digital Experiences</span>
            <br />
            Innovative Solutions
          </h1>

          <p>
            Você sabia que o mercado de pets cresceu 75% somente neste ano? A
            procura por diferentes formas de prolongar ainda mais a vida dos
            bichinhos virou uma febre.
          </p>

          <div className="home-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS WE DISCUSS ================= */}
      <section className="projects-discuss">
        <div className="pd-hero">
          <h1>
            Projects <span>We Discuss</span>
          </h1>
          <p>
            We collaborate, brainstorm, and design next-generation digital
            products. These are the types of projects we love to explore.
          </p>
        </div>

        <div className="pd-grid">
          <div className="pd-card">
            <h3>🤖 AI-Powered Platforms</h3>
            <p>
              Chatbots, automation tools, recommendation systems, intelligent
              dashboards.
            </p>
          </div>

          <div className="pd-card glow">
            <h3>🌐 Web & App Products</h3>
            <p>
              High-performance websites, SaaS tools, dashboards, and mobile
              apps.
            </p>
          </div>

          <div className="pd-card">
            <h3>🎨 UI/UX Systems</h3>
            <p>
              Design systems, futuristic interfaces, brand experiences, and
              product flows.
            </p>
          </div>

          <div className="pd-card glow">
            <h3>📊 Startup & Business Tools</h3>
            <p>
              CRM systems, admin panels, internal tools, and analytics
              platforms.
            </p>
          </div>

          <div className="pd-card">
            <h3>🛒 E-Commerce & Marketplaces</h3>
            <p>
              Scalable online stores, booking systems, and service platforms.
            </p>
          </div>

          <div className="pd-card glow">
            <h3>🚀 Experimental Concepts</h3>
            <p>MVPs, proof-of-concepts, and next-gen product ideas.</p>
          </div>
        </div>

        <div className="pd-cta">
          <h2>Have a project in mind?</h2>
          <p>Let’s discuss it and transform your idea into reality.</p>
          <a href="/contact">Start a Discussion</a>
        </div>
      </section>

      {/* ================= OUR CLIENTS ================= */}
      <section className="clients-section">
        <div className="clients-hero">
          <h1>
            Our <span>Clients</span>
          </h1>
          <p>
            We collaborate with startups, brands, and businesses to build
            powerful digital experiences.
          </p>
        </div>

        {/* ===== CLIENT CARDS GRID ===== */}
        <div className="clients-grid">
          <div className="client-card">
            <div className="client-logo">LOGO</div>
            <h3>Tech Startup</h3>
            <span>AI Platform</span>
          </div>

          <div className="client-card glow">
            <div className="client-logo">LOGO</div>
            <h3>E-Commerce Brand</h3>
            <span>Web & App</span>
          </div>

          <div className="client-card">
            <div className="client-logo">LOGO</div>
            <h3>EdTech Company</h3>
            <span>Learning Platform</span>
          </div>

          <div className="client-card glow">
            <div className="client-logo">LOGO</div>
            <h3>Business Firm</h3>
            <span>CRM System</span>
          </div>

          <div className="client-card">
            <div className="client-logo">LOGO</div>
            <h3>Healthcare Brand</h3>
            <span>Management App</span>
          </div>

          <div className="client-card glow">
            <div className="client-logo">LOGO</div>
            <h3>Creative Studio</h3>
            <span>UI/UX System</span>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY WE USED ================= */}
      <section className="tech-section">
        <div className="tech-hero">
          <h1>
            Technology <span>We Used</span>
          </h1>
          <p>
            We work with modern, powerful, and scalable technologies to build
            high-performance digital products.
          </p>
        </div>

        {/* ===== AUTO SCROLL TECHNOLOGY LOGOS ===== */}
        <div className="clients-marquee">
          <div className="marquee-track">
            <div className="marquee-item">
              <img src="/tech/html.webp" alt="HTML" />
            </div>
            <div className="marquee-item">
              <img src="/tech/css.png" alt="CSS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/bootstrap.png" alt="Bootstrap" />
            </div>
            <div className="marquee-item">
              <img src="/tech/javascript.png" alt="JavaScript" />
            </div>
            <div className="marquee-item">
              <img src="/tech/nodejs.png" alt="NodeJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/expressjs.png" alt="ExpressJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/git.png" alt="Git" />
            </div>
            <div className="marquee-item">
              <img src="/tech/github.png" alt="GitHub" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mongodb.png" alt="MongoDB" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mysql.png" alt="MySQL" />
            </div>
            <div className="marquee-item">
              <img src="/tech/postman.png" alt="Postman" />
            </div>
            <div className="marquee-item">
              <img src="/tech/aws.png" alt="AWS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/redis.png" alt="Redis" />
            </div>
            <div className="marquee-item">
              <img src="/tech/react.png" alt="React" />
            </div>

            {/* duplicate for smooth infinite loop */}
            <div className="marquee-item">
              <img src="/tech/html.webp" alt="HTML" />
            </div>
            <div className="marquee-item">
              <img src="/tech/css.png" alt="CSS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/bootstrap.png" alt="Bootstrap" />
            </div>
            <div className="marquee-item">
              <img src="/tech/javascript.png" alt="JavaScript" />
            </div>
            <div className="marquee-item">
              <img src="/tech/nodejs.png" alt="NodeJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/expressjs.png" alt="ExpressJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/git.png" alt="Git" />
            </div>
            <div className="marquee-item">
              <img src="/tech/github.png" alt="GitHub" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mongodb.png" alt="MongoDB" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mysql.png" alt="MySQL" />
            </div>
            <div className="marquee-item">
              <img src="/tech/postman.png" alt="Postman" />
            </div>
            <div className="marquee-item">
              <img src="/tech/aws.png" alt="AWS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/redis.png" alt="Redis" />
            </div>
            <div className="marquee-item">
              <img src="/tech/react.png" alt="React" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
