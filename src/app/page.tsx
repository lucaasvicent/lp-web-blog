import { LandingPage } from "@/templates/landing-page/landing-page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um único lugar!',
  robots: 'index,follow',
  openGraph: {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar!',
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

export default function HomePage() {
  return (
    <LandingPage />
  )
};