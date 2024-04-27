import 'remixicon/fonts/remixicon.css'

function Navbar() {
  return (
    <div className="w-full h-[70px] md:h-[80px] bg-gray-900 flex justify-between p-4">
        <div className="md:px-4">
            <a href='/' className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">nvAI</a>
        </div>

        <div className="hidden md:block pt-2">
            <ul className="flex justify-center">
                <li className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/">Home</a></li>
                <li className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/detection">Detection</a></li>
                <li className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="https://github.com/parthasdey2304/nvAI.git">GitHub</a></li>
                <li className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']"><a href="/about">About</a></li>
            </ul>
        </div>

        <div className="md:hidden">
            <i class="ri-menu-line text-white font-bold text-3xl hover:bg-white/30 duration-300 hover:duration-300 p-1 rounded"></i>
        </div>

        <div className='flex space-x-4 md:pt-2 md:pr-4'>
            <a href="/login" className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']">Login</a>
            <a href="/register" className="hidden md:block text-white text-xl font-medium px-4 py-1 bg-cyan-600 duration-300 hover:duration-300 rounded font-['Poppins']">Register</a>
        </div>
    </div>
  )
}

export default Navbar