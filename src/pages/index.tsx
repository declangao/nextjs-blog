import React from 'react';

import Hero from '@/components/hero';
import PostGrid from '@/components/post/post-grid';
import { Post } from '@/types';
import { getFeaturedPosts } from '@/util/post';

type Props = {
  featuredPosts: Post[];
};

export default function HomePage({ featuredPosts }: Props) {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="mx-0 my-8 md:mt-0 md:m-20">
        <PostGrid posts={featuredPosts} />
      </section>
    </>
  );
}

export function getStaticProps(): { props: Props } {
  return {
    props: {
      featuredPosts: getFeaturedPosts(),
    },
  };
}
