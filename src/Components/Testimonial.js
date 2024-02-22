import React, { useState, useEffect } from 'react';
import image01 from '../Assets/001.jpg';
import image02 from '../Assets/002.jpg';
import image03 from '../Assets/003.jpg';
import image04 from '../Assets/004.jpg';
import image05 from '../Assets/005.jpg';
import image06 from '../Assets/006.jpg';
import image07 from '../Assets/007.jpg';
import image08 from '../Assets/008.jpg';


const Testimonial = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const imageDetails = [
   
    "SIH-2022 Finalist",
    
    "Best Presenter In The CTS CAFE Program In Cognizant(CTS).",
    "Brain IT on 2.0 Hacktivists, Location : Sangli, Maharshtra.",
    
    "HACKATHON'23 Won First Price With 7,000 Cash Prize.",
    "SIH-2022(Erode,TamilNadu).",
    "IEEE YESIST'12 Prelims Won First Place with Intership(Softrate Technology).",
    "Explaining About Drones",
    "SIH-2022 As A Joint Winner With A Cash Price Of 50,000."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 8);
        setImageOpacity(1);
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [ image07, image03, image04, image01, image06, image05, image08, image02,];
    return images[index];
  };

  const containerStyle = {
    position:"relative",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    marginTop: '5vh',
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto',
    borderRadius: '10px',
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
    marginTop: '5vh'
  };

  const detailsStyle = {
    position:"absolute",
    bottom:0,
    left:"25%",
    width:"50%",
    marginTop: '10px',
    backgroundColor:"black",
    color:"white",
    
    height:"5%"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop: '7vh', background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', }}>Highlights</h2>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
      <div style={detailsStyle}>
        <p style={{backgroundColor:"black",padding:"7px 7px",}}>{imageDetails[imageIndex]}</p>
      </div>
    </div>
  );
};

export default Testimonial;