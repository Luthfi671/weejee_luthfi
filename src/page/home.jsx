import React, { useRef } from 'react';
import Section from '../components/section';
import CountUp from 'react-countup';
import AnimatedNumbers from "react-animated-numbers";
import { motion, AnimatePresence } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const portfolioItems = [
    {
      title: "Digital Marketing Agency Website",
      description:
        "This is a website for a client who wants to achieve their goals and meet their users' needs while also increasing their reach across all platforms. This is a website rebrand.",
      image: "/assets/Portofolio/Evos+2.png",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A robust platform for selling products with secure payment gateways and inventory management.",
      image: "/assets/Portofolio/kongsiniaga1.png",
    },
    {
      title: "Corporate Branding Website",
      description:
        "Helping brands represent their vision and values clearly through a modern web presence.",
      image: "/assets/Portofolio/kongsiniaga2.png",
    },
    {
      title: "Startup Landing Page",
      description:
        "A fast, responsive, and beautiful landing page that helps startups acquire users quickly.",
      image: "/assets/Portofolio/hubitat.png",
    },
  ];

const testimonials = [
    {
      message:
        "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Excellent support and results! Our metrics have improved significantly since we started working with you.",
      name: "John Doe",
      role: "Founder, Growthify",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Professional, reliable, and highly skilled. Couldn't ask for more!",
      name: "Sarah Lee",
      role: "Head of Marketing, BrandBee",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Professional, reliable, and highly skilled. Couldn't ask for more!",
      name: "Sarah Lee",
      role: "Head of Marketing, BrandBee",
      image: "/assets/profile-testimoni.png",
    },
    {
      message:
        "Professional, reliable, and highly skilled. Couldn't ask for more!",
      name: "Sarah Lee",
      role: "Head of Marketing, BrandBee",
      image: "/assets/profile-testimoni.png",
    },
  ];

const FloatingIcon = ({ children, className, style, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {

    const swiperRef = useRef(null);
    const handlePrev = () => {
      if (swiperRef.current) swiperRef.current.slidePrev();
    };
    const handleNext = () => {
      if (swiperRef.current) swiperRef.current.slideNext();
    };

    const swiperRef2 = useRef(null);
    const handlePrev2 = () => {
      if (swiperRef2.current) swiperRef2.current.slidePrev();
    };
    const handleNext2 = () => {
      if (swiperRef2.current) swiperRef2.current.slideNext();
    };

    return (
        <main>
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
            <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet" />

            <Section id="home" className="bg-[#f4b033] px-0 pt-20 pb-0">
                <div className="grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div className="space-y-6 px-10">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
                            Seemless
                            Service <br />
                            <span className="">Solution</span>
                        </h1>
                        <p className="text-center md:text-left text-sm md:text-xl max-w-xl">
                            We craft exceptional websites, robust systems, and innovative mobile applications that help businesses thrive in the digital landscape.
                        </p>
                        <div className="w-full flex justify-center md:justify-start">
                            <button className=" bg-orange-500 text-white text-sm md:text-xl px-4 md:px-6 py-2 md:py-4 rounded-xl font-semibold hover:bg-orange-600 transition cursor-pointer">
                            Get Started
                            </button>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative top-13 ml-4 md:ml-0">
                        <img src="/assets/Header_Lady_(2).png" alt="Hero Illustration" className="max-h-70 md:max-h-110 lg:max-w-full mx-auto mr-22 md:mr-60 lg:mr-45"/>
                        <FloatingIcon className="left-[17%] top-[10%] md:left-[16%] md:top-[10%]" delay={0}>
                            <div className='bg-[#FF8345] text-white rotate-20 text-xl md:text-2xl z-20 w-8 h-8 md:w-11 md:h-11 justify-center items-center flex rounded-lg '>
                                <i class="ri-star-line"></i>
                            </div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[60%] top-[20%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white  text-xl md:text-2xl z-20 w-8 h-8 md:w-11 md:h-11 justify-center items-center flex rounded-lg'>
                                <i class="ri-checkbox-line"></i>
                            </div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[10%] top-[80%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-xl md:text-2xl z-20 w-8 h-8 md:w-11 md:h-11 justify-center items-center flex rounded-lg'>
                                <i class="ri-briefcase-line"></i>
                            </div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[20%] top-[60%]" delay={0}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[50%] top-[30%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[57%] top-[10%] md:left-[47%] md:top-[10%]" delay={0}>
                            <div className='bg-[#FF8345] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>
                        
                        <FloatingIcon className="left-[10%] top-[4%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>
                    </div>
                </div>
                <div className="bg-white w-full mt-9 z-10 slider-container"> 
                    <div className="slider-track py-7 gap-20 md:gap-40">
                        <img src="/assets/evos+-logo.png" alt="" className="max-w-15 md:max-w-26"/>
                        <img src="/assets/arhan-logo.png" alt="" className="max-w-39 md:max-w-50"/>
                        <img src="/assets/kongsi-logo.png" alt="" className="max-w-39 md:max-w-50"/>
                        <img src="/assets/hubitat-logo.jpg" alt="" className="max-w-24 md:max-w-35"/>

                        <img src="/assets/evos+-logo.png" alt="" className="max-w-15 md:max-w-26"/>
                        <img src="/assets/arhan-logo.png" alt="" className="max-w-39 md:max-w-50"/>
                        <img src="/assets/kongsi-logo.png" alt="" className="max-w-39 md:max-w-50"/>
                        <img src="/assets/hubitat-logo.jpg" alt="" className="max-w-24 md:max-w-35"/>

                        <div style={{ width: '20px', flexShrink: 0 }} aria-hidden="true"></div>
                    </div>
                </div>
            </Section>

            <Section id="what_we_do" className="py-10 px-10">
                <div className="container mx-auto md:px-15">
                    <div data-aos="fade-up" className="mb-12">
                        <h5 className="uppercase text-center md:text-left text-lg font-semibold text-[#F55F1D] mb-4">What we do</h5>
                        <p className="text-2xl text-center md:text-left font-bold md:max-w-95">We provide the Perfect Solution to your business growth</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div data-aos="fade-up" data-aos-delay="150" className="group border-1 md:border-0 bg-white text-black p-6 rounded-3xl hover:shadow-[1px_-1px_10px_rgba(0,0,0,0.2)]">
                            <div className="mb-4 text-blue-600">
                            {/* Ganti dengan ikon sesuai kebutuhan */}
                            <div className="rounded-2xl bg-[#F5E9D7] w-20 h-20 flex items-center justify-center">
                                <i class="ri-exchange-funds-fill text-black text-4xl"></i>
                            </div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Grow Your Business</h4>
                            <p className="text-gray-600 mb-6">We help identify the best ways to improve your business</p>
                            <button href="#" class="group-hover:bg-[#F55F1D] group-hover:text-white p-4 rounded-xl font-normal flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                                Learn More
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <i class="ri-arrow-right-line"></i>
                                </div>
                            </button>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className="group border-1 md:border-0 bg-white text-black p-6 rounded-3xl hover:shadow-[1px_-1px_10px_rgba(0,0,0,0.2)]">
                            <div className="mb-4 text-blue-600">
                            {/* Ganti dengan ikon sesuai kebutuhan */}
                            <div className="rounded-2xl bg-[#F5E9D7] w-20 h-20 flex items-center justify-center">
                                <i class="ri-heart-2-line text-black text-4xl"></i>
                            </div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Improve brand loyalty</h4>
                            <p className="text-gray-600 mb-6">We help identify the best ways to improve your business</p>
                            <button href="#" class="group-hover:bg-[#F55F1D] group-hover:text-white p-4 rounded-xl font-normal flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                                Learn More
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <i class="ri-arrow-right-line"></i>
                                </div>
                            </button>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="450" className="group border-1 md:border-0 bg-white text-black p-6 rounded-3xl hover:shadow-[1px_-1px_10px_rgba(0,0,0,0.2)]">
                            <div className="mb-4 text-blue-600">
                            {/* Ganti dengan ikon sesuai kebutuhan */}
                            <div className="rounded-2xl bg-[#F5E9D7] w-20 h-20 flex items-center justify-center">
                                <i class="ri-briefcase-4-line text-black text-4xl"></i>
                            </div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Improve Business Model</h4>
                            <p className="text-gray-600 mb-6">We help identify the best ways to improve your business</p>
                            <button href="#" class="group-hover:bg-[#F55F1D] group-hover:text-white p-4 rounded-xl font-normal flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                                Learn More
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <i class="ri-arrow-right-line"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
                
            <Section id="archivement" className='px-0'>
            <div className="bg-[#FDEDD0] py-10 md:py-20 w-full">
                <div className="max-w-6xl mx-auto px-10 md:px-40 grid grid-cols-2 gap-y-0 gap-10 md:gap-0 md:grid-cols-4 text-center">
                    <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col items-center md:border-r last:border-none border-[#C4C4C480] px-0 md:px-4 py-5 md:py-10">
                        <i class="ri-file-settings-line text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Completed Projects</h3>
                        <p className="text-[#F55F1D] font-bold text-xl md:text-3xl">
                        {/* <AnimatedNumbers
                            animateToNumber={1400}
                            configs={() => ({ mass: 1.5, tension: 60, friction: 30 })}
                            /> */}
                        <CountUp end={4} duration={8} />
                         +</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center md:border-r last:border-none border-[#C4C4C480] px-0 md:px-4 py-5 md:py-10">
                        <i class="ri-team-line text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Customer Satisfaction</h3>
                        <p className="text-[#F55F1D] font-bold text-xl md:text-3xl"><CountUp end={50} duration={8} delay={1} /> %</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="450"className="flex flex-col items-center md:border-r last:border-none border-[#C4C4C480] px-0 md:px-4 py-5 md:py-10">
                        <i class="bi bi-cash-coin text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Raised by Clients</h3>
                        <p className="text-[#F55F1D] font-bold text-xl md:text-3xl">$<CountUp end={20} duration={8} delay={1} />K</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col items-center md:border-r last:border-none border-[#C4C4C480] px-0 md:px-4 py-5 md:py-10">
                        <i class="bi bi-calendar2-week text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Years in Business</h3>
                        <p className="text-[#F55F1D] font-bold text-xl md:text-3xl"><CountUp end={1} duration={8} delay={1} /> yrs</p>
                    </div>
                </div>
            </div>
            </Section>

            <Section id="our_portfolio" className='px-10 md:px-15'>
                <div className="px-0 pt-0 pb-0 md:p-12 md:pb-0 md:pt-0 w-full flex flex-col md:flex-row md:justify-between">
                    <div data-aos="fade-up" data-aos-offset="200" className="mb-12">
                        <h5 className="uppercase text-center md:text-left text-lg font-semibold text-[#F55F1D] mb-4">Our Portfolio</h5>
                        <p className="text-2xl text-center md:text-left font-bold max-w-95">We provide the Perfect Solution to your business growth</p>
                    </div>
                    
                    <div data-aos="fade-up" data-aos-offset="-100" className="flex justify-center items-end gap-3 mb-5 md:mb-0 md:ml-4 ">
                        <button
                            onClick={handlePrev}
                            className="w-14 h-14 border border-black rounded-full flex items-center justify-center text-xl cursor-pointer"
                        >
                            <i className="ri-arrow-left-line"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 bg-[#f4b033] rounded-full flex items-center justify-center text-xl text-white cursor-pointer"
                        >
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full md:p-12 md:pt-0 pt-0">
                    <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    >
                    {portfolioItems.map((item, index) => (
                        <SwiperSlide key={index} className='w-full'>
                        <div className="space-y-4 border-1 lg:border-0 md:border-0 rounded-2xl py-4 pt-0 px-4 bg-white h-full">
                            <div className='flex items-center rounded-2xl w-full h-60 lg:h-80 lg:p-2 object-cover mx-auto'>
                            <img
                            src={item.image}
                            alt={item.title}
                            className="shadow-md max-w-full lg:max-w-full max-h-full lg:max-h-76 pt-2 lg:p-2 rounded-2xl mx-auto"
                            />
                            </div>
                            <h2 className="text-2xl w-full font-bold text-center">
                            {item.title}
                            </h2>
                            <p className="text-center w-full md:text-left">{item.description}</p>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </Section>

            <Section id="testimoni" className="px-10 md:px-15">
                <div data-aos="fade-up" data-aos-offset="200" className="flex flex-col md:flex-row justify-between items-center w-full p-12 px-0 pb-4">
                    <div>
                        <h5 className="uppercase text-center md:text-left text-lg font-semibold text-[#F55F1D] mb-4">TESTIMONIALS</h5>
                        <p className="text-2xl text-center md:text-left font-semibold max-w-95">
                            See what our customers <br /> say about us
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-100" className="flex items-end mt-5 md:mt-0 gap-3 md:ml-4 ">
                        <button
                            onClick={handlePrev2}
                            className="w-14 h-14 border border-black rounded-full flex items-center justify-center text-xl cursor-pointer"
                        >
                            <i className="ri-arrow-left-line"></i>
                        </button>
                        <button
                            onClick={handleNext2}
                            className="w-14 h-14 bg-[#f4b033] rounded-full flex items-center justify-center text-xl text-white cursor-pointer"
                        >
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>

                <div className="w-full p-12 px-0 pt-0 overflow-visible">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        loop={true}
                        onSwiper={(swiper) => {
                        swiperRef2.current = swiper;
                        }}
                        breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                    >
                        {testimonials.map((t, index) => (
                        <SwiperSlide key={index} className="py-3 px-2 overflow-visible">
                            <div className="shadow-md rounded-2xl p-6 bg-white h-full">
                                <p className="text-sm text-gray-700 mb-4">{t.message}</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold">{t.name}</p>
                                        <p className="text-sm text-gray-600">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Section>

            <Section id="subscribe" className="px-10 md:px-15">
                <div className="items-center w-full p-12 px-0 pb-4 mb-30">
                    <div data-aos="fade-up" data-aos-delay="150" className='text-center'>
                        <h5 className="uppercase text-xl font-semibold text-[#F55F1D] mb-4">SUBSCRIBE</h5>
                        <p className="text-lg md:text-4xl font-semibold mb-2">
                            Subscribe to get the latest<br />
                            news about us
                        </p>
                        <span className='text-[#8B8B8B]'>
                            Please drop your email below to get daily update about what we do
                        </span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="-25" className="text-sm md:text-md relative w-full max-w-xl mx-auto mt-10">
                        <input
                            type="email"
                            placeholder="Enter Your Email Adress"
                            className="w-full px-5 py-4 pr-32 border border-black-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1 bottom-1 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition duration-300 cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </Section>
            
        </main>
    );
  }