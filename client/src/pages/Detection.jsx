import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import Chatbot from '../components/ChatBot';

function Detection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error submitting image:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Chatbot />
      <Navbar logo='nvAI' links={['Home', 'Detection', 'GitHub', 'About']} active='Detection' user_val={false} />

      <div className="w-full h-[800px] md:h-[1100px] flex-col justify-center container mx-auto px-4 py-8 pt-28 md:pt-64">
        <h1 className="text-5xl text-center font-['Merriweather'] text-white font-bold mb-4">Brain Tumour Detector🧠</h1>

        <div className="w-full flex justify-center items-center text-center py-10">
          <div className="flex items-center justify-center w-[500px]">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 font-semibold text-sm font-['Poppins'] text-blue-600"><span className="font-normal text-gray-500">Click to upload</span> or Browse Image</p>
                <p className="text-xs text-gray-500 font-['Poppins']">PNG, JPG or JPEG</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleImageSelect} />
            </label>
          </div>
        </div>
        
        <h1 className="text-xl md:text-2xl text-center font-['Poppins'] text-white font-medium mb-10">Or try with sample data</h1>

        <div className="w-full h-[400px] md:h-[200px] flex justify-center items-center">
          <div className="w-[700px] h-full flex-col">
            <div className="w-full flex justify-center pt-6">
              {previewImage && (
                <div className="w-full flex justify-center mb-4">
                  <img src={previewImage} alt="Selected Image" className="rounded-lg" />
                </div>
              )}
              {isLoading ? (
                <p className="text-lg text-center text-white font-['Poppins'] font-semibold">Analyzing...</p>
              ) : result ? (
                <div className="w-full flex-col justify-center">
                  <p className="text-lg font-medium font-['Poppins'] text-center text-white">
                    {result.result === 'yes' ? 'Brain Tumour Found!' : 'No Brain Tumour Found.'}
                  </p>
                  <p className="text-lg font-medium font-['Poppins'] text-center text-white">
                    Confidence Score: {result.confidence_score}
                  </p>
                </div>
              ) : (
                <p className="text-lg text-center text-white font-['Poppins'] font-semibold">No Image Selected</p>
              )}
            </div>

            <div className="w-full flex justify-center pt-6">
              <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Submit Image</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detection;
