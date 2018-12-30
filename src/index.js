import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css';
import { Provider } from 'react-redux';
import AppLayout from './appLayout';
import 'babel-polyfill';
import $ from 'jquery';
import { PersistGate } from 'redux-persist/lib/integration/react';
// import the two exports from the last code snippet.
import { persistor, store } from './store/tatvamStore';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppLayout />                    
                </Provider>
            </BrowserRouter> </PersistGate>
    </Provider>,
    document.getElementById('root')
);