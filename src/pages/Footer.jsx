import "./Footer.css";

export default function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="footer-glow-line"></div>

      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} <span>Indo Sparsh Studio</span>. All
          rights reserved.
        </p>

        <p className="footer-tagline">
          Crafting futuristic digital experiences 🚀
        </p>
      </div>
    </footer>
  );
}
