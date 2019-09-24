import * as React from "react";

export interface ThemeProps {
    name:string;
}

function useTheme() : ThemeProps {
    return {
        name: "dark",
    };
};

export const Theme = React.createContext<ThemeProps | {}>({});
export const ThemeProvider = props => (
  <Theme.Provider value={useTheme()}>
    {props.children}
  </Theme.Provider>
);

export const withTheme = Component => () => (
  <Theme.Consumer>
    {props => <Component {...props} />}
  </Theme.Consumer>
);
