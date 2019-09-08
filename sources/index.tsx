import "./index.scss";
import "sqlite3";

import * as React from "react";
import { render } from "react-dom";
import App from "Components/App";
import { BrowserRouter  as Router} from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
