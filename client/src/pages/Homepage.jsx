import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Key_features_Cards from '../components/Key_features_Cards';

function Homepage() {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      {/* <Hamburger /> */}

      {/* Hero Section and Key Features */}
      <div className="w-full h-[2200px] md:h-[1550px] bg-gray-900 flex-col justify-center relative pt-10">
          <div className='w-52 h-52 rounded-full bg-white/30 absolute duration-500 skew-x-12 md:-skew-x-12 top-[5%] md:top-[10%] left-[21%] -z-1'></div>

          <div className="w-full h-[300px] flex justify-center items-center font-['Merriweather'] pt-52 px-2 md:px-0">
            <span className='text-4xl md:text-5xl text-white text-center md:leading-relaxed font-semibold'>Revolutionizing Brain Tumour <br /> Detection</span>
          </div>

          <div className="w-full h-[50px] flex justify-center items-center font-['Poppins'] px-12 mt-12 md:mt-4 md:pt-6">
            <span className='text-white text-sm md:text-md text-center'>Cutting Edge AI Technologies for accurate Diagnosis!</span>
          </div>

          <div className="w-full h-[100px] flex justify-center items-center font-['Popping'] pt-10 relative">
            <a href="#key_features" className="text-black text-xl font-semibold px-4 py-3 bg-white hover:bg-blue-600 hover:text-white duration-300 hover:duration-300 rounded-lg font-['Poppins']">Learn More</a>
            <div className='w-64 h-64 rounded-full -skew-y-6 bg-white/30 absolute right-[20%] -z-1'></div>
          </div>

          <div id='key_features' className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-52">FEATURES</div>

          <div className="w-full h-[30px] flex justify-center items-center text-center text-white text-4xl font-semibold font-['Jersey'] mt-4 relative">
            <div className='w-60 h-60 skew-x-12 rounded-full bg-white/30 absolute top-4 left-[25%] -z-1'></div>
            <span>Key Features</span>
          </div>

          <div className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-14">Discover the features that set us apart in brain tumour detection.</div>

          <div className="w-full md:h-[600px] flex justify-center mt-10">
            <div className="w-[900px] h-full flex flex-wrap justify-center gap-[50px] px-2 md:px-0">
              <Key_features_Cards title="Advance AI Technology" info="Our cutting-edge Technology uses State-Of-The-Art Deep Learning Models to detect brain tumours in MRI scans." />
              <Key_features_Cards title="Fast & Accurate Results" info="Get Quick and Accurate Results to aid in early detection and treatment planning." />
              <Key_features_Cards title="Expert Medical Analysis" info="Our platform is supported by experienced medical professionals for in-depth analysis." />
              <Key_features_Cards title="Secure Data Handling" info="We priorise your privacy and ensure your data is securely handled with utmost care." />
            </div>
          </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full h-[2100px] md:h-[1500px] bg-gray-900 flex-col justify-center relative pt-20">
          <div className="w-full h-[30px] flex justify-center items-center text-center text-white text-4xl font-semibold font-['Jersey'] mt-4 relative">
            <div className='w-60 h-60 -skew-x-12 rounded-full bg-white/30 absolute top-4 right-[25%] -z-1'></div>
            <span>Choose Your Plan</span>
          </div>

          <div className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-14">Select the plan that suits your brain tumour detection needs.</div>

          <div className="w-full md:h-[600px] flex justify-center mt-10">
            <div className="w-[1200px] h-full flex flex-wrap justify-center gap-[30px] px-2 md:px-0">
              <div className="w-[350px] h-full bg-white/30 rounded-md flex-col space-y-5 p-5 font-['Poppins']">
                <div className="text-white font-medium text-2xl">FREE</div>
                <div className="text-white text-sm">Get started with basic brain tumour detection.</div>
                <div className="text-white pt-10">
                  <span className="font-semibold text-5xl">$0</span>
                  <span>/month</span>
                </div>
                <div>
                  <span></span>
                </div>
              </div>
              
            </div>
          </div>
      </div>

      <Footer />
      </div>
  )
}

export default Homepage