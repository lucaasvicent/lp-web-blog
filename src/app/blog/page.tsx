import BlogList from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index,follow',
  openGraph: {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    url: 'https://lp-web-blog.vercel.app/og-image.jpg',
    siteName: 'Site.set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://lp-web-blog.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.set',
      },
    ],
  }
}

export default function BlogListPage() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <BlogList posts={sortedPosts} />
  )
}