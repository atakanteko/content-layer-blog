import Navbar from '@/components/navbar/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/components/providers/ThemeProvider';
import Footer from '@/components/footer/footer';

const inter = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bytebadger',
  description:
    'Unlock the world of software development with my articles. Dive into coding, best practices, and industry insights. Stay ahead in the tech game with our expert articles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              <div className="wrapper">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
