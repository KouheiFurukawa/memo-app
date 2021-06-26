import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/AppContainer';

import configureStore from '../redux/configureStore';

const stores = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={stores}>
      <div>
        <App />
      </div>
    </Provider>,
    document.getElementById('root'),
  );
};

render();
