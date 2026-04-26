// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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

  const projects = [
    {
      title: "Sofia Error Series",
      subtitle: "Designing for human recovery in agentic AI systems",
      tags: ["UX", "AI"],
      color: "#DED5C8",
      path: "/work/error-series",
      comingSoon: true,
    },
    {
      title: "Shared language",
      subtitle: "Building a design system for a 200-person product team",
      tags: ["UX", "DEV"],
      image: "/case-studies/shared-language/hero.png",
      path: "/work/shared-language",
    },
    {
      title: "Travel better: Globo",
      subtitle: "Intentional research and emotionally intelligent UX in motion",
      tags: ["UX"],
      image: "/case-studies/globo/hero.png",
      path: "/work/globo",
    },
    {
      title: "Scalable SaaS platform",

      subtitle: "End-to-end UX for a Deloitte Digital enterprise product",
      tags: ["UX"],
      image: "/case-studies/saas-platform/hero.png",
      path: "/work/saas-platform",
    },
    {
      title: "Give InKind",

      subtitle: "Mobile-first redesign for a real-world nonprofit platform",
      tags: ["UX"],
      image: "/case-studies/give-inkind/hero.png",
      path: "/work/give-inkind",
    },
    {
      title: "Home Glamour",

      subtitle: "A mobile app concept for home styling and personalisation",
      tags: ["UX"],
      image: "/case-studies/home-glamour/hero.png",
      path: "/work/home-glamour",
    },
  ];

  return (
    <div
      style={{
        padding: "40px 48px 52px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="intro">
        <div ref={headlineRef} className="typed-headline"></div>
        <p className="bio">
          <span className="bio-name">&lt;eszti&gt;</span> works at the
          intersection of design, research, and code, building systems that work
          and interfaces that people want to use.
        </p>
      </div>
      <span className="work-label">Selected works</span>
      <div className="work-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.path}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {project.comingSoon ? (
              <div
                className="work-card inactive"
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <div className="work-card-visual-wrapper">
                  <div
                    className="work-card-visual"
                    style={{ background: "#DED5C8" }}
                  />
                  <span className="work-card-badge coming-soon">
                    Coming Soon
                  </span>
                </div>
                <div className="work-card-text">
                  <span className="row-title" style={{ color: "#DED5C8" }}>
                    {project.title}
                  </span>
                  <span className="row-subtitle" style={{ color: "#DED5C8" }}>
                    {project.subtitle}
                  </span>
                  <div className="work-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="row-tag inactive-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to={project.path}
                className={`work-card${project.featured ? " featured" : ""}`}
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <div className="work-card-visual-wrapper">
                  <div className="work-card-visual">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="work-card-hero-img"
                        style={{
                          objectPosition: project.objectPosition || "top",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          background: project.color,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="work-card-text">
                  <span className="row-title">{project.title}</span>
                  <span className="row-subtitle">{project.subtitle}</span>
                  <div className="work-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="row-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
