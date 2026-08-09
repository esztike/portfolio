import CaseStudyLayout from "../../components/layout/CaseStudyLayout";
import GloboContent from "../../content/globo.mdx";
import Slideshow from "../../components/case-study/Slideshow";

const tldr = {
  project: "Research case study — emotional UX for a travel app concept",
  role: "UX Designer & Researcher",
  timeline: "2023",
  deliverables:
    "User interviews · Emotional mapping · Travel stressor research · Feature ideation",
  hook: (
    <>
      <p>
        Travel is one of the most emotionally loaded experiences people choose
        to put themselves through. And yet most travel apps treat it like a
        logistics problem.
      </p>
      <p>
        This research went deeper into the anxiety, the coping strategies, the
        moments where design could actually help.
      </p>
      <p>
        The result is a clear picture of where emotionally intelligent travel
        design could go, and why it matters.
      </p>
    </>
  ),
};

function Globo() {
  return (
    <>
      <CaseStudyLayout
        title="Travel better: Globo"
        subtitle="Mapping the emotional weight of travel and designing for it"
        heroImage="/case-studies/globo/hero.png"
        tldr={tldr}
        audioSrc="/audio/globo.mp3"
        otherProjects={[
          { title: "Sofia, an error series", path: "/work/error-series" },
          { title: "Shared language", path: "/work/shared-language" },
          { title: "Scalable SaaS platform", path: "/work/saas-platform" },
          { title: "Give InKind", path: "/work/give-inkind" },
          // { title: "Home Glamour", path: "/work/home-glamour" },
        ]}
      >
        <GloboContent components={{ Slideshow }} />
      </CaseStudyLayout>
    </>
  );
}

export default Globo;
