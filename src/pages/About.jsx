import AboutContent from "../content/about.mdx";
import BeeScene from "../components/BeeScene";

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
        <div className="about-profile-pic" aria-hidden="true" />
      </section>
      <section className="about-bio">
        <AboutContent />
      </section>

      {/* Bee divider — animation placeholder */}
      <section className="bee-divider">
        <BeeScene />
      </section>

      <section className="about-experience">
        <div className="about-exp-list">
          <h2 className="about-exp-heading">Experience</h2>
          <ul className="about-exp-entries">
            <li className="about-exp-entry">
              <span className="about-exp-role">Freelance</span>
              <span className="about-exp-year">2023 – present</span>
            </li>
            <li className="about-exp-entry">
              <span className="about-exp-role">Deloitte Digital</span>
              <span className="about-exp-year">2021 – 2023</span>
            </li>
            <li className="about-exp-entry">
              <span className="about-exp-role">MBO Partners</span>
              <span className="about-exp-year">2020 – 2021</span>
            </li>
            <li className="about-exp-entry">
              <span className="about-exp-role">Freelance</span>
              <span className="about-exp-year">2019 – 2021</span>
            </li>
          </ul>
        </div>
        <div className="about-skills">
          <div className="about-sticky ux">
            <h3 className="about-sticky-heading">UX skills</h3>
            <p>
              user experience & interface design · design systems · user
              research · interaction design
            </p>
          </div>
          <div className="about-sticky dev">
            <h3 className="about-sticky-heading">DEV skills</h3>
            <p>
              HTML · CSS · JavaScript · React · Node.js · Express.js · MongoDB ·
              REST API · Git / GitHub · Vercel
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
