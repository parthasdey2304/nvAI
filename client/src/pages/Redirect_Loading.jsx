import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoadingScreen = ({ redirectTo }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = redirectTo;
  //   }, 1000);
  // }, []);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Link to="/" className="ri-arrow-left-line absolute font-bold text-3xl top-1 left-1 md:top-5 md:left-5 hover:bg-black duration-300 hover:duration-300 hover:text-white px-2.5 py-2 rounded-full"></Link>
      <div className='w-[50px] md:w-[100px] h-[50px] md:h-[100px] animate-spin rounded-full border-8 border-t-blue-600'>
      </div>
    </div>
  );
};

export default LoadingScreen;
