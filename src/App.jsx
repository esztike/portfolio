import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import TheMerge from "./pages/TheMerge";
import ErrorSeries from "./pages/work/ErrorSeries";
import SaasPlatform from "./pages/work/SaasPlatform";
import SharedLanguage from "./pages/work/SharedLanguage";
import GiveInkind from "./pages/work/GiveInkind";
import Globo from "./pages/work/Globo";
import HomeGlamour from "./pages/work/HomeGlamour";
import ScrollRestorer from "./components/ui/ScrollRestorer";
import NotFound from "./pages/NotFound";

function AppContent() {
  const location = useLocation();
  const showTexture = !location.pathname.startsWith("/work/");

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {showTexture && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: "url(/background-portfolio.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.75,
            mixBlendMode: "color-burn",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      <ScrollRestorer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/the-merge" element={<TheMerge />} />
        <Route path="/work/error-series" element={<ErrorSeries />} />
        <Route path="/work/saas-platform" element={<SaasPlatform />} />
        <Route path="/work/shared-language" element={<SharedLanguage />} />
        <Route path="/work/give-inkind" element={<GiveInkind />} />
        <Route path="/work/globo" element={<Globo />} />
        <Route path="/work/home-glamour" element={<HomeGlamour />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer">
        <p className="colophon">
          Designed and coded by me · React · Tailwind · Vercel · Set in DM Sans
        </p>
        <p>© Eszti Hollenback 2026</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
