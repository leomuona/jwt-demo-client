import { Global, ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

import { DarkModeContext, useDarkMode } from "./DarkModeContext";
import { darkTheme, lightTheme } from "./theme/theme";

export function Root(): JSX.Element {
  return (
    <StrictMode>
      <DarkModeContext>
        <RootWithContext />
      </DarkModeContext>
    </StrictMode>
  );
}

function RootWithContext() {
  const { isDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Global
        styles={(theme) => ({
          html: {
            boxSizing: "border-box",
          },
          "*, *:before, *:after": {
            boxSizing: "inherit",
          },
          body: {
            margin: 0,
            padding: theme.spacing(2),
            paddingBottom: theme.spacing(8),
            fontFamily: theme.fontFamilies.sans,
            backgroundColor: theme.colors.appBackground,
          },
          a: {
            textDecoration: "none",
          },
        })}
      />
      <Outlet />
    </ThemeProvider>
  );
}
