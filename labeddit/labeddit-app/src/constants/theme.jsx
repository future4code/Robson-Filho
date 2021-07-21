import { createTheme } from '@material-ui/core/styles';
import {PRIMARY_COLOR, SEGUNDARY_COLOR} from './colors'


 export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
      contrastText: "white"
    },
    text: {
      primary: SEGUNDARY_COLOR
    }
    },
  },
);