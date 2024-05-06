import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import y1 from '../assets/brain_sample_images/marked_images/y1.jpg';
import y2 from '../assets/brain_sample_images/marked_images/y2.jpg';
import n1 from '../assets/brain_sample_images/marked_images/n1.jpg';
import n2 from '../assets/brain_sample_images/marked_images/n2.jpg';

function Detection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tumourFound, setTumourFound] = useState(false);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    // Simulate analysis effect
    setTimeout(() => {
      setTumourFound(true);
    }, 2000);
  };

  return (
    <div>
      <Navbar />

      <div className="w-full h-[1500px] flex-col justify-center container mx-auto px-4 py-8 pt-28 md:pt-52">
        <h1 className="text-5xl text-center font-['Jersey'] text-white font-bold mb-4">Brain Tumour Detector🧠</h1>

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

        {/* <div>
          <div className="w-[1100px] mx-auto justify-center space-x-3 grid grid-cols-2 gap-4 mt-8">
            <div className="w-[540px] h-[650px] bg-white/30 rounded-lg p-10">
              <h2 className="text-xl text-center text-white font-['Poppins'] font-semibold mt-2">Select Sample Image</h2>
              <div className="w-full h-[450px] flex flex-wrap gap-x-10 gap-y-4 pl-1 mt-20">
                <img
                  src={ y1 }
                  alt="Sample Image 1"
                  className="w-[200px] h-[200px] object-cover active:border-8 active:border-white rounded-lg duration-300 hover:duration-300 cursor-pointer mr-2 mb-2"
                  onClick={() => handleImageSelect('sample_image_1.jpg')}
                />
                <img
                  src={ y2 }
                  alt="Sample Image 1"
                  className="w-[200px] h-[200px] object-cover active:border-8 active:border-white rounded-lg duration-300 hover:duration-300 cursor-pointer mr-2 mb-2"
                  onClick={() => handleImageSelect('sample_image_1.jpg')}
                />
                <img
                  src={ n1 }
                  alt="Sample Image 1"
                  className="w-[200px] h-[200px] object-cover active:border-8 active:border-white rounded-lg duration-300 hover:duration-300 cursor-pointer mr-2 mb-2"
                  onClick={() => handleImageSelect('sample_image_1.jpg')}
                />
                <img
                  src={ n2 }
                  alt="Sample Image 1"
                  className="w-[200px] h-[200px] object-cover active:border-8 active:border-white rounded-lg duration-300 hover:duration-300 cursor-pointer mr-2 mb-2"
                  onClick={() => handleImageSelect('sample_image_1.jpg')}
                />
                
              </div>
            </div>
            <div className="w-[440px] h-[650px] bg-white/30 rounded-lg p-4">
              {selectedImage && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Selected Image:</h2>
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    className="mb-4"
                  />
                  {tumourFound ? (
                    <div>
                      <img
                        src="tumour_image_with_boxes.jpg" // Replace with the image with red boxes around tumours URL
                        alt="Tumour Image"
                        className="mb-4"
                      />
                      <p className="text-lg font-semibold text-red-600">Brain Tumour Found</p>
                    </div>
                  ) : (
                    <p className="text-lg font-semibold">Analyzing...</p>
                  )}
                </div>
              )}
            </div>
          </div>

        </div> */}

        <div className="w-full h-[400px] md:h-[200px] flex justify-center items-center">
          <div className="w-[700px] h-full flex-col">
            <div className="w-full flex flex-wrap bg-blue-600 justify-center space-x-2 md:justify-between px-2">

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

            <div className='w-full h-[300px] bg-red-600'>
            {selectedImage && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Selected Image:</h2>
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    className="mb-4"
                  />
                  {tumourFound ? (
                    <div>
                      <img
                        src= { y1 }
                        alt="Tumour Image"
                        className="mb-4"
                      />
                      <p className="text-lg font-semibold text-red-600">Brain Tumour Found</p>
                    </div>
                  ) : (
                    <p className="text-lg font-semibold">Analyzing...</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detection;
