import React from 'react';
import "./video.css"

const VideoOynatici = () => {
  return (
    <div className="video-container">
      <video controls>
        <source src="public/anasayfa1.mp4" type="video/mp4" />
       
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  );
};

export default VideoOynatici;
