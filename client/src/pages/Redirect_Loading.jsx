import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = ({ redirectTo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(redirectTo);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate, redirectTo]);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[100px] h-[100px] bg-white'></div>
    </div>
  );
};

export default LoadingScreen;
