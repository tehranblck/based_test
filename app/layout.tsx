import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/components/Container/Container";
import { Particles } from "@/components/ui/shadcn-io/particles";
import BasketSideBar from "@/components/BasketSideBar/BasketSideBar";
import GlobalCartButton from "@/components/BasketSideBar/GlobalCartButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Based.az",
  description: "Based.az is a digital product marketplace focused on subscription accounts and online services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Particles
          className="pointer-events-none fixed inset-0 -z-10"
          quantity={140}
          size={0.7}
          color="#a48fff"
          vx={0.05}
          vy={0.05}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >


          <Header />

          <Container>
            {children}
          </Container>

          <Footer />

          {/* Basket Sidebar available globally */}
          <BasketSideBar />
          <GlobalCartButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
