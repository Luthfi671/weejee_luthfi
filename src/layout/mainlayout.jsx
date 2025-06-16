import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';



export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true,     // animasi hanya satu kali saat pertama kali tampil
    });
  }, []);

  useEffect(() => {
    // Setiap kali route berubah (halaman baru dimuat)
    // Tunggu sebentar lalu refresh AOS agar posisi offset benar
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [location.pathname]);


    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  