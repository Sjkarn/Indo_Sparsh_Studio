import "./Career.css";
import {
  FaRocket,
  FaBrain,
  FaGlobe,
  FaPaperPlane,
  FaComments,
} from "react-icons/fa";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function Career() {
  return (
    <section className="career-section">
      {/* HERO */}
      <div className="career-hero">
        <h1>
          Build Your <span>Future</span> With Us
        </h1>
        <p>
          Join Indo Sparsh Studio and work on futuristic products, cutting-edge
          technology, and meaningful digital experiences.
        </p>
      </div>

      {/* WHY WORK WITH US */}
      <div className="career-highlights">
        <div className="highlight-card">
          <h3>
            <FaRocket className="career-icon" />
            Growth Culture
          </h3>
          <p>Learn, build, and evolve with a team that pushes boundaries.</p>
        </div>

        <div className="highlight-card glow">
          <h3>
            <FaBrain className="career-icon" />
            Innovative Projects
          </h3>
          <p>Work on AI, immersive UI, and next-gen digital platforms.</p>
        </div>

        <div className="highlight-card">
          <h3>
            <FaGlobe className="career-icon" />
            Remote Friendly
          </h3>
          <p>Flexible work culture focused on results and creativity.</p>
        </div>
      </div>

      {/* ================= CAREER PIPELINE ================= */}
      <h2 className="career-title">Our Career Pipeline</h2>

      <div className="career-pipeline">
        <div className="pipeline-track"></div>

        <div className="pipeline-step s1">
          <div className="pipeline-core"></div>
          <div className="pipeline-card">
            <h3>
              <FaPaperPlane className="career-icon" />
              Apply
            </h3>
            <p>Submit your profile and portfolio.</p>
          </div>
        </div>

        <div className="pipeline-step s2">
          <div className="pipeline-core"></div>
          <div className="pipeline-card glow">
            <h3>
              <FaBrain className="career-icon" />
              Screening
            </h3>
            <p>We analyze skills and potential.</p>
          </div>
        </div>

        <div className="pipeline-step s3">
          <div className="pipeline-core"></div>
          <div className="pipeline-card">
            <h3>
              <FaComments className="career-icon" />
              Interview
            </h3>
            <p>Meet the Indo Sparsh team.</p>
          </div>
        </div>

        <div className="pipeline-step s4">
          <div className="pipeline-core"></div>
          <div className="pipeline-card glow">
            <h3>
              <HiOutlineClipboardDocumentList className="career-icon" />
              Task
            </h3>
            <p>Show how you think and build.</p>
          </div>
        </div>

        <div className="pipeline-step s5">
          <div className="pipeline-core"></div>
          <div className="pipeline-card">
            <h3>
              <FaRocket className="career-icon" />
              Welcome
            </h3>
            <p>You become part of Indo Sparsh.</p>
          </div>
        </div>
      </div>

      {/* JOB OPENINGS */}
      <h2 className="career-title">Open Positions</h2>

      <div className="job-grid">
        <div className="job-card">
          <h3>Frontend Developer (React)</h3>
          <p>Build immersive, high-performance user interfaces.</p>
          <span>Experience: 1–3 Years</span>
          <button>Apply Now</button>
        </div>

        <div className="job-card glow">
          <h3>Backend Developer (Node.js)</h3>
          <p>Design secure, scalable backend systems and APIs.</p>
          <span>Experience: 2–4 Years</span>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>UI/UX Designer</h3>
          <p>Create futuristic, human-centered digital experiences.</p>
          <span>Experience: 1–3 Years</span>
          <button>Apply Now</button>
        </div>
      </div>
    </section>
  );
}
