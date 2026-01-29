import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./Layout.css";
import AIChatWidget from "../pages/AIChatWidget";
import Footer from "../pages/Footer";
import WhatsAppButton from "../pages/WhatsAppButton";
import CallButton from "../pages/CallButton";
import ScrollToTop from "../pages/ScrollToTop";
import AIHackerCursor from "../pages/AIHackerCursor";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="cyber-header">
        <div className="cyber-logo">INDO SPARSH STUDIO</div>

        <nav className={`cyber-nav ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link to="/career" onClick={() => setOpen(false)}>
            Career
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        <div
          className={`cyber-hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <main className="cyber-main">
        <Outlet />
      </main>
      <AIHackerCursor />
      <ScrollToTop />
      <AIChatWidget />
      <Footer /> {/* 🔥 always at bottom */}
      <CallButton />
      <WhatsAppButton /> {/* 🔥 floating WhatsApp */}
    </>
  );
}
