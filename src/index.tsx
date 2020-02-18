import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { SettingsContextController } from "context/settings/SettingsContextController";

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <SettingsContextController>
    <App />
  </SettingsContextController>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
