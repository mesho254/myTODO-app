import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

import { persistStore } from 'redux-persist';
import persistedReducer from './root.reducer';

let middleware = []
if (process.env.NODE_ENV === "development"){
    middleware.push(logger)

}



export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export let persistor = persistStore(store);


