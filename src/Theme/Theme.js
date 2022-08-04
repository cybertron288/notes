import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00C39A',
    },
    secondary: {
      main: '#121418',
    },
    background: {
      default: "#222222",
    }
  },
});

export default Theme