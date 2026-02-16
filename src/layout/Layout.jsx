import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Layout.css";
import AIChatWidget from "../pages/AIChatWidget";
import Footer from "../pages/Footer";
import WhatsAppButton from "../pages/WhatsAppButton";
import CallButton from "../pages/CallButton";
import ScrollToTop from "../pages/ScrollToTop";
import AIHackerCursor from "../pages/AIHackerCursor";
import PageLoader from "../pages/PageLoader";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // ⏱️ duration
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PageLoader show={loading} />
      <header className="cyber-header">
        <div className="cyber-logo">INDO SPARSH STUDIO</div>

        <nav className={`cyber-nav ${open ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/blog" onClick={() => setOpen(false)}>
            Blog
          </NavLink>

          <NavLink to="/career" onClick={() => setOpen(false)}>
            Career
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {/* 🔥 PREMIUM BUTTON */}
          <NavLink to="/contact" className="quote-btn">
            Request A Quote
          </NavLink>
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
