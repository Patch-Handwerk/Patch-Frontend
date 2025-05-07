'use client';

import { createTheme } from '@mui/material/styles';
import { Tenor_Sans } from 'next/font/google';

// Load the Tenor_Sans font
const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: ['400'], // Specify the weights you want to use
});

console.log(tenorSans.style.fontFamily);

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: `${tenorSans.style.fontFamily}, sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${tenorSans.style.fontFamily}, sans-serif`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: `${tenorSans.style.fontFamily}, sans-serif`,
          '&.Mui-disabled': {},
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: `${tenorSans.style.fontFamily}, sans-serif`,
        },
      },
    },
  },
});

export default theme;
