import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from "./container/AppContainer";

// import configureStore from '../stores/configureStore';
// import App from '../container/AppContainer';

// const stores = configureStore();

const render = () => {
    ReactDOM.render(
        <div>
            <App/>
        </div>,
        document.getElementById('root'),
    );
};

render();