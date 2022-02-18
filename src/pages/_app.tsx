import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    // <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default App;
