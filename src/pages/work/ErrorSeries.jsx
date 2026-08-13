import CaseStudyLayout from "../../components/layout/CaseStudyLayout";
import { ExternalLink } from "lucide-react";

const tldr = {
  project: "Design exploration: error recovery and prevention in agentic AI",
  role: "UX Designer & Design Engineer",
  timeline: "2026",
  deliverables:
    "Case study microsite · Error taxonomy · Design principles · Episodic case study · Interactive prototype",
  // liveSite: "https://sofia-error-series.vercel.app",
  hook: (
    <>
      <p>
        Human-centered design used to mean building tools that serve people
        directly. AI moved into the middle, and design's job became shaping the
        behavior of an intermediary that thinks, infers, and sometimes gets
        things wrong. Agentic AI raises the stakes again. It acts on its own,
        often while we're not watching. Designers now should think of ways to
        make delegation safe, so that when a system acts on our behalf, we can
        trust it, correct it, and recover when it fails.
      </p>

      <p>
        Sofia Error Series, is a design exploration. Written as a case study
        microsite, it comprises an error taxonomy, a set of design principles,
        and an interactive prototype to ground the thinking in something
        buildable. Episode one traces a partial completion failure, and presents
        what recovering from it actually takes.{" "}
        <a
          href="https://sofia-error-series.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="cs-hook-link"
        >
          Visit the microsite <ExternalLink size={12} />
        </a>
      </p>
    </>
  ),
};

function ErrorSeries() {
  return (
    <>
      <CaseStudyLayout
        title="Sofia Error Series"
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
