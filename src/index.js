import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import store from "./store"

import {addComment} from "./actions/comentsActions"
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'))
store.dispatch(addComment('drugi komentarz'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
