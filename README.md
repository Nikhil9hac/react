

netflix project
// import React from "react";
// import ReactDom from "react-dom";

// import React from "react";
// import ReactDom from "react-dom";
// import App,{Navbar} from "./App.jsx";
// import mData from "./mData.js"
// import "./index.css";

// ReactDom.render(<Navbar/>,document.getElementById('root'))

// ReactDom.render(
//     <>
//     {mData.map((val)=>{
//       return(
//           <App key={val.key} imgsrc={val.imgsrc} title={val.title} link={val.link} original={val.original} alt="pic"/>
//       )
//     })}
//     </>
//     ,document.getElementById('content")

slot gaming

import React from "react";

export const Navbar=()=>{
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
      </>
    )
}

export const Slot=(props)=>{
  return(
    <>
    <div className="slot-container">
          <div className="slot-area">
            <div className="emoji-area">
              <span>{props.x}</span>
              <span>{props.y}</span>
              <span>{props.z}</span>
            </div>
            <hr/>
            <div className="result-area text-center">
                {(props.x==props.y&&props.y==props.z ? "This is Matching":"This is Not Matching")}
            </div>
          </div>
    </div>
    </>
  )
}

import React from "react";
import ReactDom from "react-dom";
import {Navbar,Slot}  from "./App.jsx";
import "./index.css";

ReactDom.render(<>
  <Navbar />
</>, document.getElementById('root'))

ReactDom.render(<>
<h3>Slot Machine Game</h3>
  <Slot x="😄" y="😄" z="😄"/>
  <Slot x="😄" y="🎅" z="😄"/>
  <Slot x="🎅" y="🎅" z="🎅"/>
  <Slot x="🎅" y="🎅" z="😄"/>
</>, document.getElementById('content'))


increament basic

import React,{useState} from "react";

export const App = (props) => {
  const [count,setCount]=useState(0)
  const Increase=()=>{
    setCount(count+1 )
  }
  return (
    <>
      <div className="container">
        <div className="top text-center">{count}</div>
        <div className="bottom text-center">
          <button onClick={Increase}>Click</button>
        </div>
      </div>
    </>
  )
}


get time 

import React, { useState } from 'react'

export const App = () => {
  const currTime=new Date();
  const [time,setNewTime]=useState(currTime.toLocaleTimeString())
  const NewTime=()=>{
    let currTime2=new Date()
    setNewTime(currTime2.toLocaleTimeString());
  }
  return (
    <>
    <div className="time-container text-center">
          <div className="top">{time}</div>
          <div className="bottom">
            <button onClick={NewTime}>Get Time</button>
          </div>
    </div>
    </>
  )
}

