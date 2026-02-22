import type { Metadata } from 'next';
import './globals.css';
import { Raleway } from 'next/font/google';
import Footer from '@/components/footer';

const raleway = Raleway({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Enhanced Button',
  description: 'A simple button component with enhanced features.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={raleway.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
