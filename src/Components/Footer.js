import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    bottom: 0,
    marginLeft: '-7.5vw',
    width: '100vw', 
  };

  const spanStyle = {
    color:'white'
  };

  return (
    <footer style={footerStyle}>
      All rights reserved St. Joseph's College of Engineering | Managed by <span style={spanStyle}>AML</span>
    </footer>
  );
}

export default Footer;
