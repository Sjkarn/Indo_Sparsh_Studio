import { useEffect, useRef, useState } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [blast, setBlast] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    // 🔥 CLICK EFFECTS ONLY
    setBlast(true);
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    setTimeout(() => setBlast(false), 400);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`rocket-only ${show ? "show" : ""} ${blast ? "blast" : ""}`}
        onClick={goTop}
      >
        <div className="rocket-icon">🚀</div>

        {/* sparks only visible when blast */}
        {blast && (
          <>
            {/* 💥 flash */}
            <span className="blast-flash"></span>

            {/* 💨 exhaust smoke */}
            <span className="smoke s1"></span>
            <span className="smoke s2"></span>
            <span className="smoke s3"></span>
            <span className="smoke s4"></span>
          </>
        )}
      </div>

      <audio ref={audioRef} src="/sounds/rocket.mp3" preload="auto" />
    </>
  );
}
