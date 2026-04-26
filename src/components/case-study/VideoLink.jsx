import { useEffect, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./VideoLink.css";

function VideoLink({ href, title, caption }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=${href}`)
      .then((res) => res.json())
      .then((data) => {
        const hd = data.thumbnail_url.replace(/_\d+x\d+/, "_1280x720");
        setThumbnail(hd);
        setLoading(false);
      })
      .catch(() => {
        setThumbnail(null);
        setLoading(false);
      });
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
          {loading ? (
            <div className="video-link-skeleton">
              <div className="video-link-shimmer" />
            </div>
          ) : (
            <>
              {thumbnail && (
                <img src={thumbnail} alt={title} className="video-link-img" />
              )}
              <div className="video-link-play">
                <div className="video-link-play-btn">
                  <Play
                    size={18}
                    fill="var(--color-indigo)"
                    color="var(--color-indogo)"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="video-link-footer">
          {loading ? (
            <div className="video-link-skeleton-footer">
              <div className="video-link-skeleton-line wide" />
              <div className="video-link-skeleton-line narrow" />
            </div>
          ) : (
            <>
              <span className="video-link-title">{title}</span>
              <span className="video-link-watch">
                Watch <ExternalLink size={12} />
              </span>
            </>
          )}
        </div>
      </motion.a>
      {caption && <p className="video-link-caption">{caption}</p>}
    </div>
  );
}

export default VideoLink;
