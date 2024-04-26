function Navbar() {
  return (
    <div className="w-full h-[70px] md:h-[80px] bg-blue-600 flex justify-between p-4">
        <div>
            <span className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">nvAI</span>
        </div>

        <div className="hidden md:block pt-2">
            <ul className="flex justify-center">
                <li className="text-white text-xl font-semibold px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded"><a href="/">Home</a></li>
                <li className="text-white text-xl font-semibold px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded"><a href="/detection">Detection</a></li>
                <li className="text-white text-xl font-semibold px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded"><a href="https://github.com/parthasdey2304/nvAI.git">GitHub</a></li>
                <li className="text-white text-xl font-semibold px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded"><a href="/about">About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar