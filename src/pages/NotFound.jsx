import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../styles/not-found.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-texture" />
      <div className="not-found-content">
        <p className="not-found-code">404</p>
        <img src="/lightsaber.svg" alt="" className="saber-img" />
        <p className="not-found-line">
          This is not the page you're looking for
        </p>
        <p className="not-found-line">But you can still find your way home</p>
        <Link to="/" className="not-found-home">
          <ArrowLeft size={14} />
          home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
