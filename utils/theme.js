import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const base = createTheme({
  palette: {
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: green[500],
    },
    error: {
        main: red[400],
    },
  },
});

const theme = responsiveFontSizes(base)

export default theme;