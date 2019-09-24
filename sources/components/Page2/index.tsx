import * as React from "react";
import { UserContext, UserProps } from "../../contexts/User";

export default function Page2() {
    const {name} = React.useContext(UserContext) as UserProps;
    console.log(name);

    return (
        <div>Hello {name} gg</div>
    )
};