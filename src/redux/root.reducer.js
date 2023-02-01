import { combineReducers } from 'redux';
import taskReducer from './task/task.reducer';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'



const persistConfig = {
  key: 'root',
  storage,
};


const rootReducer = combineReducers({
  tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer)

export default persistedReducer;
