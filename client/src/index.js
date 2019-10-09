import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import {createBrowserHistory as createHistory} from "history";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


import './index.css';
import App from './App';
import configureStore from "./reduxStates/store";

const basename = process.env.REACT_APP_ROUTER_BASENAME || "";
const history = createHistory({ basename });

const client = new ApolloClient({
  uri: "http://localhost:5000/graphQl"
});

const store = configureStore({
  isLoggedIn:false,
  user:null
}, history);

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <IntlProvider locale="en">
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </ApolloProvider>
  </IntlProvider>,
  rootElement
);

if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./App").default;
    ReactDOM.render(
      <IntlProvider locale="en">
        <ApolloProvider client={client}>
          <Provider store={store}>
            <NextApp history={history} />
          </Provider>
        </ApolloProvider>
      </IntlProvider>,
      rootElement
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
