import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies App created by canerucar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
