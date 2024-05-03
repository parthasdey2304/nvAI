import 'remixicon/fonts/remixicon.css';

function Navbar() {
  return (
    <div className="w-full fixed z-50 h-[70px] md:h-[80px] bg-transparent backdrop-blur-xl flex justify-between p-4">
        <div className="md:px-4">
            <a href='/' className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">nvAI</a>
        </div>

        <div className="hidden md:block pt-2">
            <ul className="flex justify-center">
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/">Home</a></li>
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/detection">Detection</a></li>
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="https://github.com/parthasdey2304/nvAI.git">GitHub</a></li>
                <li className="text-white text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/about">About</a></li>
            </ul>
        </div>

        <div className="md:hidden">
            <i class="ri-menu-line text-white font-bold text-3xl hover:bg-white/30 duration-300 hover:duration-300 p-1 rounded"></i>
        </div>

        <div className='hidden md:block'>
            <div className='flex space-x-4 md:pt-2 md:pr-4'>
                <a href="/login" className="text-white text-xl font-normal px-4 py-2 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']">Login</a>
                <a href="/register" className="text-black text-xl font-semibold px-4 pt-2.5 pb-1 -mt-1 bg-white duration-300 hover:duration-300 rounded font-['Poppins'] hover:bg-blue-600 hover:text-white">Register</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar