import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore ,compose} from "redux";
import App from "./components/app";
import reducers from './reducers/index'
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const store = createStore(reducers,enhancers);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
