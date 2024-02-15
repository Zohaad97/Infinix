// VideoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css'; // Import CSS for styling

const VideoPlayer = ({isModalOpen, setIsModalOpen}) => {

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const screenWidth = window.innerWidth;
 
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  if (screenWidth < 600) {
    opts.width = "320"
    opts.height = "195"
  } else {
    opts.width = "640"
    opts.height = "390"
  }

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <YouTube videoId="vfZPX0ig7VY" opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
