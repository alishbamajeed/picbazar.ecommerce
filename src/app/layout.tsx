import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutCopy from './layoutCopy'; // Import LayoutCopy correctly

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-6">
          <LayoutCopy>{children}</LayoutCopy> {/* Properly passing children */}
        </main>
      </body>
    </html>
  );
};

export default Layout;
