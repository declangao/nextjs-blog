import React from 'react';

import { getAllPosts } from '@/util/post';
import PostGrid from '@/components/post/post-grid';
import { Post } from '@/types';

type Props = {
  posts: Post[];
};

export default function AllPostPage({ posts }: Props) {
  return (
    <>
      <h1 className="text-6xl text-center m-20">All Posts</h1>
      <section className="mx-0 my-8 md:m-20">
        <PostGrid posts={posts} />
      </section>
    </>
  );
}

export function getStaticProps(): { props: Props } {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
