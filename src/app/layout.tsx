import type { Metadata } from 'next';
import './globals.css';

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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
