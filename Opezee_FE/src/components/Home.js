// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [apps, setApps] = useState([]);
  const [showVideoTooltip, setShowVideoTooltip] = useState(false);
  const [showDescriptionTooltip, setShowDescriptionTooltip] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    axios.get('https://obezee-api.onrender.com/apps')
      .then(response => {
        setApps(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleVideoTooltip = (app) => {
    setSelectedApp(app);
    setShowVideoTooltip(true);
    setShowDescriptionTooltip(false);
  };

  const handleDescriptionTooltip = (app) => {
    setSelectedApp(app);
    setShowDescriptionTooltip(true);
    setShowVideoTooltip(false);
  };
 
  const handleFullscreen = (videoElement) => {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
  };

  


  return (
    <div className="Home">
      <h1>App List</h1>
      <div className="app-list">
        {apps.map(app => (
          <div key={app._id} className="app-card">
            <b>{app.appName}</b>
            <div>
              <a href={app.appLink} target="_blank" rel="noopener noreferrer">
                <img src={app.appLogoUrl} alt={app.appName} />
              </a>
            </div>
            
            {/* <span className="tooltip">ⓘ<p className='tooltiptext'tooltiptext>{app.appDescription}</p></span>
           */}
            
            <div className='video-div'
            
            onMouseEnter={() => handleVideoTooltip(app)}
            onMouseLeave={() => setShowVideoTooltip(false)}
            onClick={(e) => {
              e.stopPropagation(); // Prevents event from bubbling up
              if (showVideoTooltip && selectedApp === app) {
                const videoElement = document.getElementById(`video-${app._id}`);
                if (videoElement) {
                  handleFullscreen(videoElement);
                }
              }
            }}
          >
            Intro video 
            {showVideoTooltip && selectedApp === app && (
              <span >
                {app.appIntroVideo ? (
                  <iframe width="60px" height="0px"
                    id={`video-${app._id}`}
                    src={app.appIntroVideo}
                    // allow="autoplay"
                  ></iframe>
                ) : (
                  <p>No video available</p>
                )}
              </span>
            )}
          </div>
          
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
