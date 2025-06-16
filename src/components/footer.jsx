export default function Footer() {
  return (
    
    <footer className="bg-[#F3B033] text-black pt-16 pb-8 font-poppins">
      <div className="container mx-auto px-15">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <img src="/assets/logo2.png" alt="logo weejee" className='max-w-[150px] cursor-pointer mb-4'/>
            <p className="mb-6">
            Revolutionize your business through Our Custom Software Development Services-bespoke solutions designed to enchance efficiency and faster growth!
            </p>
            <div className="text-white flex space-x-4">
              <a href="#" className="bg-[#F55F1D] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-facebook-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#F55F1D] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-twitter-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#F55F1D] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-instagram-fill"></i>
                </div>
              </a>
              <a href="#" className="bg-[#F55F1D] rounded-full hover:text-black transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-linkedin-fill"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:mx-auto">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg font-semibold mb-6">Address</h3>
            <p className="mb-6 font-semibold">
              Weejee Studio Head Office. <br />
              Damansara <br />
              Malaysia
            </p>
          </div>
        </div>
        <div className="font-bold border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright Weejee Studio 2025</p>
        </div>
      </div>
    </footer>
  );
}