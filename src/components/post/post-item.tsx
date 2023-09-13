import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import config from '@/config';

export type PostItemProps = {
  title: string;
  image?: string;
  excerpt: string;
  date: string;
  slug: string;
};

export default function PostItem({
  title,
  image,
  excerpt,
  date,
  slug,
}: PostItemProps) {
  const imagePath = image ? `/images/posts/${image}` : config.placeHolderImage;

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      new Date(date).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      })
    );
  }, [date]);

  const itemA = {};

  return (
    <motion.li
      className="rounded-lg shadow-md shadow-red-500/20 hover:!bg-red-800/80 bg-gray-100 dark:bg-gray-800 text-center"
      variants={{
        hidden: {
          y: -100,
          // scale: 0, // Cause issue with whileHover scale?
          opacity: 0,
        },
        visible: {
          y: 0,
          // scale: 1,
          opacity: 1,
        },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Link href={`/posts/${slug}`}>
        <div>
          <Image
            className="w-full h-[15rem] object-cover rounded-lg"
            src={imagePath}
            alt={title}
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl mx-0 my-2">{title}</h3>
          <time className="italic text-gray-400">{formattedDate}</time>
          <p className="leading-6 my-4">{excerpt}</p>
        </div>
      </Link>
    </motion.li>
  );
}
