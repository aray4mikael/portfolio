import React from "react";
import PropTypes from "prop-types";
import "../styles/MusicSection.css";

const MusicSection = ({ songs }) => {
  return (
    <section className="music-section">
      <h2>Músicas que eu gosto</h2>
      <div className="songs-grid">
        {songs.map((song, index) => (
          <div key={index} className="song-container">
            <iframe
              src={song.embedUrl}
              width="300"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Música ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

MusicSection.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      embedUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MusicSection;
