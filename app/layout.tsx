import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Sudobg from '@/public/images/bg2.jpg';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sudarshan',
  description: 'Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} relative h-fit`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <Image
            fill={true}
            src={Sudobg}
            alt="Backdrop"
            className="z-[-1] absolute bg-repeat opacity-20 overflow-x-hidden object-cover"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
