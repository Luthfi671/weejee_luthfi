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
      <nav className="container mx-auto flex justify-between items-center p-4 px-5">
        <button onClick={() => scrollToSection('home')} className="">
          <img src="/assets/logo2.png" alt="logo weejee" className='max-w-[150px] cursor-pointer'/>
        </button>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl">
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        <ul className="hidden md:flex text-white space-x-6 items-center">
          <li><button onClick={() => scrollToSection('what_we_do')} className="hover:text-orange-600 cursor-pointer">What We Do</button></li>
          <li><button onClick={() => scrollToSection('archivement')} className="hover:text-orange-600 cursor-pointer">Archivement</button></li>
          <li><button onClick={() => scrollToSection('our_portfolio')} className="hover:text-orange-600 cursor-pointer">Portfolio</button></li>
          <li><button onClick={() => scrollToSection('testimoni')} className="hover:text-orange-600 cursor-pointer">Testimoni</button></li>
          <li><button onClick={() => scrollToSection('subscribe')} className="hover:text-orange-600 cursor-pointer">Subscribe</button></li>
          <li><button onClick={() => scrollToSection('footer')} className="hover:text-orange-600 cursor-pointer">Contact Us</button></li>
        </ul>

          <div className={`md:hidden absolute top-full left-0 w-full bg-[#f4b033] px-6 py-4 shadow z-40 transition-all duration-300 transform overflow-hidden ${
            menuOpen
              ? "opacity-100 translate-y-0 max-h-[600px] pointer-events-auto"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
          }`}>
            <ul className={'flex text-white flex-col space-y-4 font-semibold text-base ${showDropdown ? "show-class" : "hide-class"}'}>
              {/* SERVICES with DROPDOWN */}
              <li className="relative mb-0">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="hover:text-white flex items-center gap-1 cursor-pointer "
              >
                Services <i className="ri-arrow-drop-down-line text-xl"></i>
              </button>
              {/* DROPDOWN CONTENT */}
                <ul className={`mt-2 bg-[#f4b033] text-white rounded-lg shadow-inner space-y-2 px-4 pb-0 py-2 transform transition-all duration-300 ease-out ${
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
                    <button onClick={() => scrollToSection('what_we_do')} className="hover:text-orange-500">
                      What We Do
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('archivement')} className="hover:text-orange-500">
                      Archivement
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('our_portfolio')} className="hover:text-orange-500">
                      Portfolio
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('testimoni')} className="hover:text-orange-500">
                      Testimoni
                    </button>
                  </li>
                </ul>
              </li>
              <li><button onClick={() => scrollToSection('subscribe')} className="hover:text-orange-600 cursor-pointer">Subscribe</button></li>
              <li><button onClick={() => scrollToSection('footer')} className="hover:text-orange-600 cursor-pointer">Contact Us</button></li>
              {/* <li><button onClick={() => scrollToSection('hubungi_kami')} className="bg-[#7BD73E] text-black font-bold px-4 py-2 rounded-3xl hover:bg-green-200 hover:text-[#7BD73E] cursor-pointer">Hubungi Kami</button></li> */}
            </ul>
          </div>

      </nav>
    </header>
  );
}

export default Header;