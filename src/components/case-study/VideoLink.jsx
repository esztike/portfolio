import { useEffect, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./VideoLink.css";

function VideoLink({ href, title, caption }) {
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=${href}`)
      .then((res) => res.json())
      .then((data) => setThumbnail(data.thumbnail_url))
      .catch(() => setThumbnail(null));
  }, [href]);

  return (
    <div className="video-link">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="video-link-card"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="video-link-thumb">
          {thumbnail && (
            <img src={thumbnail} alt={title} className="video-link-img" />
          )}
          <div className="video-link-play">
            <Play size={20} color="var(--color-text-heading)" />
          </div>
        </div>
        <div className="video-link-footer">
          <span className="video-link-title">{title}</span>
          <span className="video-link-watch">
            Watch <ExternalLink size={12} />
          </span>
        </div>
      </motion.a>
      {caption && <p className="video-link-caption">{caption}</p>}
    </div>
  );
}

export default VideoLink;
