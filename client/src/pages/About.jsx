import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar logo='nvAI' links={['Home', 'Detection', 'GitHub', 'About']} active='About' user_val={false} />

      {/* this is the about section */}
      <div className="w-full h-[600px] pt-28 md:pt-52"></div>

      <Footer />
    </>
  )
}

export default About