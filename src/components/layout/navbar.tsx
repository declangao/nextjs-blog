import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import config from '@/config';

type Props = {
  title: string;
  href: string;
};

function NavbarItem({ title, href }: Props) {
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
        rotate: '2deg',
        // color: '#E84545',
      }}
      className="mx-4 md:float-left"
    >
      <Link
        href={href}
        className="block p-5 text-end text-xl leading-5 hover:text-red-700/80 md:leading-[6rem] md:p-0"
      >
        {title}
      </Link>
    </motion.li>
  );
}

export default function Navbar() {
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem('theme') === 'light' ? false : true);

    if (localStorage.getItem('theme') === 'light') {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', addShadowtoNav);
    return () => {
      window.removeEventListener('scroll', addShadowtoNav);
    };
  }, []);

  function addShadowtoNav() {
    window.scrollY >= 150
      ? setIsScreenScrolled(true)
      : setIsScreenScrolled(false);
  }

  function toggleDarkTheme() {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      document.querySelector('html')?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkTheme(true);
      document.querySelector('html')?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <header
      className={`navbar bg-slate-50 dark:bg-slate-900 fixed w-full z-[3] h-16 md:h-24 ${
        isScreenScrolled ? 'shadow-md shadow-red-500/20 opacity-90' : ''
      }`}
    >
      <Link
        href="/"
        className="logo block float-left px-5 my-auto mx-0 leading-[4rem] hover:text-red-700/80 md:text-3xl md:leading-[6rem] md:py-0"
      >
        {config.siteName}
      </Link>
      <nav>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon cursor-pointer inline-block float-right relative select-none px-5 py-7 md:hidden"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-slate-900 dark:bg-white block h-[2px] relative w-[18px] transition-all"></span>
        </label>

        <ul className="menu m-0 p-0 overflow-hidden clear-both max-h-0 transition-all md:clear-none md:float-right md:max-h-none md:mr-5">
          {config.menuLinks.map((link) => (
            <NavbarItem key={link.title} title={link.title} href={link.href} />
          ))}

          <li className="p-5 mt-3 text-end md:float-left">
            <button onClick={toggleDarkTheme}>
              {isDarkTheme ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-7 w-7"
                  fill="white"
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-7 w-7"
                  fill="black"
                >
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
