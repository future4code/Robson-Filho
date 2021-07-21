
import { ThemeProvider } from "styled-components";
import { Router } from "./routes/Router";
import { theme } from './constants/theme'
import { GlobalStyled } from "./global/globalStyled";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
