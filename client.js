import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { wixAxiosConfig } from "@wix/wix-axios-config";

import App from "./app";
import { create as createFedopsLogger } from "@wix/fedops-logger";
import { Provider } from "react-redux";
import store from "./store";

const baseURL = window.__BASEURL__;

wixAxiosConfig(axios, { baseURL });

const fedopsLogger = createFedopsLogger("instagram-business");

// Move the following `appLoaded()` call to the point where your app has fully loaded.
// See https://github.com/wix-private/fed-infra/blob/master/fedops/fedops-logger/README.md
fedopsLogger.appLoaded();

ReactDOM.render(
  <Suspense fallback="">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
