import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import "./CaseStudyAudioPlayer.css";

function CaseStudyAudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleScrub = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0.00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="cs-audio-player">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <span className="cs-audio-label">Case study narration</span>

      <div className="cs-audio-controls">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="cs-audio-button"
        >
          {isPlaying ? (
            <Pause size={24} fill="currentColor" strokeWidth={0} />
          ) : (
            <Play size={24} fill="currentColor" strokeWidth={0} />
          )}
        </button>

        <span className="cs-audio-time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <input
          type="range"
          className="cs-audio-scrubber"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleScrub}
          style={{
            background: `linear-gradient(to right, var(--color-link) ${progressPercent}%, var(--color-fill-muted) ${progressPercent}%)`,
          }}
        />
      </div>
    </div>
  );
}

export default CaseStudyAudioPlayer;
