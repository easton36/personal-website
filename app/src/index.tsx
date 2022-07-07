import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./App";
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";

import * as serviceWorker from "./serviceWorker";
import THEME from "./config/theme";

import './index.css';

const themeConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({
  colors: {
    ...THEME
  },
  config: themeConfig,
  styles: {
    global: ()=>({
      body: {
        bg: "backgroundDark"
      }
    })
  },
  breakpoints: {
    md: '800px'
  }
});

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

