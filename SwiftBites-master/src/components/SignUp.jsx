import React, { useState } from 'react';

function InputField(props) {
  const { placeholder, type } = props;
  return (
    <div className="relative w-full mb-4">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[#f3f3ff] border-none outline-none rounded focus:ring-2 focus:ring-[#1a1a1a] transition-all duration-300"
      />
    </div>
  );
}

export default function SignUp() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const togglePanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div
      className="min-h-screen bg-[#ddfffe] grid place-content-center font-['Poppins'] relative"
      style={{
        backgroundImage: `url(/logbac.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for opacity - Increased to 50% */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative w-[850px] h-[500px] bg-white shadow-[25px_30px_55px_rgba(85,85,85,0.4)] rounded-[13px] overflow-hidden z-10">
        <div
          className={`absolute w-[60%] h-full p-[0_40px] transition-all duration-600 ease-in-out 
          ${isRightPanelActive ? 'translate-x-[66.7%] opacity-100 z-[5]' : 'opacity-0 z-[1]'}`}
        >
          <form className="h-full flex flex-col items-center justify-center px-[50px] ">
            <h1 className="text-[#1a1a1a] text-2xl font-bold mb-4">Join SwiftBites</h1>
            <InputField placeholder="Name" type="text" />
            <InputField placeholder="Reg No" type="text" />
            <InputField placeholder="Email" type="email" />
            <InputField placeholder="Password" type="password" />
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-[#1a1a1a] text-white rounded uppercase font-semibold tracking-wide transition-all duration-300 hover:bg-[#333333]"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div
          className={`absolute w-[60%] h-full p-[0_40px] transition-all duration-600 ease-in-out z-[2]
          ${isRightPanelActive ? 'opacity-0 z-0 pointer-events-none' : ''}`}
        >
          <form className="h-full flex flex-col items-center justify-center px-[50px]">
            <h1 className="text-[#1a1a1a] text-2xl font-bold mb-8">Welcome to SwiftBites</h1>
            <InputField placeholder="Reg No" type="text" />
            <InputField placeholder="Password" type="password" />
            <a href="#" className="text-gray-700 text-sm mt-4 pb-1 border-b-2 border-gray-100">
              Forgot your password?
            </a>
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-[#1a1a1a] text-white rounded uppercase font-semibold tracking-wide transition-all duration-300 hover:bg-[#333333]"
            >
              Sign In
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 left-[60%] w-[40%] h-full overflow-hidden transition-transform duration-600 ease-in-out z-[9]
          ${isRightPanelActive ? '-translate-x-[150%]' : ''}`}
        >
          <div
            className={`relative bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] text-white -left-[150%] h-full w-[250%] 
            transition-transform duration-600 ease-in-out
            ${isRightPanelActive ? 'translate-x-[50%]' : ''}`}
          >
            <div
              className={`absolute flex items-center justify-center flex-col p-[0_40px] text-center h-full w-[340px] 
              transition-transform duration-600 ease-in-out right-[60%] -translate-x-[12%]
              ${isRightPanelActive ? 'translate-x-[25%]' : ''}`}
            >
              <h1 className="text-white text-2xl font-bold mb-4">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wide mb-8">
                To keep connected with SwiftBites, please login with your personal info
              </p>
              <button
                onClick={togglePanel}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded uppercase font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]"
              >
                Sign In
              </button>
            </div>

            <div
              className={`absolute flex items-center justify-center flex-col p-[0_40px] text-center h-full w-[340px] 
              transition-transform duration-600 ease-in-out right-0
              ${isRightPanelActive ? 'translate-x-[35%]' : ''}`}
            >
              <h1 className="text-white text-2xl font-bold mb-4">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 tracking-wide mb-8">
                Enter your personal details and start your journey with SwiftBites
              </p>
              <button
                onClick={togglePanel}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded uppercase font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}