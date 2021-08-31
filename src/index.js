import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


const characterReducer = (state=[], action) => {
  switch(action.type) {
    case "SET_CHARACTERS":
      return action.characters
      
    case "ADD_CHARACTER":
      return [...state, action.character]
        
    default: 
      return state
    }
  }
    
const countReducer = (state=0, action) => {
  switch(action.type) {
    default: 
    return state
  }
}

const rootReducers = combineReducers( {
  characters: characterReducer, 
  count: countReducer
})

const store = createStore(rootReducers)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
