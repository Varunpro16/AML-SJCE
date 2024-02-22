import React, { useState, useEffect } from 'react';
import image01 from '../Assets/01.png';
import image02 from '../Assets/02.png';
import image03 from '../Assets/03.png';
import image04 from '../Assets/011.jpg';
import image05 from '../Assets/012.jpg';
import image06 from '../Assets/013.jpg';
import image07 from '../Assets/014.jpg';
import image08 from '../Assets/015.jpg';
import image09 from '../Assets/016.jpg';
import image10 from '../Assets/017.jpg';


const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11);
        setImageOpacity(1);
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image09, image07, image03, image04, image01, image06, image05, image08, image10, image02];
    return images[index];
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh',
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity,
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop:'7vh', background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', }}>Highlights of Our Department</h2>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default ImageSlider;
