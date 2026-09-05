export const config = {
  matcher: [
    "/about",
    "/code-lab",
    "/work/error-series",
    "/work/shared-language",
    "/work/globo",
    "/work/saas-platform",
    "/work/give-inkind",
  ],
};

const metaMap = {
  "/work/error-series": {
    title: "Sofia Error Series - Eszti Hollenback",
    description: "Designing for the moment when agentic AI fails",
    image:
      "https://www.esztihollenback.com/case-studies/error-series/og-image.png",
  },
  "/work/shared-language": {
    title: "Shared Language - Eszti Hollenback",
    description: "Building a design system for a SaaS platform",
    image:
      "https://www.esztihollenback.com/case-studies/shared-language/og-image.png",
  },
  "/work/globo": {
    title: "Travel better: Globo - Eszti Hollenback",
    description: "Emotionally intelligent UX in motion",
    image: "https://www.esztihollenback.com/case-studies/globo/og-image.png",
  },
  "/work/saas-platform": {
    title: "Scalable SaaS platform - Eszti Hollenback",
    description: "End-to-end UX for an enterprise product",
    image:
      "https://www.esztihollenback.com/case-studies/saas-platform/og-image.png",
  },
  "/work/give-inkind": {
    title: "Redesigning for mobile-first clarity - Eszti Hollenback",
    description: "Mobile-first redesign of a crowdfunding platform",
    image:
      "https://www.esztihollenback.com/case-studies/give-inkind/og-image.png",
  },
  "/code-lab": {
    title: "code lab - Eszti Hollenback",
    description:
      "A space where design intuition meets code. Experiments, small builds.",
  },
  "/about": {
    title: "about - Eszti Hollenback",
    description:
      "UX Designer and Full-Stack Developer working at the intersection of design and code.",
  },
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const meta = metaMap[url.pathname];

  if (!meta) {
    return; // let it through unmodified
  }

  const response = await fetch(request);
  let html = await response.text();

  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${meta.description}$2`,
  );
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${meta.title}$2`,
  );
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${meta.description}$2`,
  );
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${url.href}$2`,
  );
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${url.href}$2`,
  );
  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${meta.title}$2`,
  );
  html = html.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${meta.description}$2`,
  );

  if (meta.image) {
    html = html.replace(
      /(<meta property="og:image" content=")[^"]*(")/,
      `$1${meta.image}$2`,
    );
    html = html.replace(
      /(<meta name="twitter:image" content=")[^"]*(")/,
      `$1${meta.image}$2`,
    );
  }

  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
}
