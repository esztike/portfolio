import { useState } from "react";
import TextFlip from "../components/TextFlip";
import ShowcaseCard from "../components/ShowcaseCard";
import BeeScene from "../components/BeeScene";

const portfolioSnippet = `
/* Colors: base */
--color-yellow: #f2cc8f;

/* Colors: alphas */
--color-yellow-alpha-05: rgba(242, 204, 143, 0.05);
--color-yellow-alpha-25: rgba(242, 204, 143, 0.25);

/* Colors: semantic roles */
--color-text-heading: var(--color-yellow);
--color-border-light: var(--color-yellow-alpha-05);
--color-border-medium: var(--color-yellow-alpha-25);`;

const sofiaSnippet = `// Fires when a card's OPEN animation finishes — layout is fully settled
// by then, so this is the one reliable moment to snap its header to the
// top of the viewport instead of leaving the reader wherever they landed.
const handleAccordionContentAnimationEnd = (event, tabValue) => {
  if (
    event.animationName === "walkthrough-accordion-slide-down" &&
    tabValue === accordionValue
  ) {
    triggerRefs.current[tabValue]?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
};`;

function CodeLab() {
  const [replay, setReplay] = useState(0);

  return (
    <main
      style={{
        padding: "40px 48px 52px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <TextFlip />
      <ShowcaseCard
        title="color as a system"
        story="The portfolio you're reading is hand-coded in React. Its color system is a token cascade, i.e. raw values feed alpha variants and those feed semantic roles. The whole palette shifts from one place, the way design tokens work in Figma."
        githubUrl="https://github.com/esztike/portfolio"
        liveLabel="live site (you're on it)"
        snippet={portfolioSnippet}
      />
      <ShowcaseCard
        title="scroll snap"
        story="From Sofia Error Series microsite. When a walkthrough card opens, this waits for the animation to finish, then snaps the card's header to the top of the viewport so the reader's eyes land where they expect."
        githubUrl="https://github.com/esztike/sofia-error-series"
        liveUrl="https://sofia-error-series.vercel.app/"
        snippet={sofiaSnippet}
      />
      <ShowcaseCard
        title="parallel motion"
        story="In Hawaiʻi I built a honey brand. While I moved away, the bee stayed with me. Two animations running in parallel, a drift and a sway, timed to feel like they belong together. Built with Framer Motion."
        githubUrl="https://github.com/esztike"
        onReplay={() => setReplay((prev) => prev + 1)}
      >
        <BeeScene replay={replay} />
      </ShowcaseCard>
    </main>
  );
}

export default CodeLab;
