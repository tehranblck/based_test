export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    author: string;
    featured?: boolean;
};

import postsJson from "@/data/categories.json";
export const BLOG_POSTS: BlogPost[] = postsJson as unknown as BlogPost[];
