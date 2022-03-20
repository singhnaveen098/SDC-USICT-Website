import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './compopnents/Navbar';
import Home from './compopnents/Home';
import FFS from './compopnents/FFS';
import Contact from './compopnents/Contact';
import Foot from './compopnents/Foot';
import { FaDiscourse, FaAngleUp } from "react-icons/fa";

function App() {
  let mtop;
  const [showmodal, setshowmodal] = useState(false)
  const [visible, setvisible] = useState(false)
  const top = 200;

  const cclick = () => {
    setshowmodal(!showmodal);
  }

  const scrolltotop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
    document.addEventListener("scroll", () => { setvisible(document.documentElement.scrollTop > top) })
  }, [])

  useEffect(() => {
    mtop = document.getElementById('movetop');
    if (mtop.classList.contains('hidden') && visible) {
      mtop.classList.remove('hidden');
      mtop.classList.remove('opacity-0');
    }
    else {
      mtop.classList.add('opacity-0');
      setTimeout(() => {
        mtop.classList.add('hidden');
      }, 500);
    }
  }, [visible])


  return (
    <div className='min-h-screen relative'>
      <Contact show={showmodal} cclick={cclick}/>
      <div id='movetop' className={`fixed bottom-20 right-5 z-10 hidden opacity-0 transition-opacity duration-300 ease-in-out text-white bg-gray-400 cursor-pointer rounded-full p-2 shadow-[0px_1px_5px_rgba(96,99,101,1)]`}>
        <FaAngleUp size={35} onClick={scrolltotop} />
      </div>
      <div className='fixed bottom-4 right-5 z-10 text-white bg-gray-400 cursor-pointer rounded-full p-2 shadow-[0px_1px_5px_rgba(96,99,101,1)]'>
        <FaDiscourse size={35} onClick={cclick} />
      </div>
      <Router>
        <Navbar />
        <div className="container-fluid pb-32">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ffs">
              <FFS />
            </Route>
          </Switch>
        </div>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
