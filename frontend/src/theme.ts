import { createTheme } from '@material-ui/core';
import { lime, purple } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lime[200]
    },
    secondary: {
      main: purple[600]
    }
  }
});

export default theme;
