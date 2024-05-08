import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Register() {
  return (
    <div>
      <Navbar  logo='nvAI' links={['Home', 'Detection', 'GitHub', 'About']} active='Detection' user_val={false} />

      <div className="w-full h-[600px] bg-blue-600 pt-28 md:pt-52"></div>

      <Footer />
    </div>
  );
}

export default Register;
