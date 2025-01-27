'use client'
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/common/styles/globals.css';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
} 