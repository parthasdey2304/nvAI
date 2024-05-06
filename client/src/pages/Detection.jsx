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

      <div className="w-full h-[800px] container mx-auto px-4 py-8 pt-20">
        <h1 className="text-3xl text-white font-bold mb-4">Brain Tumour Detection</h1>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Sample images */}
          <div className="w-[400px] bg-white/30 rounded-lg p-4">
            <h2 className="text-xl text-white font-['Poppins'] font-semibold mb-2">Select Sample Image:</h2>
            <div className="flex flex-wrap">
              <img
                src={ y1 }
                alt="Sample Image 1"
                className="w-24 h-24 object-cover cursor-pointer mr-2 mb-2"
                onClick={() => handleImageSelect('sample_image_1.jpg')}
              />
              {/* Add more sample images here */}
            </div>
          </div>
          {/* Display selected image and analysis result */}
          <div className="border p-4">
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
      </div>
      <Footer />
    </div>
  );
}

export default Detection;
