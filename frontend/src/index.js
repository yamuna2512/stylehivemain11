import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './App'; // or './AppRoutes'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './reducks/store/store';
import createStore from './reducks/store/store';


export const store = createStore(); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);
