import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// TODO REDUX
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./redux/reducers";

// * REDUX Store
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
