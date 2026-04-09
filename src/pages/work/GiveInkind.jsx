import CaseStudyLayout from "../../components/layout/CaseStudyLayout";
import GiveInkindContent from "../../content/give-inkind.mdx";

const tldr = {
  project: "UX case study — mobile-first redesign for a crowdfunding platform",
  role: "UX Designer & Researcher",
  timeline: "2019",
  team: "Eszti Hollenback, Ben Jones, Catleah Cunanan, Inhae Chung",
  deliverables:
    "User research · Information architecture · Navigation design · Interaction design · Usability testing · Prototype",
  hook: (
    <>
      <p>
        Give InKind helps people support each other through life's hardest
        moments. The platform was growing fast post-beta — but 60% of users
        weren't completing their pages, on a platform where everything starts
        with creating a page.
      </p>
      <p>
        We redesigned the experience from the ground up: streamlining page
        creation, improving the care calendar flow, and rebuilding navigation
        for mobile-first clarity. Decisions were grounded in real data — Zendesk
        and Doorbell feedback, click tests, prototype sessions, and interviews.
      </p>
      <p>
        The result is a cleaner, more intuitive experience for the people who
        need it most.
      </p>
    </>
  ),
};

function GiveInKind() {
  return (
    <CaseStudyLayout
      title="Redesigning for mobile-first clarity"
      subtitle="A UX case study about rebuilding Give InKind's website with a mobile-first, responsive approach"
      heroImage="/case-studies/give-inkind/hero.png"
      tldr={tldr}
      otherProjects={[
        { title: "Shared language", path: "/work/shared-language" },
        { title: "Travel better: Globo", path: "/work/globo" },
        { title: "Scalable SaaS platform", path: "/work/saas-platform" },
        { title: "Home Glamour", path: "/work/home-glamour" },
      ]}
    >
      <GiveInkindContent />
    </CaseStudyLayout>
  );
}
export default GiveInKind;
