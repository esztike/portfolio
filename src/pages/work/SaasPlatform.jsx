import CaseStudyLayout from "../../components/layout/CaseStudyLayout";
import SaasContent from "../../content/saas-platform.mdx";

const tldr = {
  project: "UX case study — enterprise marketing SaaS platform",
  role: "UX/UI Designer",
  timeline: "2021–2023",
  deliverables:
    "User flows · Navigation design · High-fidelity mockups · Design system · Storybook handoff",
  hook: (
    <>
      <p>
        Greenfield products are exciting. They are also humbling. When the
        platform is still being defined above you, and the sprints keep coming,
        the design work is less about having the right answers and more about
        making the best decisions with what you have.
      </p>
      <p>
        At Deloitte Digital I designed across 14 modules of a marketing SaaS
        platform integrating customer data, audience segmentation, campaign
        orchestration, and performance analytics end to end.
      </p>
      <p>
        The result: a platform serving data teams and marketers across the
        entire marketing journey, held together by a design system built to
        scale with it.
      </p>
    </>
  ),
};

function SaasPlatform() {
  return (
    <CaseStudyLayout
      title="Scalable SaaS platform"
      subtitle="End-to-end UX for a Deloitte Digital enterprise product"
      heroImage="/case-studies/saas-platform/hero.png"
      tldr={tldr}
      audioSrc="/audio/saas.mp3"
      otherProjects={[
        { title: "Sofia, an error series", path: "/work/error-series" },
        { title: "Shared language", path: "/work/shared-language" },
        { title: "Travel better: Globo", path: "/work/globo" },
        { title: "Give InKind", path: "/work/give-inkind" },
        // { title: "Home Glamour", path: "/work/home-glamour" },
      ]}
    >
      <SaasContent />
    </CaseStudyLayout>
  );
}

export default SaasPlatform;
