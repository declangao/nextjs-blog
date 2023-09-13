import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  date: string;
  image?: string;
};

export default function PostHeader({ title, date, image }: Props) {
  return (
    <header className="flex flex-col justify-between pb-8">
      <div className="pb-4">
        <h3 className="text-2xl">{title}</h3>
        <time className="italic text-gray-400">{date}</time>
      </div>
      {image && <Image src={image} alt={title} width={400} height={300} />}
    </header>
  );
}
