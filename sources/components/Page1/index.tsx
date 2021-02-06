import * as React from "react";

export default class Page1 extends React.Component<{}, {email: string}>
{
    protected user;

    constructor(props)
    {
        super(props);
        this.state = {
            email: 'test123',
        };
    }

    public render()
    {
        return (
            <div><p>Hello from page 1</p>{this.state.email}</div>
        );
    }
}