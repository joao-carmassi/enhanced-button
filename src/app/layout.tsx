import type { Metadata } from 'next';
import './globals.css';
import { Raleway } from 'next/font/google';
import Footer from '@/components/footer';

const raleway = Raleway({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Enhanced Button V4',
  description:
    'A simple button component with enhanced features for tailwind V4.',
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
