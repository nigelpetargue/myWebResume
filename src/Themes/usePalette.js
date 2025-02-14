// usePalette.js
import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

const usePalette = () => {
  const [primaryColor, setPrimaryColor] = useState('#1976d2'); // Default primary color
  const [secondaryColor, setSecondaryColor] = useState('#dc004e'); // Default secondary color

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: primaryColor,
          },
          secondary: {
            main: secondaryColor,
          },
        },
      }),
    [primaryColor, secondaryColor]
  );

  return { theme, setPrimaryColor, setSecondaryColor };
};

export default usePalette;
