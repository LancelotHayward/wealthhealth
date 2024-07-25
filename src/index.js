import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { store } from "./common/store.js"
import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import Employees from "./pages/Employees/Employees.jsx"
import Footer from "./components/Footer/Footer.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/employees" element={<Employees />}/>
      </Routes>
    </Router>
    <Footer/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
