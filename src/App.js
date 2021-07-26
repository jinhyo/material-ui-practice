import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;
