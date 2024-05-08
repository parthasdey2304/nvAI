import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import y1 from '../assets/brain_sample_images/marked_images/y1.jpg';
import y2 from '../assets/brain_sample_images/marked_images/y2.jpg';
import n1 from '../assets/brain_sample_images/marked_images/n1.jpg';
import n2 from '../assets/brain_sample_images/marked_images/n2.jpg';
import my1 from '../assets/brain_sample_images/only_images/my1.jpg';
import my2 from '../assets/brain_sample_images/only_images/my2.jpg';
import mn1 from '../assets/brain_sample_images/only_images/mn1.jpg';
import mn2 from '../assets/brain_sample_images/only_images/mn2.jpg';


function Detection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tumourFound, setTumourFound] = useState(false);
  const map = {};

  map['y1'] = my1;
  map['y2'] = my2;
  map['n1'] = mn1;
  map['n2'] = mn2;

  const handleImageSelect = (image) => {
    setSelectedImage(image); 

    setTimeout(() => {
      setTumourFound(true);
    }, 2000);
  };
  

  return (
    <div>
      <Navbar logo='nvAI' links={['Home', 'Detection', 'GitHub', 'About']} active='Detection' user_val={true} />

      <div className="w-full h-[1900px]  md:h-[1500px] flex-col justify-center container mx-auto px-4 py-8 pt-28 md:pt-64">
        <h1 className="text-5xl text-center font-['Merriweather'] text-white font-bold mb-4">Brain Tumour Detector🧠</h1>

        <div className="w-full flex justify-center items-center text-center py-10">
          <div className="flex items-center justify-center w-[500px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 font-semibold text-sm font-['Poppins'] text-blue-600"><span className="font-normal text-gray-500">Click to upload</span> or Browser Image</p>
                      <p className="text-xs text-gray-500 font-['Poppins']">PNG, JPG or JPEG</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
          </div> 
        </div>
        
        <h1 className="text-xl md:text-2xl text-center font-['Poppins'] text-white font-medium mb-10">Or try with sample data</h1>

    
        <div className="w-full h-[400px] md:h-[200px] flex justify-center items-center">
          <div className="w-[700px] h-full flex-col">
            <div className="w-full flex flex-wrap  justify-center space-x-2 md:justify-between px-2">

              <div onClick={() => { handleImageSelect({ y1 }) }} className="w-[200px] h-[240px] bg-white/30 my-2 flex-col rounded-lg hover:scale-110 duration-300 hover:duration-300">
                <div className="w-full h-[190px] flex justify-center p-2">
                  <img src={ y1 } alt="Sample Image 1" className="w-full h-full rounded-lg" />
                </div>
                <div className='w-full h-[50px] flex justify-center items-center text-center text-white font-["Poppins"]'>Sample Image 1</div>
              </div>
              
              <div onClick={() => { handleImageSelect({ y2 }) }} className="w-[200px] h-[240px] bg-white/30 my-2 flex-col rounded-lg hover:scale-110 duration-300 hover:duration-300">
                <div className="w-full h-[190px] flex justify-center p-2">
                  <img src={ y2 } alt="Sample Image 2" className="w-full h-full rounded-lg" />
                </div>
                <div className='w-full h-[50px] flex justify-center items-center text-center text-white font-["Poppins"]'>Sample Image 2</div>
              </div>
              
              <div onClick={() => { handleImageSelect({ n1 }) }} className="w-[200px] h-[240px] bg-white/30 my-2 flex-col rounded-lg hover:scale-110 duration-300 hover:duration-300">
                <div className="w-full h-[190px] flex justify-center p-2">
                  <img src={ n1 } alt="Sample Image 3" className="w-full h-full rounded-lg" />
                </div>
                <div className='w-full h-[50px] flex justify-center items-center text-center text-white font-["Poppins"]'>Sample Image 3</div>
              </div>

            </div>

            <div className='w-full h-[300px] flex justify-center pt-[50px] px-2'>
              <div className='w-full md:w-[700px] h-[400px] bg-white/30 rounded-lg'>
                <h2 className="h-[50px] text-xl font-semibold mb-2 py-4 text-center text-white font-['Poppins']">Selected Image:</h2>
                {selectedImage && (
                  <div className='w-full'>
                    <div className='w-full flex justify-center pt-6'>
                      <img
                        src={ y1 }
                        alt="Selected Image"
                        className="mb-4 rounded-lg"
                      />
                    </div>
                    {tumourFound ? (
                      <div className='w-full flex-col justify-center'>
                        {/* <div className='w-full flex justify-self-center'>
                          <img
                            src= { map[y1] }
                            alt="Tumour Image"
                            className="mb-4"
                          />
                        </div> */}
                        <p className="text-lg font-medium font-['Poppins'] text-center text-white">Brain Tumour Found!</p>
                      </div>
                    ) : (
                      <p className="text-lg text-center text-white font-['Poppins'] font-semibold">Analyzing...</p>
                    )}
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detection;