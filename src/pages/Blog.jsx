// export default function Blog() {
//   return <h1>Blog Page</h1>;
// }

import "./Blog.css";

export default function Blog() {
  const posts = [
    {
      title: "Your blog post",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
    },
    {
      title: "Your blog post",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
    },
    {
      title: "Your blog post",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
    },
    {
      title: "Your blog post",
      desc: "Blog post description.",
      date: "10/22/2025",
      time: "1 min read",
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

          <button className="featured-btn">Read Article</button>
        </div>

        <div className="featured-image"></div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {posts.map((post, i) => (
          <article className="blog-card" key={i}>
            <div className="blog-image"></div>

            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="blog-desc">{post.desc}</p>

              <div className="blog-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
