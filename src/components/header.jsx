import React, { useState, useEffect, useRef } from 'react';

const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setShowDropdown(false); // Tutup dropdown setelah klik
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f4b033] text-black shadow z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <button onClick={() => scrollToSection('home')} className="">
          <img src="/assets/logo2.png" alt="logo weejee" className='max-w-[150px] cursor-pointer'/>
        </button>
        <ul className="flex space-x-6 items-center">
          {/* SERVICES with DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-white flex items-center gap-1 cursor-pointer "
            >
              Services <i className="ri-arrow-drop-down-line text-xl"></i>
            </button>

            {showDropdown && (
            <ul ref={dropdownRef} className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-56 z-50">
              {/* LEVEL 1 ITEM 1 */}
              <li className="relative group">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-orange-100 rounded-t-lg flex justify-between items-center cursor-pointer"
                >
                  Website Development
                  <i class="ri-arrow-right-s-line"></i>
                </button>

                {/* LEVEL 2 DROPDOWN */}
                <ul className="absolute top-0 ml-2 left-full mt-0 bg-white w-56 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  <li>
                    <button
                      onClick={() => scrollToSection('frontend')}
                      className="w-full text-left px-4 py-2 rounded-t-lg hover:bg-orange-100 cursor-pointer"
                    >
                      Frontend Development
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('backend')}
                      className="w-full text-left px-4 py-2 rounded-b-lg hover:bg-orange-100 cursor-pointer"
                    >
                      Backend Development
                    </button>
                  </li>
                </ul>
              </li>

              {/* LEVEL 1 ITEM 2 */}
              <li>
                <button
                  onClick={() => scrollToSection('sysdev')}
                  className="w-full text-left px-4 py-2 hover:bg-orange-100 cursor-pointer"
                >
                  System Development
                </button>
              </li>

              {/* LEVEL 1 ITEM 3 */}
              <li>
                <button
                  onClick={() => scrollToSection('mobile')}
                  className="w-full text-left px-4 py-2 hover:bg-orange-100 rounded-b-lg cursor-pointer"
                >
                  Mobile Apps
                </button>
              </li>
            </ul>
            )}
          </li>
          {/* <li><button onClick={() => scrollToSection('service')} className="hover:text-blue-500">Services <i class="ri-arrow-drop-down-line"></i></button></li> */}
          <li><button onClick={() => scrollToSection('work_process')} className="hover:text-white cursor-pointer">About Us</button></li>
          <li><button onClick={() => scrollToSection('portofolio')} className="hover:text-white cursor-pointer">Contact Us</button></li>
          <li><button onClick={() => scrollToSection('get-started')} className="bg-transparant text-black font-semibold px-4 py-2 rounded-xl border border-white hover:bg-orange-100 hover:text-orange-500 cursor-pointer">Login</button></li>
          <li><button onClick={() => scrollToSection('get-started')} className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-xl hover:bg-orange-100 hover:text-orange-500 cursor-pointer">Register</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;