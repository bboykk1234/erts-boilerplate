import * as React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Page1 from "Components/Page1";
import Page2 from "Components/Page2";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route render={() => <div>No match</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}
