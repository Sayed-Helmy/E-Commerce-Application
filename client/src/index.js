import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./components/layout/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
