import AboutContent from "../content/about.mdx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import BeeScene from "../components/BeeScene";
import avatar from "/src/assets/avatar-2.png";
import "./About.css";

function About() {
  return (
    <main
      style={{
        padding: "40px 48px 52px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <section className="about-hero">
        <h1 className="page-title">
          Who is <span className="bio-name">&lt;eszti&gt;</span>?
        </h1>
        <motion.img
          src={avatar}
          alt="Eszti"
          className="about-profile-pic"
          animate={{
            y: [-6, 4, -4, 6],
            x: [-3, 3, -2, 3],
            rotate: [-1, 1, -0.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </section>
      <section
        className="about-bio"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <AboutContent />
      </section>

      {/* Bee divider — animation placeholder */}
      <section className="bee-divider">
        <BeeScene />
      </section>

      <section className="about-experience">
        <div
          className="about-exp-list"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <h2 className="about-exp-heading">Experience</h2>
          <ul className="about-exp-entries">
            <li className="about-exp-entry">
              <span className="about-exp-company">Freelance</span>
              <span className="about-exp-title">UX Designer & Developer</span>
              <span className="about-exp-year">2023 – present</span>
            </li>
            <li className="about-exp-entry">
              <span className="about-exp-company">Deloitte Digital</span>
              <span className="about-exp-title">UX/UI Designer</span>
              <span className="about-exp-year">2021 – 2023</span>
            </li>
            <li className="about-exp-entry">
              <span className="about-exp-company">MBO Partners</span>
              <span className="about-exp-title">UX/UI Designer</span>
              <span className="about-exp-year">2020 – 2021</span>
            </li>
            <li className="about-exp-entry">
              <span className="about-exp-company">Freelance</span>
              <span className="about-exp-title">UX Design Consultant</span>
              <span className="about-exp-year">2019 – 2021</span>
            </li>
          </ul>
        </div>
        <div className="about-skills">
          <motion.div
            className="about-sticky ux"
            initial={{ y: -5, rotate: 2 }}
            animate={{ y: [-5, 5], rotate: [-1, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <h3 className="about-sticky-heading">UX skills</h3>
            <p>
              user experience & interface design · design systems · user
              research · interaction design
            </p>
          </motion.div>
          <motion.div
            className="about-sticky dev"
            initial={{ y: -5, rotate: 1 }}
            animate={{ y: 5, rotate: -1 }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <h3 className="about-sticky-heading">DEV skills</h3>
            <p>
              HTML · CSS · JavaScript · React · Node.js · Express.js · MongoDB ·
              REST API · Git / GitHub · Vercel
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default About;
