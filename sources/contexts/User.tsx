import * as React from "react";

export interface UserProps {
    name:string;
    age:number;
}

function useUser() : UserProps {
    return {
        name: "David Tan",
        age: 25,
    };
};

export const UserContext = React.createContext<UserProps | {}>({});
export const UserProvider = props => (
  <UserContext.Provider value={useUser()}>
    {props.children}
  </UserContext.Provider>
);

export const withUser = Component => () => (
  <UserContext.Consumer>
    {props => <Component {...props} />}
  </UserContext.Consumer>
);
