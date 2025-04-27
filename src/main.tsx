import { CssBaseline, ThemeProvider } from "@mui/material";
// import { SpeedInsights } from "@vercel/speed-insights/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store.ts";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/*<SpeedInsights />*/}
        <Router />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
