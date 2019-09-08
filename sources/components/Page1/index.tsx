import * as React from "react";
import { User } from "../../models/User";

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

    async setUserEmail() {
        const user = await User.findOne();

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