import React, { useEffect } from 'react';

const DesktopMessage = () => {
  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const checkScreenSize = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const desktopThreshold = 1400;

    if (screenWidth < desktopThreshold) {
      document.getElementById('desktopMessage').style.display = 'block';
    } else {
      document.getElementById('desktopMessage').style.display = 'none';
    }
  };

  return (
    <div id="desktopMessage" style={messageStyle}>
      This website is best viewed on a desktop. Please switch to a larger screen for the best experience.
    </div>
  );
};

const messageStyle = {
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '10px',
  backgroundColor: '#f8d7da',
  color: '#721c24',
  textAlign: 'center',
  zIndex: 1000,
};

export default DesktopMessage;
