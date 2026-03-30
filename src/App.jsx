import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import ErrorSeries from "./pages/work/ErrorSeries";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/error-series" element={<ErrorSeries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
