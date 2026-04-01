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
      num: "01",
      title: "Error Series",
      subtitle: "Designing for human recovery in agentic AI systems",
      tags: ["UX", "AI"],
      color: "#d4e8d0",
      path: "/work/error-series",
      featured: true,
    },
    {
      num: "02",
      title: "Scalable SaaS Platform",
      subtitle: "End-to-end UX for a Deloitte Digital enterprise product",
      tags: ["UX"],
      color: "#d0dff5",
      path: "/work/saas-platform",
    },
    {
      num: "03",
      title: "Shared Language",
      subtitle: "Building a design system for a 200-person product team",
      tags: ["UX", "Dev"],
      color: "#f5e6d0",
      path: "/work/shared-language",
    },
    {
      num: "04",
      title: "Give InKind",
      subtitle: "Mobile-first redesign for a real-world nonprofit platform",
      tags: ["UX"],
      color: "#f0d0d0",
      path: "/work/give-inkind",
    },
    {
      num: "05",
      title: "Travel Better: Globo",
      subtitle: "Intentional research and emotionally intelligent UX in motion",
      tags: ["UX"],
      color: "#e8d4f0",
      path: "/work/globo",
    },
    {
      num: "06",
      title: "Home Glamour",
      subtitle: "A mobile app concept for home styling and personalisation",
      tags: ["UX"],
      color: "#f0f0d0",
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
      <div ref={headlineRef} className="typed-headline"></div>

      <p className="name-line">Eszti Hollenback</p>

      <p className="bio">
        I design systems and build interfaces — working at the intersection of
        research, systems thinking, and frontend code.
      </p>

      <div className="work-section">
        <span className="work-label">Selected projects</span>
        {projects.map((project, i) => (
          <motion.div
            key={project.path}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to={project.path} className="work-card">
              <div className="work-card-left">
                <span className="row-num">{project.num}</span>
                <div className="work-card-text">
                  {project.featured && (
                    <span className="work-card-featured">Featured project</span>
                  )}
                  <span
                    className={`row-title${project.featured ? " featured" : ""}`}
                  >
                    {project.title}
                  </span>
                  <span className="row-subtitle">{project.subtitle}</span>
                  <div className="work-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="row-tag">
                        {tag}
                      </span>
                    ))}
                  </div>{" "}
                </div>
              </div>
              <motion.div
                className="work-card-visual"
                style={{ background: project.color }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
