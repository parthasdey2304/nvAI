import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = ({ redirectTo }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = redirectTo;
  //   }, 1000);
  // }, []);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[100px] h-[100px] animate-spin rounded-full border-8 border-t-blue-600'>
      </div>
    </div>
  );
};

export default LoadingScreen;
