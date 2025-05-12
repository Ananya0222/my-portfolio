import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 100,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-12 flex flex-col flex-grow">
        <Header />
        <Hero />
       
      </div>
    </div>
  );
};

export default App;
