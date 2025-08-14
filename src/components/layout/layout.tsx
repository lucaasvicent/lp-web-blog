import { Inter } from "next/font/google";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { CallToAction } from "../call-to-action/call-to-action";

type LayoutProps = {
  children?: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className}relative flex min-h-screen flex-col bg-gray-700`}>
      <Header />
      <main className="flex-1 flex-col mb-12">
        {children}
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}