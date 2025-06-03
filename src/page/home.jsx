import React, { useRef } from 'react';
import Section from '../components/section';
import CountUp from 'react-countup';
import AnimatedNumbers from "react-animated-numbers";
import { motion, AnimatePresence } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

    return (
        <main>
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
            <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet" />

            <Section id="home" className="bg-[#f4b033] px-0 pt-20 pb-8">
                <div className="grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div className="space-y-6 px-15">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Seemless <br className="hidden md:block" />
                            Service <br />
                            <span className="">Solution</span>
                        </h1>
                        <p className="text-xl max-w-xl">
                            We craft exceptional websites, robust systems, and innovative mobile applications that help businesses thrive in the digital landscape.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <button className="flex bg-orange-500 text-white text-xl px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 transition cursor-pointer">
                            Get Started
                            </button>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative top-13">
                        <img src="/assets/background_header.png" alt="Hero Illustration" className="w-full max-w-md lg:max-w-full mx-auto"/>
                        <FloatingIcon className="left-[20%] top-[10%]" delay={0}>
                            <div className='bg-[#FF8345] text-white rotate-20 text-2xl z-20 w-11 h-11 justify-center items-center flex rounded-lg '>
                                <i class="ri-star-line"></i>
                            </div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[60%] top-[20%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white text-2xl z-20 w-11 h-11 justify-center items-center flex rounded-lg'>
                                <i class="ri-checkbox-line"></i>
                            </div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[10%] top-[80%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-2xl z-20 w-11 h-11 justify-center items-center flex rounded-lg'>
                                <i class="ri-briefcase-line"></i>
                            </div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[20%] top-[60%]" delay={0}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[50%] top-[30%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>

                        <FloatingIcon className="left-[47%] top-[10%]" delay={0}>
                            <div className='bg-[#FF8345] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>
                        
                        <FloatingIcon className="left-[10%] top-[4%]" delay={0.5}>
                            <div className='bg-[#48B774] text-white -rotate-50 text-2xl z-20 w-3 h-3 justify-center items-center flex rounded-sm'></div>
                        </FloatingIcon>
                    </div>
                </div>
                <div className="bg-[#F8FFF9] w-full mt-9 z-10"> 
                    <div className="container py-8 mx-auto flex justify-center items-center p-4 gap-20">
                    <img src="/assets/google-logo.png" alt="" className="max-w-26"/>
                    <img src="/assets/trello-logo.png" alt="" className="max-w-26"/>
                    <img src="/assets/monday-logo.png" alt="" className="max-w-26"/>
                    <img src="/assets/notion-logo.png" alt="" className="max-w-26"/>
                    <img src="/assets/slack-logo.png" alt="" className="max-w-26"/>
                    </div>
                </div>
            </Section>

            <Section id="what_we_do" className="py-10">
                <div className="container mx-auto px-15">
                    <div data-aos="fade-up" className="mb-12">
                        <h5 className="uppercase text-lg font-semibold text-[#F55F1D] mb-4">What we do</h5>
                        <p className="text-2xl font-bold max-w-95">We provide the Perfect Solution to your business growth</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div data-aos="fade-up" data-aos-delay="150" className="group bg-white text-black p-6 rounded-3xl hover:shadow-[1px_-1px_10px_rgba(0,0,0,0.2)]">
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
                        <div data-aos="fade-up" data-aos-delay="300" className="group bg-white text-black p-6 rounded-3xl hover:shadow-[1px_-1px_10px_rgba(0,0,0,0.2)]">
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
                        <div data-aos="fade-up" data-aos-delay="450" className="group bg-white text-black p-6 rounded-3xl hover:shadow-[1px_-1px_10px_rgba(0,0,0,0.2)]">
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
                
            <Section id="4_icon" className='px-0'>
            <div className="bg-[#FDEDD0] py-20 w-full">
                <div className="max-w-6xl mx-auto px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
                    <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="ri-file-settings-line text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Completed Projects</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl">
                        {/* <AnimatedNumbers
                            animateToNumber={1400}
                            configs={() => ({ mass: 1.5, tension: 60, friction: 30 })}
                            /> */}
                        <CountUp end={1400} duration={8} />
                         +</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="ri-team-line text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Customer Satisfaction</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl"><CountUp end={20} duration={8} delay={1} /> %</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="450"className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="bi bi-cash-coin text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Raised by Clients</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl">$<CountUp end={10} duration={8} delay={1} />M</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col items-center border-r last:border-none border-[#C4C4C480] px-4 py-10">
                        <i class="bi bi-calendar2-week text-6xl mb-2"></i>
                        <h3 className="text-sm font-medium text-gray-800 mb-1">Years in Business</h3>
                        <p className="text-[#F55F1D] font-bold text-3xl"><CountUp end={2} duration={8} delay={1} /> yrs</p>
                    </div>
                </div>
            </div>
            </Section>

            <Section id="our_portfolio" className='px-15'>
                <div className="p-6 pt-0 md:p-12 md:pt-0">
                    <div data-aos="fade-up" data-aos-offset="200" className="mb-12">
                        <h5 className="uppercase text-lg font-semibold text-[#F55F1D] mb-4">Our Portfolio</h5>
                        <p className="text-2xl font-bold max-w-95">We provide the Perfect Solution to your business growth</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10">
                        <div data-aos="fade-up" data-aos-delay="150" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-1.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-2.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="150" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-3.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="space-y-4">
                            <img src='/assets/porto-4.png' className="shadow-md w-full object-cover"/>
                            <h2 className="text-2xl font-bold">
                                Digital Marketing Agency Website
                            </h2>
                            <p className="mr-10">
                                This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="testimoni" className="px-4 md:px-15">
                <div data-aos="fade-up" data-aos-offset="200" className="flex justify-between items-center w-full p-12 pb-4">
                    <div>
                        <h5 className="uppercase text-lg font-semibold text-[#F55F1D] mb-4">TESTIMONIALS</h5>
                        <p className="text-2xl font-semibold max-w-95">
                            See what our customers <br /> say about us
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-100" className="flex items-center gap-3 ml-4 ">
                        <button
                            onClick={handlePrev}
                            className="w-14 h-14 border border-black rounded-full flex items-center justify-center text-xl cursor-pointer"
                        >
                            <i className="ri-arrow-left-line"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 bg-orange-300 rounded-full flex items-center justify-center text-xl text-white cursor-pointer"
                        >
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>

                <div className="w-full p-12">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        loop={true}
                        onSwiper={(swiper) => {
                        swiperRef.current = swiper;
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
                        <SwiperSlide key={index} className="py-3">
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

            <Section id="subscribe" className="px-4 md:px-15">
                <div className="items-center w-full p-12 pb-4 mb-30">
                    <div data-aos="fade-up" data-aos-delay="150" className='text-center'>
                        <h5 className="uppercase text-xl font-semibold text-[#F55F1D] mb-4">SUBSCRIBE</h5>
                        <p className="text-4xl font-semibold mb-2">
                            Subscribe to get the latest<br />
                            news about us
                        </p>
                        <span className='text-[#8B8B8B]'>
                            Please drop your email below to get daily update about what we do
                        </span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="-25" className="relative w-full max-w-xl mx-auto mt-10">
                        <input
                            type="email"
                            placeholder="Enter Your Email Adress"
                            className="w-full px-5 py-4 pr-36 border border-black-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
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
        
            {/* <Section id="get-started" className="py-20">
                <div className="container mx-auto px-6">
                    <div data-aos="fade-up" className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h3>
                        <p className="text-gray-700">Ready to start your project? Contact us today and let's discuss how we can help you achieve your digital goals.</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-12">
                        <div data-aos="fade-up" data-aos-delay="150" class="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md animate-on-scroll visible">
                            <h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
                            <form id="contact-form">
                                <div class="mb-6">
                                    <label for="name" class="block text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" class="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="John Smith"/>
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="block text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" class="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="john@example.com"/>
                                </div>
                                <div class="mb-6">
                                    <label for="project-type" class="block text-gray-700 mb-2">Project Type</label>
                                    <div class="relative">
                                        <div class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary flex justify-between items-center cursor-pointer" id="project-type-display">
                                            <span>Select Project Type</span>
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-arrow-down-s-line"></i>
                                            </div>
                                        </div>
                                        <div class="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-md z-10 hidden" id="project-type-dropdown">
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="website">Website Development</div>
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="system">System Development</div>
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="mobile">Mobile App Development</div>
                                            <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer" data-value="other">Other</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block text-gray-700 mb-2">Message</label>
                                    <textarea id="message" rows="5" class="bg-white w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="submit" class="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">Submit Message</button>
                            </form>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" class="w-full md:w-1/2 animate-on-scroll visible" data-delay="200">
                            <div class="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                                <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
                                <div class="flex items-start mb-6">
                                    <div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                                        <i class="ri-mail-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Email Us</h4>
                                        <a href="mailto:info@weejee.com" class="text-gray-600 hover:text-primary">info@weejee.com</a>
                                    </div>
                                </div>
                                <div class="flex items-start mb-6">
                                    <div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                                        <i class="ri-phone-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Call Us</h4>
                                        <a href="tel:+1234567890" class="text-gray-600 hover:text-primary">+1 (234) 567-890</a>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                                        <i class="ri-map-pin-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Visit Us</h4>
                                        <p class="text-gray-600">123 Tech Avenue, San Francisco, CA 94107</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-8 rounded-lg shadow-md">
                                <h3 class="text-2xl font-semibold mb-6">Follow Us</h3>
                                <div class="flex space-x-4">
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-twitter-fill"></i>
                                    </a>
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                    <a href="#" class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section> */}
            
        </main>
    );
  }