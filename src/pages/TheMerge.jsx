import { useState } from "react";
import TextFlip from "../components/TextFlip";
import ShowcaseCard from "../components/ShowcaseCard";
import BeeScene from "../components/BeeScene";

const beeSnippet = `const beeControls = useAnimation()
const daisyControls = useAnimation()

// bee drifts in, bobs on landing
await beeControls.start({ x: beeX, y: [0, -30, 10, -25, 8, -15, 0] })

// flower sways in response
await daisyControls.start({ rotate: [0, -8, 4, -5, 2, 0] })`;

function TheMerge() {
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
        title="01 - the bee"
        story="In Hawaiʻi I built a honey brand. The bee stayed with me. Built with Framer Motion — two animations running in parallel, a drift and a sway, timed to feel like they belong together."
        snippet={beeSnippet}
        githubUrl="https://github.com/esztike"
        onReplay={() => setReplay((prev) => prev + 1)}
      >
        <BeeScene replay={replay} />
      </ShowcaseCard>
    </main>
  );
}

export default TheMerge;
