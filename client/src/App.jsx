import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      {/* hero section */}
      <div className="w-full h-[900px] bg-gray-900 flex-col justify-center">
          <div className="w-full h-[300px] flex justify-center items-center font-['Merriweather'] md:pt-32">
            <span className='text-5xl text-white text-center md:leading-relaxed font-semibold'>Revolutionizing Brain Tumour <br /> Detection</span>
          </div>

          <div className="w-full h-[50px] flex justify-center items-center font-['Poppins'] -mt-6 md:pt-6">
            <span className='text-white text-md text-center'>Cutting Edge AI Technologies for accurate Diagnosis!</span>
          </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App