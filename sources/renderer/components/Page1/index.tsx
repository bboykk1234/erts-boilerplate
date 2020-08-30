import * as React from "react";
import { remote } from "electron";

export default class Page1 extends React.Component<{}, {email: string}>
{
    protected user;

    constructor(props)
    {
        super(props);
        this.user = remote.require('./database.js').User;
        this.state = {
            email: 'test123',
        };
    }

    async setUserEmail() {
        const user = await this.user.findOne();

        this.setState({email: user.email});
    }

    componentDidMount() {
        try {
            this.setUserEmail();
        } catch (err) {
            console.log(err);
        };
    }

    public render()
    {
        return (
            <div><p>Hello from page 1</p>{this.state.email}</div>
        );
    }
}