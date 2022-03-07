import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {    
    gray: {
      "1": "#828799",
      "2": "#1E2338",
    },    
    blue: {      
      "1": "#1D539E",
      "2": "#1D539E",
    },
    yellow: {
      "1": "#FFCC29",      
    },
    green: {
      "1": "#59CE9F",
    }
    
  }, 

  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  styles: {
    global: {
      body: {
        bg: '#E5E5E5',
        color: '#1E2338',
      }
    }
  }
});

