import { Link } from "react-router-dom";

function Register() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-slate-950 to-gray-800 flex justify-start relative'>
      <Link to="/" className="ri-arrow-left-line absolute font-bold text-3xl top-1 left-1 md:top-5 md:left-5 hover:bg-black duration-300 hover:duration-300 hover:text-white px-2.5 py-2 rounded-full"></Link>
      <div className='bg-white w-full md:w-[40%] h-screen flex flex-col justify-center items-center'>
        {/* Register form */}
        <h2 className="text-3xl font-medium font-['Poppins'] mb-4">Register</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4 font-['Poppins']">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
              Confim Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date Of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              required
            />
          </div>
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              console.log("Register");
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className='hidden md:block w-[60%] bg-black h-full'>
        {/* Image of doctors and all */}
      </div>
    </div>
  );
}

export default Register;
