import { Link } from "react-router-dom";
// import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useRef } from "react";

function Navbar({ logo = "LOGO", links = [], active = null, user_val = false, user_img = null }) {
  const [isLoggedIn, setIsLoggedIn] = useState(user_val);
  const [openModal, setOpenModal] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <div name="Navbar" className="w-full fixed z-50 h-[70px] md:h-[80px] bg-transparent backdrop-blur-xl flex justify-between p-4">
        <div className="md:px-4">
            <Link to="/" className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">{ logo }</Link>
        </div>

        <div className="hidden md:block pt-2">
            <ul className={`flex space-x-1 justify-center ${!isLoggedIn? "pl-20" : null}`}>
                {links.map((link, index) => (
                    <li key={index} className={`text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins'] cursor-pointer ${active === link ? 'bg-white/30 text-white' : 'text-white'}`}>
                        <Link to={`/${link.toLowerCase()}`}>{link}</Link>
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
                    {/* <Button className="text-white text-xl font-normal px-4 py-2 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']" onClick={() => setOpenModal(true)}>Login</Button> */}
                    {/* <>
                        <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                            <Modal.Header />
                            <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required />
                                </div>
                                <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" />
                                </div>
                                <TextInput id="password" type="password" required />
                                </div>
                                <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                    Lost Password?
                                </a>
                                </div>
                                <div className="w-full">
                                <Button>Log in to your account</Button>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?&nbsp;
                                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                    Create account
                                </a>
                                </div>
                            </div>
                            </Modal.Body>
                        </Modal>  
                    </> */}
                    <Link to="/register" className="text-black text-xl font-semibold px-4 pt-2.5 pb-1 -mt-1 bg-white duration-300 hover:duration-300 rounded font-['Poppins'] hover:bg-blue-600 hover:text-white">Register</Link>
                </div>
            )}
        </div>
    </div>
  );
}

export default Navbar;
