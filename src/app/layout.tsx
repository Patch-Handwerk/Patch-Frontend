import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Lato, Montserrat } from 'next/font/google';

import theme from '@/theme';

import './globals.css';

const latoBase = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

const montserratBase = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoBase.variable} ${montserratBase.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
