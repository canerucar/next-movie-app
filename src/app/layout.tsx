import type { Metadata } from 'next';
import '@/common/styles/globals.css';

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies App created by canerucar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
