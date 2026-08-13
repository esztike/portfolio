import CaseStudyLayout from "../../components/layout/CaseStudyLayout";
import SharedLanguageContent from "../../content/shared-language.mdx";
import Slideshow from "../../components/case-study/Slideshow";
import CaseStudyAudioPlayer from "../../components/case-study/CaseStudyAudioPlayer";

const tldr = {
  project: "Design system - enterprise SaaS platform",
  role: "UX/UI Designer",
  timeline: "2021 - 2023",
  deliverables:
    "Component audit · 100+ components · Figma system · Storybook handoff · Cross-functional documentation",
  hook: (
    <>
      <p>
        When an MVP ships fast, consistency is usually the first casualty.
        Buttons vary, spacing gets improvised, developers ping designers daily
        for answers that should already be written down.
      </p>
      <p>
        I built the system that fixed that. By auditing what existed first, then
        building from what was already used everywhere. 100+ components across
        six categories: navigation, forms, tables, twenty chart types,
        dashboards. Designed in Figma, reviewed through Storybook in close
        collaboration with a developer, for a 200-person product team.
      </p>
      <p>
        The result: 14 product modules supported across a single enterprise
        platform.
      </p>
    </>
  ),
};

function SharedLanguage() {
  return (
    <CaseStudyLayout
      title="Shared language"
      subtitle="Building a design system for an enterprise SaaS platform"
      heroImage="/case-studies/shared-language/hero.png"
      tldr={tldr}
      audioSrc="/audio/shared-language.mp3"
      otherProjects={[
        { title: "Sofia Error Series", path: "/work/error-series" },
        { title: "Travel better: Globo", path: "/work/globo" },
        { title: "Scalable SaaS platform", path: "/work/saas-platform" },
        { title: "Give InKind", path: "/work/give-inkind" },
        // { title: "Home Glamour", path: "/work/home-glamour" },
      ]}
    >
      <SharedLanguageContent components={{ Slideshow }} />
    </CaseStudyLayout>
  );
}

export default SharedLanguage;
