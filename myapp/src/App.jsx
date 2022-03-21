import React, { Component } from 'react';
import { Routes , Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/home/Home'
import About from './component/about/About';


export default class App extends Component {
  render() {
    return <>
    
    <Navbar/>
    <Routes>
        <Route path ='/' element ={<Home />} />
        <Route path ='home' element ={<Home />} />
        <Route path ='about' element ={<About/>} />
    </Routes>
    </>
  }
}
