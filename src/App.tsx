import { ThemeProvider } from "styled-components";

import { GlobalStyle, light } from "./theme";
import GridBuilder from "./components/GridBuilder";

function App() {
  return (
    <ThemeProvider theme={light}>
      <>
        <GlobalStyle />
        <GridBuilder />
      </>
    </ThemeProvider>
  );
}

export default App;
