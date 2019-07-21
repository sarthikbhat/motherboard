import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import createHistory from "history/createBrowserHistory";
import './index.css';
import App from './App';

import configureStore from "./reduxStates/store";

const basename = process.env.REACT_APP_ROUTER_BASENAME || "";
const history = createHistory({ basename });

const store = configureStore({}, history);

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </IntlProvider>,
    rootElement
  );
  
  if (module.hot) {
    module.hot.accept("./App", () => {
      // eslint-disable-next-line global-require
      const NextApp = require("./App").default;
      ReactDOM.render(
        <IntlProvider locale="en">
          <Provider store={store}>
            <NextApp history={history} />
          </Provider>
        </IntlProvider>,
        rootElement
      );
    });
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
