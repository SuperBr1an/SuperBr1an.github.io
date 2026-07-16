import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackgroundCanvas from '@/components/BackgroundCanvas';

export const metadata: Metadata = {
  title: 'Brian Wilson | Digital Marketing & MarTech Portfolio',
  description:
    'Brian Wilson portfolio: digital marketing, CRM workflows, campaign tracking, analytics, and MarTech implementation.',
};

export const viewport: Viewport = {
  themeColor: '#050505',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body>
        <BackgroundCanvas />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
