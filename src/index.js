import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/home/HomePage';
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import AppCopy from './AppCopy'
import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore();
ReactDOM.render(
    <ReduxProvider store={store} >
        <Router>
            <AppCopy />
        </Router>
    </ReduxProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
