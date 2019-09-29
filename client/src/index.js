import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import App from './App';
import * as serviceWorker from './serviceWorker';

let inatialState ={
    isAdmin:[false],
    unitCheck:"Pre-intermidiate"
};

function isAdmin(state = inatialState,action){
    if(action.type === "ADMIN"){
        return {
            ...state,
            isAdmin:[true]
        }
    }
    if(action.type === "ELEMENTARY"){
        return {
            ...state,
            unitCheck:"Elementary"
        }
    }
    if(action.type === "PRE-INTERMIDIATE"){
        return {
            ...state,
            unitCheck:"Pre-intermidiate"
        }
    }
    return state
}
const store = createStore(isAdmin);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
