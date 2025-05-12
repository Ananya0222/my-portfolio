import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      className="z-10 flex flex-row items-center justify-between mb-24 pt-10 px-4"
    >
      {/* Name Title */}
      <div className="lg:text-5xl font-extrabold text-3xl">
        Ananya Chanda
      </div>

      {/* Navigation Links on the right */}
      <nav className="flex gap-7 items-center">
        <a
          className="text-3xl hover:text-blue-500 duration-300"
          href="https://www.linkedin.com/in/ananya-chanda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          className="text-3xl hover:text-green-500 duration-300"
          href="https://github.com/Ananya0222"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="tel:+919088119248"
          className="flex items-center gap-2 group ml-4 px-4 py-2 bg-violet-900 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all"
        >
          <i className="bx bx-phone text-violet-300 group-hover:translate-x-1 transition-transform"></i>
          <span className="text-gray-100 text-sm md:text-base">Contact Me</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;