import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function Home() {
  const headlineRef = useRef(null); // the typing target

  useEffect(() => {
    const el = headlineRef.current;
    const pairs = ["Research", "Code", "Deploy"];
    const prefix = "Design × ";
    let pairIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let prefixDone = false;
    let timeout;

    function tick() {
      const target = pairs[pairIndex];
      const full = prefix + target;

      if (!prefixDone) {
        charIndex++;
        el.innerHTML =
          full.slice(0, charIndex) + '<span class="cursor"></span>';
        if (charIndex === full.length) {
          prefixDone = true;
          deleting = true;
          charIndex = target.length;
          timeout = setTimeout(tick, 2800);
        } else {
          timeout = setTimeout(tick, 75);
        }
        return;
      }

      if (!deleting) {
        charIndex++;
        el.innerHTML =
          prefix + target.slice(0, charIndex) + '<span class="cursor"></span>';
        if (charIndex === target.length) {
          deleting = true;
          timeout = setTimeout(tick, 3000);
        } else {
          timeout = setTimeout(tick, 75);
        }
      } else {
        charIndex--;
        el.innerHTML =
          prefix + target.slice(0, charIndex) + '<span class="cursor"></span>';
        if (charIndex === 0) {
          deleting = false;
          pairIndex = (pairIndex + 1) % pairs.length;
          timeout = setTimeout(tick, 400);
        } else {
          timeout = setTimeout(tick, 200);
        }
      }
    }

    el.innerHTML = '<span class="cursor"></span>';
    timeout = setTimeout(tick, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{ padding: "40px 48px 52px", maxWidth: "900px", margin: "0 auto" }}
    >
      <div ref={headlineRef} className="typed-headline"></div>

      <p className="name-line">Eszti Hollenback</p>

      <p className="bio">
        I design systems and build interfaces — working at the intersection of
        research, systems thinking, and frontend code.
      </p>

      <div className="work-section">
        <div className="work-header">
          <span className="work-label">Selected work</span>
        </div>
        <Link to="/work/error-series" className="work-row">
          <span className="row-num">01</span>
          <span className="row-title-group">
            <span className="row-title featured">Error Series</span>
            <span className="row-subtitle">
              Designing for human recovery in agentic AI systems
            </span>
          </span>
          <span className="row-tag">UX · AI</span>
          <span className="row-arrow">→</span>
        </Link>
        <Link to="/work/saas-platform" className="work-row">
          <span className="row-num">02</span>
          <span className="row-title-group">
            <span className="row-title">Scalable SaaS Platform</span>
            <span className="row-subtitle">
              End-to-end UX for a Deloitte Digital enterprise product
            </span>
          </span>
          <span className="row-tag">UX</span>
          <span className="row-arrow">→</span>
        </Link>
        <Link to="/work/shared-language" className="work-row">
          <span className="row-num">03</span>
          <span className="row-title-group">
            <span className="row-title">Shared Language</span>
            <span className="row-subtitle">
              Building a design system for a 200-person product team
            </span>
          </span>
          <span className="row-tag">UX · Dev</span>
          <span className="row-arrow">→</span>
        </Link>
        <Link to="/work/give-inkind" className="work-row">
          <span className="row-num">04</span>
          <span className="row-title-group">
            <span className="row-title">Give InKind</span>
            <span className="row-subtitle">
              Mobile-first redesign for a real-world nonprofit platform
            </span>
          </span>
          <span className="row-tag">UX</span>
          <span className="row-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
