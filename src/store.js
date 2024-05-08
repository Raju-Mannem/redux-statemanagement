import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import reducer from './reducer';
const middleware=[thunk]
const store=configureStore(
    {reducer},
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;