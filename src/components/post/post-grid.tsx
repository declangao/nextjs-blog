import React from 'react';
import { motion } from 'framer-motion';

import PostItem, { PostItemProps } from './post-item';

type Props = {
  posts: PostItemProps[];
};

export default function PostGrid({ posts }: Props) {
  return (
    <motion.ul
      className="list-none grid gap-8 content-center grid-cols-posts"
      variants={{
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </motion.ul>
  );
}
