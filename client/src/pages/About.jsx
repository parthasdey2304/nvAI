import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/ChatBot";

function About() {
  return (
    <>
      <Chatbot />
      <Navbar logo='nvAI' links={['Home', 'Detection', 'GitHub', 'About']} active='About' user_val={false} />

      {/* this is the about section */}
      <div className="w-full h-[900px] flex justify-center items-center pt-28 md:pt-52">
        <div className="w-[1000px] h-full text-center text-2xl font-['Poppins'] text-white flex-col space-y-10">
          <div className="flex justify-center items-center text-center text-5xl font-['Merriweather']">About</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam ipsa cumque omnis debitis ea quibusdam unde rem velit excepturi voluptatem, pariatur similique accusamus sequi perferendis? Maiores, ea? Inventore perferendis error ex nemo, sed asperiores magni ipsum incidunt nostrum? Autem deleniti sed tempora reiciendis doloribus libero, praesentium consequatur eius fugit? Quos aliquid ipsum distinctio perferendis voluptas id optio laboriosam ut officiis reprehenderit eius aperiam numquam sint ab sunt ipsam ducimus molestias, quaerat dicta tempora quia iste praesentium consequatur odio? Temporibus doloremque distinctio laudantium deleniti. Delectus odit reiciendis possimus, fuga, culpa magni tenetur expedita quia modi vitae dolor ullam illo sequi sapiente quaerat! Eum illo animi iusto rerum! Totam consectetur nesciunt, odit veniam ipsa doloribus ex voluptates reprehenderit minima quidem. Minus laudantium cupiditate laboriosam voluptates beatae tempore mollitia obcaecati distinctio? Illum tenetur vel doloremque accusamus sint fugit, atque a delectus sapiente!
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About