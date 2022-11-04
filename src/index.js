import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import LandingPage from './Page/landingPage/index'
import CarsPage from './Page/carsPage/CarsPage';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ListCars} from './components';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/test" element={<App />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/list" element={<ListCars />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
