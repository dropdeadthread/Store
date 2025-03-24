import React from 'react';
import '../Layout/Globals.css'; // Corrected import path

const Hero = () => {
  return (
    <section className="hero">
      <img 
        src="/images/logo-icon.png" 
        alt="Drop Dead Thread Logo" 
        style={{ maxWidth: '300px', marginBottom: '1.5rem' }} 
      />
      <h1>Streetwear from the Underground</h1>
      <p>Bold prints. Punk energy. Straight out the grave.</p>
      <button onClick={() => window.location.href='#shop'}>Shop Now</button>
    </section>
  );
};

export default Hero;
