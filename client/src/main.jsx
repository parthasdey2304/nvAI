import React from 'react';
import ReactDOM from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import Homepage from './pages/Homepage';
import Detection from './pages/Detection';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Routes /> */}
    {/* <Homepage /> */}
    <Detection />
  </React.StrictMode>,
)
