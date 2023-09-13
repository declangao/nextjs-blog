import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import PostContent from '@/components/post/post-content';
import PostHeader from '@/components/post/post-header';
import { Post } from '@/types';
import { getPostData, getPostFiles } from '@/util/post';
import config from '@/config';

type Props = {
  post: Post;
};

export default function PostDetailPage({ post }: Props) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      new Date(post.date).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      })
    );
  }, [post.date]);

  const imagePath = post.image ? `/images/posts/${post.image}` : '';

  return (
    <>
      <Head>
        <title>{`${post.title} - ${config.siteName}`}</title>
      </Head>
      <motion.article
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="w-[95%] max-w-[60rem] mx-auto my-8 p-4 md:p-8 bg-slate-200 dark:bg-slate-800 leading-8 rounded-md"
      >
        <PostHeader title={post.title} date={formattedDate} image={imagePath} />
        <PostContent content={post.content} />
      </motion.article>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function getStaticProps({ params }: Params) {
  const { slug } = params;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const slugs = getPostFiles().map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
