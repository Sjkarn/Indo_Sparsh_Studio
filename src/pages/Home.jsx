import "./Home.css";
import ScrollBeam from "./ScrollBeam";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero">
        {/* 🌌 BACKGROUND IMAGE LAYER */}
        <div className="hero-bg"></div>

        {/* 🌈 GRADIENT + GLOW OVERLAY */}
        <div className="hero-overlay"></div>
        {/* 🔥 PARTICLES */}
        <div className="cyber-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

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
            <button
              className="btn-primary"
              onClick={() => {
                document
                  .getElementById("project")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= PROJECTS WE DISCUSS ================= */}
      <section className="projects-discuss" id="project">
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
          <a href="https://wa.me/918005351770">Start a Discussion</a>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= PORTFOLIO SHOWCASE ================= */}
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-hero">
          <h1>
            Our <span>Portfolio</span>
          </h1>
          <p>
            A curated selection of digital products we’ve crafted — blending
            technology, design, and performance.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>AI SaaS Dashboard</h3>
            <p>Analytics, automation, and real-time insights.</p>
            <span className="tag">AI / SaaS</span>
          </div>

          <div className="portfolio-card glow">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>E-Commerce Platform</h3>
            <p>High-conversion storefront with secure payments.</p>
            <span className="tag">E-Commerce</span>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Mobile App UI/UX</h3>
            <p>Human-centered design with futuristic visuals.</p>
            <span className="tag">UI / UX</span>
          </div>

          <div className="portfolio-card glow">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Business Automation Tool</h3>
            <p>Internal dashboards, workflows, and reporting.</p>
            <span className="tag">Automation</span>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Brand Website</h3>
            <p>Fast, immersive, and conversion-driven web presence.</p>
            <span className="tag">Branding</span>
          </div>

          <div className="portfolio-card glow">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Experimental MVP</h3>
            <p>Rapid prototyping for next-gen product ideas.</p>
            <span className="tag">MVP</span>
          </div>
        </div>

        <div className="portfolio-cta">
          <h2>Want to see more?</h2>
          <p>Let’s build something remarkable together.</p>
          <a href="/contact">View Full Portfolio</a>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials-section">
        <div className="testimonials-hero">
          <h1>
            What Our <span>Clients Say</span>
          </h1>
          <p>
            Trusted by startups, founders, and enterprises worldwide — here’s
            what they say about working with us.
          </p>
        </div>

        <div className="testimonials-marquee">
          <div className="testimonials-track">
            {[
              {
                name: "Rohit Sharma",
                role: "Startup Founder",
                text: "Exceptional quality and futuristic execution.",
                img: "/tech/aws.png",
              },
              {
                name: "Ananya Verma",
                role: "Product Manager",
                text: "Their UI/UX thinking is next-level.",
                img: "/tech/bootstrap.png",
              },
              {
                name: "Daniel Cruz",
                role: "SaaS CEO",
                text: "Fast delivery without compromising stability.",
                img: "/tech/css.png",
              },
              {
                name: "Priya Singh",
                role: "Marketing Lead",
                text: "Our conversions increased dramatically.",
                img: "/tech/expressjs.png",
              },
              {
                name: "Alex Morgan",
                role: "Tech Entrepreneur",
                text: "Clean architecture and great communication.",
                img: "/tech/git.png",
              },
              {
                name: "Neha Kapoor",
                role: "Business Owner",
                text: "They truly understand business goals.",
                img: "/tech/github.png",
              },
              {
                name: "Michael Lee",
                role: "CTO",
                text: "Security-first and performance-focused team.",
                img: "/tech/html.webp",
              },
              {
                name: "Saurabh Jain",
                role: "Startup Mentor",
                text: "Highly recommended for scaling products.",
                img: "/tech/javascript.png",
              },
              {
                name: "Emily Watson",
                role: "Design Head",
                text: "Design systems were beautifully executed.",
                img: "/tech/mongodb.png",
              },
              {
                name: "Amit Patel",
                role: "Founder",
                text: "From idea to launch — flawless journey.",
                img: "/tech/nodejs.png",
              },
            ]
              /* 🔁 duplicate array for infinite marquee */
              .concat([
                {
                  name: "Rohit Sharma",
                  role: "Startup Founder",
                  text: "Exceptional quality and futuristic execution.",
                  img: "/tech/aws.png",
                },
                {
                  name: "Ananya Verma",
                  role: "Product Manager",
                  text: "Their UI/UX thinking is next-level.",
                  img: "/tech/bootstrap.png",
                },
                {
                  name: "Daniel Cruz",
                  role: "SaaS CEO",
                  text: "Fast delivery without compromising stability.",
                  img: "/tech/css.png",
                },
                {
                  name: "Priya Singh",
                  role: "Marketing Lead",
                  text: "Our conversions increased dramatically.",
                  img: "/tech/expressjs.png",
                },
                {
                  name: "Alex Morgan",
                  role: "Tech Entrepreneur",
                  text: "Clean architecture and great communication.",
                  img: "/tech/git.png",
                },
                {
                  name: "Neha Kapoor",
                  role: "Business Owner",
                  text: "They truly understand business goals.",
                  img: "/tech/github.png",
                },
                {
                  name: "Michael Lee",
                  role: "CTO",
                  text: "Security-first and performance-focused team.",
                  img: "/tech/html.webp",
                },
                {
                  name: "Saurabh Jain",
                  role: "Startup Mentor",
                  text: "Highly recommended for scaling products.",
                  img: "/tech/javascript.png",
                },
                {
                  name: "Emily Watson",
                  role: "Design Head",
                  text: "Design systems were beautifully executed.",
                  img: "/tech/mongodb.png",
                },
                {
                  name: "Amit Patel",
                  role: "Founder",
                  text: "From idea to launch — flawless journey.",
                  img: "/tech/nodejs.png",
                },
              ])
              .map((t, i) => (
                <div
                  className={`testimonial-card ${i % 2 === 0 ? "glow" : ""}`}
                  key={i}
                >
                  <div className="testimonial-glow"></div>

                  {/* avatar */}
                  <div className="testimonial-avatar">
                    <img src={t.img} alt={t.name} />
                  </div>

                  {/* stars */}
                  <div className="testimonial-stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="half">★</span>
                  </div>

                  <p className="testimonial-text">“{t.text}”</p>
                  <h3>{t.name}</h3>
                  <span>{t.role}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      <ScrollBeam />

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

      <ScrollBeam />

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="industries-section">
        <div className="industries-hero">
          <h1>
            Industries <span>We Serve</span>
          </h1>
          <p>
            We design and develop powerful digital products across multiple
            industries, combining technology, creativity, and innovation.
          </p>
        </div>

        <div className="industries-grid">
          <div className="industry-card">
            <h3>🏥 Healthcare</h3>
            <p>Hospital systems, health apps, dashboards.</p>
          </div>

          <div className="industry-card glow">
            <h3>🛒 E-Commerce</h3>
            <p>Online stores, marketplaces, booking platforms.</p>
          </div>

          <div className="industry-card">
            <h3>📚 Education</h3>
            <p>E-learning platforms, LMS systems, portals.</p>
          </div>

          <div className="industry-card glow">
            <h3>💼 Business & Startups</h3>
            <p>CRMs, automation tools, admin panels.</p>
          </div>

          <div className="industry-card">
            <h3>🏦 Finance & FinTech</h3>
            <p>Secure apps, analytics platforms, fintech tools.</p>
          </div>

          <div className="industry-card glow">
            <h3>🎮 Media & Gaming</h3>
            <p>Interactive apps, communities, creative tech.</p>
          </div>

          <div className="industry-card">
            <h3>🚚 Logistics</h3>
            <p>Tracking systems, fleet dashboards.</p>
          </div>

          <div className="industry-card glow">
            <h3>🤖 AI & Automation</h3>
            <p>Chatbots, smart tools, intelligent systems.</p>
          </div>
        </div>
      </section>

      <ScrollBeam />

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
