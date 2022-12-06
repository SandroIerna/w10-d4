import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { favourites, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={favourites}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
