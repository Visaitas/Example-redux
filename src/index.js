import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore  , applyMiddleware} from 'redux';
import commentReducer from './reducer/commentReducer'
import { Provider } from 'react-redux';
import createLogger from 'redux-logger'


const store = createStore(commentReducer , applyMiddleware( createLogger));//สร้างคลังข้อมูล


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

