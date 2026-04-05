import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import ErrorSeries from "./pages/work/ErrorSeries";
import SaasPlatform from "./pages/work/SaasPlatform";
import SharedLanguage from "./pages/work/SharedLanguage";
import GiveInkind from "./pages/work/GiveInkind";
import Globo from "./pages/work/Globo";
import HomeGlamour from "./pages/work/HomeGlamour";

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "relative", minHeight: "100vh" }}>
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
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/error-series" element={<ErrorSeries />} />
          <Route path="/work/saas-platform" element={<SaasPlatform />} />
          <Route path="/work/shared-language" element={<SharedLanguage />} />
          <Route path="/work/give-inkind" element={<GiveInkind />} />
          <Route path="/work/globo" element={<Globo />} />
          <Route path="/work/home-glamour" element={<HomeGlamour />} />
        </Routes>
        <footer className="site-footer">
          <p>© Eszti Hollenback 2026</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
