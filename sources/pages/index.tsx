import * as React from "react";

const Index = ({email} : {email: string}) => {
    return (
        <div><p>Hello from page 1</p>{email}</div>
    );
}

export default Index;