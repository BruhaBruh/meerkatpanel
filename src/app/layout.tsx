import { BaseLayout } from '@/client/layouts/Base';
import '@/client/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <BaseLayout className={inter.variable}>{children}</BaseLayout>
);

export default Layout;