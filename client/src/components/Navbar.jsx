import Login from "./Login";
import { useState } from "react";

function Navbar({ logo = "LOGO", links = [], active = null, user_val = false, user_img = null }) {
  const [isLoggedIn, setIsLoggedIn] = useState(user_val);

  return (
    <div className="w-full fixed z-50 h-[70px] md:h-[80px] bg-transparent backdrop-blur-xl flex justify-between p-4">
        <div className="md:px-4">
            <a href='/' className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">{ logo }</a>
        </div>

        <div className="hidden md:block pt-2">
            <ul className="flex justify-center pl-20">
                {links.map((link, index) => (
                    <li key={index} className={`text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins'] ${active === link ? 'bg-white/30 text-white' : 'text-white'}`}>
                        <a href={link.toLowerCase()}>{link}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div className="md:hidden">
            <button data-tooltip-target="tooltip-default" type="button" className="ri-menu-line text-white font-bold text-3xl hover:bg-white/30 duration-300 hover:duration-300 p-1 rounded"></button>
        </div>

        <div className='hidden md:block'>
            {isLoggedIn ? (
                <div className="flex items-center space-x-4 md:pt-2 md:pr-4">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-white">
                        <img src={user_img} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            ) : (
                <div className='flex space-x-4 md:pt-2 md:pr-4'>
                    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-white text-xl font-normal px-4 py-2 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']" type="button">Login</button>
                    <Login />
                    <a href="/register" className="text-black text-xl font-semibold px-4 pt-2.5 pb-1 -mt-1 bg-white duration-300 hover:duration-300 rounded font-['Poppins'] hover:bg-blue-600 hover:text-white">Register</a>
                </div>
            )}
        </div>
    </div>
  );
}

export default Navbar;
