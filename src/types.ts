export interface Post {
  title: string;
  image?: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
  isFeatured: boolean;
}

export type Message = {
  name: string;
  email: string;
  message: string;
  id?: string;
};
