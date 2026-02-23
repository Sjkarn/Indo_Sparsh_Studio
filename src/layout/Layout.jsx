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

  useEffect(() => {
    const thumb = document.querySelector(".cyber-thumb");
    const scrollbar = document.querySelector(".cyber-scrollbar");

    if (!thumb || !scrollbar) return;

    let isDragging = false;
    let startY = 0;
    let startTop = 0;
    let ticking = false;

    const updateScrollbar = () => {
      if (isDragging) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          const scrollPercent = scrollTop / docHeight;

          const thumbHeight =
            (document.documentElement.clientHeight /
              document.documentElement.scrollHeight) *
            scrollbar.offsetHeight;

          thumb.style.height = thumbHeight + "px";

          thumb.style.top =
            scrollPercent * (scrollbar.offsetHeight - thumbHeight) + "px";

          ticking = false;
        });

        ticking = true;
      }
    };

    thumb.addEventListener("mousedown", (e) => {
      isDragging = true;
      startY = e.clientY;
      startTop = thumb.offsetTop;
      document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      const deltaY = e.clientY - startY;
      const maxTop = scrollbar.offsetHeight - thumb.offsetHeight;

      let newTop = startTop + deltaY;
      newTop = Math.max(0, Math.min(newTop, maxTop));

      thumb.style.top = newTop + "px";

      const scrollPercent = newTop / maxTop;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // 🔥 instant scroll without animation
      window.scrollTo(0, scrollPercent * docHeight);
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.userSelect = "auto";
    });

    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    updateScrollbar();

    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);

  return (
    <>
      <PageLoader show={loading} />
      <div className="cyber-scrollbar">
        <div className="cyber-thumb"></div>
      </div>
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
            <span className="quote-text">Request A Quote</span>
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
