import "./Blog.css";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

export default function Blog() {
  const posts = [
    {
      title: "Digital Marketing Tips",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
      image: "/tech/blog1.jpeg",
      link: "/digital-marketing", // 👈 redirect page
    },
    {
      title: "IT Trends",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
      image: "/tech/blog2.jpeg",
      link: "/it-trends", // 👈 redirect page
    },
    {
      title: "Business Growth Strategies",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
      image: "/tech/blog3.jpeg",
      link: "/business-growth", // 👈 redirect page
    },
    {
      title: "Case Studies",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
      image: "/tech/blog4.jpeg",
      link: "/case-studies", // 👈 redirect page
    },
  ];

  return (
    <section className="blog-section">
      {/* Header */}
      <div className="blog-header">
        <h1>
          Our <span>Blog</span>
        </h1>
        <p>Insights, ideas, and innovations from Indo Sparsh Studio.</p>
      </div>

      {/* ===== FEATURED BLOG HERO ===== */}
      <div className="featured-blog">
        <div className="featured-content">
          <span className="featured-tag">FEATURED</span>
          <h2>The Future of AI in Digital Experiences</h2>
          <p>
            Discover how artificial intelligence is transforming modern
            applications, user interfaces, and the way humans interact with
            technology.
          </p>

          <div className="featured-meta">
            <span>10/22/2025</span>
            <span>•</span>
            <span>3 min read</span>
          </div>

          <Link to="/future-ai" className="featured-btn">
            Read Article
          </Link>
        </div>

        <div
          className="featured-image"
          style={{ backgroundImage: "url('/tech/future-ai.jpeg')" }}
        ></div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {posts.map((post, i) => (
          <article className="blog-card" key={i}>
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>

            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="blog-desc">{post.desc}</p>

              <div className="blog-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.time}</span>

                {/* clickable button */}
                <Link to={post.link} className="read-more-btn">
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
