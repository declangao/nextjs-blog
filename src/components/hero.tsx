import Image from 'next/image';
import React from 'react';
import config from '@/config';
import { motion } from 'framer-motion';

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="md:flex md:justify-start md:items-center">
      <Image
        src="/images/circle-spin.svg"
        alt="Spinning circle"
        width={500}
        height={500}
        className="w-[200px] relative -top-[50px] -left-[100px] animate-slowSpin md:w-[400px] md:-top-[150px] md:-left-[200px]"
      />
      <div className="absolute top-[80px] sm:top-[120px] md:static md:top-0">
        <motion.h1
          className="text-7xl"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {config.heroHeading}
        </motion.h1>
        <motion.h3
          className="text-2xl"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {config.heroSubheading}
        </motion.h3>
      </div>
    </div>
  );
}
