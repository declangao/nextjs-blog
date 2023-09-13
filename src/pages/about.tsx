import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      className="w-[90%] max-w-4xl mx-auto my-8 shadow-md rounded-md bg-slate-200 dark:bg-slate-800"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <section className="p-8 tracking-wider">
        <h1 className="text-3xl tracking-widest my-4">Hey there!</h1>
        <p className="text-2xl my-4">
          I am Declan Gao, a <b>frontend developer</b> from{' '}
          <b>Toronto, Canada</b>.
        </p>
        <p className="text-2xl my-4">
          I love frontend development with React, Next.js, Vue and Flutter.
        </p>
        <p className="text-2xl my-4">
          Feel free to modify and use this template project however you want. No
          credit needed.
        </p>
      </section>
    </motion.div>
  );
}
