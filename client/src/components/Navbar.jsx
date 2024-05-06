import Login from "./Login";
import "flowbite";

function Navbar({ links = null, active = null, user_val = false, user_img = null }) {
  return (
    <div className="w-full fixed z-50 h-[70px] md:h-[80px] bg-transparent backdrop-blur-xl flex justify-between p-4">
        <div className="md:px-4">
            <a href='/' className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">nvAI</a>
        </div>

        <div className="hidden md:block pt-2">
            <ul className="flex justify-center pl-20">
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/">Home</a></li>
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/detection">Detection</a></li>
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="https://github.com/parthasdey2304/nvAI.git">GitHub</a></li>
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/about">About</a></li>
            </ul>
        </div>

        <div className="md:hidden">
            <button data-tooltip-target="tooltip-default" type="button" className="ri-menu-line text-white font-bold text-3xl hover:bg-white/30 duration-300 hover:duration-300 p-1 rounded"></button>
        </div>

        <div className='hidden md:block'>
            <div className='flex space-x-4 md:pt-2 md:pr-4'>
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="text-white text-xl font-normal px-4 py-2 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']" type="button">Login</button>
                <Login />
                <a href="/register" className="text-black text-xl font-semibold px-4 pt-2.5 pb-1 -mt-1 bg-white duration-300 hover:duration-300 rounded font-['Poppins'] hover:bg-blue-600 hover:text-white">Register</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar