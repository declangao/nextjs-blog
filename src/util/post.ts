import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';

const postDir = path.join(process.cwd(), 'posts');

export function getPostFiles(): string[] {
  return fs.readdirSync(postDir);
}

export function getPostData(postIdentifier: string): Post {
  const slug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const post = {
    slug,
    ...data,
    excerpt: data.excerpt || content.slice(0, 100),
    content,
  } as Post;
  return post;
}

export function getAllPosts(): Post[] {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((pf) => getPostData(pf));
  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((p) => p.isFeatured);

  return featuredPosts;
}
