import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import y1 from "../assets/brain_sample_images/marked_images/y1.jpg";
import y2 from "../assets/brain_sample_images/marked_images/y2.jpg";
import n1 from "../assets/brain_sample_images/marked_images/n1.jpg";
import Chatbot from "../components/ChatBot";
import Toast from "../components/Toast";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const serverLink = "https://9a0e-157-40-89-187.ngrok-free.app";

function Detection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [confidenceScores, setConfidenceScores] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [tumourFound, setTumourFound] = useState(false);
  const [error, setError] = useState(false);

  const handleImageSelect = async (image, isSample = false) => {
    setSelectedImage(isSample ? image : URL.createObjectURL(image));
    setResultImage(null); // Reset result image
    setError(false);
    setIsAnalyzing(true);

    const formData = new FormData();

    if (isSample) {
      const response = await fetch(image);
      const blob = await response.blob();
      formData.append("image", blob, `sample-${Date.now()}.jpg`);
    } else {
      formData.append("image", image);
    }

    axios
      .get(`${serverLink}/image_with_boxes?${new Date().getTime()}`, {
        responseType: "blob",
      })
      .then(response => {
        setResultImage(URL.createObjectURL(response.data));
      })
      .catch(error => {
        console.error("Error fetching the result image:", error);
      });

    axios
      .post(`${serverLink}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log("Server response received:", response.data);
        setSelectedImage(null); // Hide selected image after analysis
        // setResultImage(
        //   `${serverLink}/image_with_boxes?${new Date().getTime()}`
        // );
        setConfidenceScores(
          response.data.predictions.map(prediction => prediction.confidence)
        );
        setTumourFound(
          response.data.predictions.some(
            prediction => prediction.class === "yes"
          )
        );
        setIsAnalyzing(false);
      })
      .catch(error => {
        console.error("Error uploading the file:", error);
        setError(true);
        setIsAnalyzing(false);
      });
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    handleImageSelect(file);
  };

  return (
    <div>
      <Chatbot />
      <Navbar
        logo="nvAI"
        links={["Home", "Detection", "GitHub", "About"]}
        active="Detection"
        user_val={false}
      />
      {error && <Toast message="Error Uploading the file!" />}

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={animationVariants}
        className="flex-col justify-center mx-auto px-4 py-8 pt-28 md:pt-64 w-full h-[1900px] md:h-[1500px] container"
      >
        <h1 className="mb-4 font-['Merriweather'] font-bold text-5xl text-center text-white">
          Brain Tumour Detector🧠
        </h1>

        <div className="flex justify-center items-center py-10 w-full text-center">
          <div className="flex justify-center items-center w-[500px]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center border-2 border-gray-300 bg-gray-800 border-dashed rounded-lg w-full h-64 cursor-pointer"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  className="mb-4 w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 font-['Poppins'] font-semibold text-blue-600 text-sm">
                  <span className="font-normal text-gray-500">
                    Click to upload
                  </span>{" "}
                  or Browse Image
                </p>
                <p className="font-['Poppins'] text-gray-500 text-xs">
                  PNG, JPG or JPEG
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <h1 className="mb-10 font-['Poppins'] font-medium text-center text-white text-xl md:text-2xl">
          Or try with sample data
        </h1>

        <div className="flex justify-center items-center w-full h-[400px] md:h-[200px]">
          <div className="flex-col w-[700px] h-full">
            <div className="flex flex-wrap justify-center md:justify-between space-x-2 px-2 w-full">
              {[y1, y2, n1].map((sample, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.2 * (index + 1) }}
                  variants={animationVariants}
                  onClick={() => {
                    handleImageSelect(sample, true);
                  }}
                  className="flex-col bg-white/30 my-2 rounded-lg w-[200px] h-[240px] hover:scale-110 duration-300 hover:duration-300"
                >
                  <div className="flex justify-center p-2 w-full h-[190px]">
                    <img
                      src={sample}
                      alt={`Sample Image ${index + 1}`}
                      className="rounded-lg w-full h-full"
                    />
                  </div>
                  <div className='flex justify-center items-center w-full h-[50px] font-["Poppins"] text-center text-white'>
                    Sample Image {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center px-2 pt-[50px] w-full h-[300px]">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.8 }}
                variants={animationVariants}
                className="bg-white/30 rounded-lg w-full md:w-[700px] h-[400px]"
              >
                <h2 className="mb-2 py-4 h-[50px] font-['Poppins'] font-semibold text-center text-white text-xl">
                  Selected Image:
                </h2>
                {selectedImage && (
                  <div className="w-full">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 1 }}
                      variants={animationVariants}
                      className="flex justify-center pt-6 w-full"
                    >
                      <img
                        src={selectedImage}
                        alt="Selected Image"
                        className={`mb-4 rounded-lg w-[200px]`}
                      />
                    </motion.div>
                    {isAnalyzing && (
                      <p className="font-['Poppins'] font-semibold text-center text-lg text-white">
                        Analyzing...
                      </p>
                    )}
                  </div>
                )}
                {resultImage && (
                  <div className="flex-col justify-center w-full">
                    {tumourFound ? (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 1.2 }}
                        variants={animationVariants}
                        className="flex-col justify-center w-full"
                      >
                        <div className="flex justify-center pt-6 w-full">
                          <img
                            src={resultImage}
                            alt="Result Image"
                            className="mb-4 rounded-lg w-[200px]"
                          />
                        </div>
                        <p className='font-["Poppins"] font-medium text-center text-lg text-white'>
                          Confidence Scores:{" "}
                          {confidenceScores
                            .map(score => `${(score * 100).toFixed(2)}%`)
                            .join(", ")}
                        </p>
                      </motion.div>
                    ) : (
                      <>
                        <div className="flex justify-center pt-6 w-full">
                          <img
                            src={resultImage}
                            alt="Result Image"
                            className="mb-4 rounded-lg w-[200px]"
                          />
                        </div>
                        <p className='font-["Poppins"] font-medium text-center text-lg text-white'>
                          No Brain Tumour Found.
                        </p>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Detection;
