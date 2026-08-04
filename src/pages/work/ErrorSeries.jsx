import CaseStudyLayout from "../../components/layout/CaseStudyLayout";

const tldr = {
  project: "Design exploration: error recovery and prevention in agentic AI",
  role: "UX Designer & Design Engineer",
  timeline: "2026",
  deliverables:
    "Case study microsite · Error taxonomy · Design principles · Episodic case study · Interactive prototype",
  liveSite: "https://sofia-error-series.vercel.app",
  hook: (
    <>
      <p>
        For decades, human-centered design meant putting people at the center:
        understand their needs, build tools that serve them directly. AI moved
        into the middle, and design's job became shaping the behavior of an
        intermediary that thinks, infers, and sometimes gets things wrong in
        ways a button simply couldn't. Agentic AI raises the stakes again: this
        intermediary acts on its own, often while you're not watching.
      </p>
      <p>
        The designer's job now is to make delegation safe: to ensure that when a
        system acts on your behalf, you can trust it, correct it, and recover
        when it fails. Sofia, Greek for wisdom, is a design exploration of
        exactly that problem, and a personal one.
      </p>
      <p>
        An error taxonomy, a set of design principles, and an interactive
        prototype ground the thinking in something buildable. Episode one traces
        a single failure, moment by moment, and asks what recovering from it
        actually takes.
      </p>
    </>
  ),
};

function ErrorSeries() {
  return (
    <>
      <CaseStudyLayout
        title="Sofia, an error series"
        subtitle="Mapping how agentic AI fails, and designing for what comes after."
        heroImage="/case-studies/error-series/hero.png"
        tldr={tldr}
        otherProjects={[
          { title: "Shared language", path: "/work/shared-language" },
          { title: "Travel better: Globo", path: "/work/globo" },
          { title: "Scalable SaaS platform", path: "/work/saas-platform" },
          { title: "Give InKind", path: "/work/give-inkind" },
          // { title: "Home Glamour", path: "/work/home-glamour" },
        ]}
        showAudioPlaceholder={false}
      ></CaseStudyLayout>
    </>
  );
}

export default ErrorSeries;
