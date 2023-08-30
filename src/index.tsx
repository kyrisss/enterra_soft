import React from "react";
import { render } from "react-dom";

import { AppRoutes } from "./routes/AppRoutes";

import "@styles/index.scss";

const App = () => <AppRoutes />;

render(<App />, document.getElementById("root"));
