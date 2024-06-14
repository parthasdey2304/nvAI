import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import y1 from "../assets/brain_sample_images/marked_images/y1.jpg";
import y2 from "../assets/brain_sample_images/marked_images/y2.jpg";
import n1 from "../assets/brain_sample_images/marked_images/n1.jpg";
import n2 from "../assets/brain_sample_images/marked_images/n2.jpg";
import my1 from "../assets/brain_sample_images/only_images/my1.jpg";
import my2 from "../assets/brain_sample_images/only_images/my2.jpg";
import mn1 from "../assets/brain_sample_images/only_images/mn1.jpg";
import mn2 from "../assets/brain_sample_images/only_images/mn2.jpg";
import Chatbot from "../components/ChatBot";
import Toast from "../components/Toast";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Detection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [confidenceScores, setConfidenceScores] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [tumourFound, setTumourFound] = useState(false);
  const [error, setError] = useState(false);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setError(false);
    setUploadedImage(image);
    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append("image", image);

    axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setResultImage(URL.createObjectURL(image));
        setConfidenceScores(response.data.confidence_scores);
        setTumourFound(response.data.result === "Tumor detected");
        setIsAnalyzing(false);
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
        setError(true);
        setIsAnalyzing(false);
      });
  };

  const handleFileChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    handleImageSelect(event.target.files[0]);
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
      {error ? <Toast message="Error Uploading the file!" /> : <></>}

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={animationVariants}
        className="w-full h-[1900px]  md:h-[1500px] flex-col justify-center container mx-auto px-4 py-8 pt-28 md:pt-64"
      >
        <h1 className="text-5xl text-center font-['Merriweather'] text-white font-bold mb-4">
          Brain Tumour Detector🧠
        </h1>

        <div className="w-full flex justify-center items-center text-center py-10">
          <div className="flex items-center justify-center w-[500px]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                <p className="mb-2 font-semibold text-sm font-['Poppins'] text-blue-600">
                  <span className="font-normal text-gray-500">
                    Click to upload
                  </span>{" "}
                  or Browser Image
                </p>
                <p className="text-xs text-gray-500 font-['Poppins']">
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

        <h1 className="text-xl md:text-2xl text-center font-['Poppins'] text-white font-medium mb-10">
          Or try with sample data
        </h1>

        <div className="w-full h-[400px] md:h-[200px] flex justify-center items-center">
          <div className="w-[700px] h-full flex-col">
            <div className="w-full flex flex-wrap justify-center space-x-2 md:justify-between px-2">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.2 }}
                variants={animationVariants}
                onClick={() => {
                  handleImageSelect(y1);
                }}
                className="w-[200px] h-[240px] bg-white/30 my-2 flex-col rounded-lg hover:scale-110 duration-300 hover:duration-300"
              >
                <div className="w-full h-[190px] flex justify-center p-2">
                  <img
                    src={y1}
                    alt="Sample Image 1"
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className='w-full h-[50px] flex justify-center items-center text-center text-white font-["Poppins"]'>
                  Sample Image 1
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.4 }}
                variants={animationVariants}
                onClick={() => {
                  handleImageSelect(y2);
                }}
                className="w-[200px] h-[240px] bg-white/30 my-2 flex-col rounded-lg hover:scale-110 duration-300 hover:duration-300"
              >
                <div className="w-full h-[190px] flex justify-center p-2">
                  <img
                    src={y2}
                    alt="Sample Image 2"
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className='w-full h-[50px] flex justify-center items-center text-center text-white font-["Poppins"]'>
                  Sample Image 2
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.6 }}
                variants={animationVariants}
                onClick={() => {
                  handleImageSelect(n1);
                }}
                className="w-[200px] h-[240px] bg-white/30 my-2 flex-col rounded-lg hover:scale-110 duration-300 hover:duration-300"
              >
                <div className="w-full h-[190px] flex justify-center p-2">
                  <img
                    src={n1}
                    alt="Sample Image 3"
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className='w-full h-[50px] flex justify-center items-center text-center text-white font-["Poppins"]'>
                  Sample Image 3
                </div>
              </motion.div>
            </div>

            <div className="w-full h-[300px] flex justify-center pt-[50px] px-2">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.8 }}
                variants={animationVariants}
                className="w-full md:w-[700px] h-[400px] bg-white/30 rounded-lg"
              >
                <h2 className="h-[50px] text-xl font-semibold mb-2 py-4 text-center text-white font-['Poppins']">
                  Selected Image:
                </h2>
                {selectedImage && (
                  <div className="w-full">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 1 }}
                      variants={animationVariants}
                      className="w-full flex justify-center pt-6"
                    >
                      <img
                        src={selectedImage}
                        alt="Selected Image"
                        className="mb-4 rounded-lg"
                      />
                    </motion.div>
                    {isAnalyzing ? (
                      <p className="text-lg text-center text-white font-['Poppins'] font-semibold">
                        Analyzing...
                      </p>
                    ) : (
                      <div className="w-full flex-col justify-center">
                        {tumourFound ? (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 1.2 }}
                            variants={animationVariants}
                            className="w-full flex-col justify-center"
                          >
                            <div className="w-full flex justify-self-center">
                              <motion.img
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 1, delay: 1.4 }}
                                variants={animationVariants}
                                src={resultImage}
                                alt="Result Image"
                                className="mb-4 rounded-lg"
                              />
                            </div>
                            <p className="text-lg font-medium font-['Poppins'] text-center text-white">
                              Brain Tumour Found!
                            </p>
                            <p className="text-lg font-medium font-['Poppins'] text-center text-white">
                              Confidence Scores: {confidenceScores.join(", ")}
                            </p>
                          </motion.div>
                        ) : (
                          <p className="text-lg font-medium font-['Poppins'] text-center text-white">
                            No Brain Tumour Found.
                          </p>
                        )}
                      </div>
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
