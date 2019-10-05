import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';

import reducer from "./reducer";
import DevTools from './DevTools';



const store = createStore(reducer, 
  DevTools.instrument());

// const logger = createLogger();
// const store = createStore(reducer, applyMiddleware(logger));

 export default store