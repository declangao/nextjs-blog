import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      className={`${inter.className} mx-auto min-h-screen relative overflow-x-hidden`}
    >
      <Navbar />
      <main className="h-full px-4 md:px-8 pt-24 pb-12">{children}</main>
      <Footer />
    </div>
  );
}
