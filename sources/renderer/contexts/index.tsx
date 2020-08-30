import * as React from "react";
import { UserProvider, withUser } from "./User";
import { ThemeProvider, withTheme } from "./Theme";

export const AppProvider = ({ children }) => (
  <UserProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UserProvider>
);

export const withApp = ({ children }) => {
  let childrenWithContexts;
  childrenWithContexts = withUser(children);
  childrenWithContexts = withTheme(childrenWithContexts);

  return childrenWithContexts;
};
