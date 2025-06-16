import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const isDesktop = window.innerWidth >= 768;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown && isDesktop) {
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
      setMenuOpen(false);
      setShowDropdown(false);
    }
    setShowDropdown(false); // Tutup dropdown setelah klik
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f4b033] text-black shadow z-50">
      <nav className="container mx-auto flex justify-between items-center p-4 px-10">
        <button onClick={() => scrollToSection('home')} className="">
          <img src="/assets/logo2.png" alt="logo weejee" className='max-w-[150px] cursor-pointer'/>
        </button>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-xl">
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          {/* SERVICES with DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-white flex items-center gap-1 cursor-pointer "
            >
              Services <i className="ri-arrow-drop-down-line text-xl"></i>
            </button>

            <ul ref={dropdownRef} className={`absolute top-full right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-56 z-50 transform transition-all duration-300 ease-out ${
                showDropdown
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}>
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
          </li>
          {/* <li><button onClick={() => scrollToSection('service')} className="hover:text-blue-500">Services <i class="ri-arrow-drop-down-line"></i></button></li> */}
          <li><button onClick={() => scrollToSection('work_process')} className="hover:text-white cursor-pointer">About Us</button></li>
          <li><button onClick={() => scrollToSection('portofolio')} className="hover:text-white cursor-pointer">Contact Us</button></li>
        </ul>

          <div className={`md:hidden absolute top-full left-0 w-full bg-[#f4b033] px-6 py-4 shadow z-40 transition-all duration-300 transform overflow-hidden ${
            menuOpen
              ? "opacity-100 translate-y-0 max-h-[600px] pointer-events-auto"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
          }`}>
            <ul className={'flex flex-col space-y-4 font-semibold text-base ${showDropdown ? "show-class" : "hide-class"}'}>
              {/* SERVICES with DROPDOWN */}
              <li className="relative mb-0">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="hover:text-white flex items-center gap-1 cursor-pointer "
              >
                Services <i className="ri-arrow-drop-down-line text-xl"></i>
              </button>
              {/* DROPDOWN CONTENT */}
                <ul className={`mt-2 bg-[#f4b033] text-black rounded-lg shadow-inner space-y-2 px-4 pb-0 py-2 transform transition-all duration-300 ease-out ${
                  showDropdown
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-2 pointer-events-none overflow-hidden"
                }`}>
                  <li className="font-semibold">Website Development</li>
                  <li className="pl-4 text-sm">
                    <button onClick={() => scrollToSection('frontend')} className="hover:text-orange-500">
                      - Frontend Development
                    </button>
                  </li>
                  <li className="pl-4 text-sm">
                    <button onClick={() => scrollToSection('backend')} className="hover:text-orange-500">
                      - Backend Development
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('sysdev')} className="hover:text-orange-500">
                      System Development
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('mobile')} className="hover:text-orange-500">
                      Mobile Apps
                    </button>
                  </li>
                </ul>
              </li>
              <li><button onClick={() => scrollToSection('work_process')} className="hover:text-white cursor-pointer">About Us</button></li>
              <li><button onClick={() => scrollToSection('portofolio')} className="hover:text-white cursor-pointer">Contact Us</button></li>
              {/* <li><button onClick={() => scrollToSection('hubungi_kami')} className="bg-[#7BD73E] text-black font-bold px-4 py-2 rounded-3xl hover:bg-green-200 hover:text-[#7BD73E] cursor-pointer">Hubungi Kami</button></li> */}
            </ul>
          </div>

      </nav>
    </header>
  );
}

export default Header;