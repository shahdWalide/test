import React, { Component } from 'react';
import App from './App';
import ReactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import { BrowserRouter } from "react-router-dom";



ReactDom.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
)