import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./fonts/Coves-Bold.otf";
import "./fonts/Century-Gothic.TTF";
import { CartProvider } from "./CartContext";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider reducer={reducer} initialState={initialState}>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
