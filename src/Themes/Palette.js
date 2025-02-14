import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#FBFBFB',
    },
    secondary: {
      main: '#212121',
    },
    success: {
      main: '#C96BD9',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Add any custom styles here if needed
        },
      },
    },
  },
});

const Palette = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Palette;
