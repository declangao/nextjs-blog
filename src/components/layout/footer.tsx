import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="absolute bottom-0 w-full h-12 mx-auto flex justify-center items-center">
      <hr className="w-1/5 sm:w-1/4 lg:w-96 border-red-500" />
      <p className="mx-3 md:mx-6 text-sm">
        Made with <span>❤️</span> by Declan Gao
      </p>
      <hr className="w-1/5 sm:w-1/4 lg:w-96 border-red-500" />
    </footer>
  );
}
