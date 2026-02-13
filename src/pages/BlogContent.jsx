import "./BlogContent.css";

export default function BlogContent() {
  return (
    <section className="blog-content-page">
      {/* HERO */}
      <div className="blog-content-hero">
        <h1>
          Client <span>Success Stories</span>
        </h1>

        <p>
          Real experiences from businesses who transformed with Indo Sparsh
          Studio — innovation, trust, and measurable growth.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="blog-content-wrapper">
        {/* CARD */}
        <article className="content-card glow">
          <h2>🚀 Software Development Success</h2>
          <p>
            “Bahut badhiya kaam kiya! We were a small startup with a big idea
            but limited budget. Their smart solutions and dedication turned our
            dream into reality. Pure paisa vasool!”
          </p>

          <div className="author">
            - Rohan Mehta, Founder, AgriGrow Solutions, Bangalore
          </div>
        </article>

        <article className="content-card">
          <h2>💻 IT Services & Support</h2>
          <p>
            “Moving to digital was scary for our 40-year-old family business.
            They treated us like family and explained everything patiently.
            Operations now run smooth like butter!”
          </p>

          <div className="author">
            - Shri Kantilal Shah, Shree Fabrics, Surat
          </div>
        </article>

        <article className="content-card glow">
          <h2>📊 SaaS Product Transformation</h2>
          <p>
            “Productivity increased by 40%. Automation removed bottlenecks and
            the platform is simple enough for everyone.”
          </p>

          <div className="author">
            - Anjali Verma, Operations Head, Delhi NCR
          </div>
        </article>

        <article className="content-card">
          <h2>📱 App Development Impact</h2>
          <p>
            “Our food delivery app increased orders by 60%. Fast, stylish and
            seamless payments integration.”
          </p>

          <div className="author">- Vikram Singh, Punjab Grill House</div>
        </article>

        <article className="content-card glow">
          <h2>🔐 Cybersecurity Excellence</h2>
          <p>
            “They provided a 360-degree shield. Data protection feels like a
            watchful guard working silently.”
          </p>

          <div className="author">- Arvind Kumar, CFO FinSecure Bank</div>
        </article>
      </div>
    </section>
  );
}
