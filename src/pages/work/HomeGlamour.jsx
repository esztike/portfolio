import CaseStudyLayout from "../../components/layout/CaseStudyLayout";
import HomeGlamourContent from "../../content/home-glamour.mdx";
import Slideshow from "../../components/case-study/Slideshow";

const tldr = {
  project: "Mobile app concept — home design and personalization",
  role: "UX Designer, Interaction Designer",
  timeline: "2019",
  team: "Eszti Hollenback, Alexander Yamato, Martina Dove",
  deliverables:
    "User research · Concept testing · User journey mapping · Sketches · Digital prototype",
  hook: (
    <>
      <p>
        Home design is more than decoration. Research shows it is a form of
        identity construction, a way people express who they are and who they
        want to become. Home Glamour starts from that insight.
      </p>
      <p>
        Four concepts were tested before committing to one. The winning idea: a
        virtual home where users can design any room with real purchasable
        furniture, save items for later, and track price drops — so the dream
        stays alive even when the budget isn't there yet.
      </p>
      <p>
        The result is a concept grounded in real user behaviour, tested at every
        stage, and designed around aspiration as much as affordability.
      </p>
    </>
  ),
};

function HomeGlamour() {
  return (
    <>
      <CaseStudyLayout
        title="Home Glamour"
        subtitle="A mobile app concept for home styling and personalization"
        heroImage="/case-studies/home-glamour/hero.png"
        tldr={tldr}
        otherProjects={[
          { title: "Sofia Error Series", path: "/work/error-series" },
          { title: "Shared language", path: "/work/shared-language" },
          { title: "Travel better: Globo", path: "/work/globo" },
          { title: "Scalable SaaS platform", path: "/work/saas-platform" },
          { title: "Give InKind", path: "/work/give-inkind" },
        ]}
      >
        <HomeGlamourContent components={{ Slideshow }} />
      </CaseStudyLayout>
    </>
  );
}

export default HomeGlamour;
