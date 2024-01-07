import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Profile from '../components/Profile';

const Profil = () => {
  return (
    <div className='background'>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};

export default Profil;