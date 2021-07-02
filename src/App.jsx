import React, { useState } from 'react'

export const App = () => {
  let currTime=new Date().toLocaleTimeString();
  let currDate=new Date().getDay();
  const weeks=["Sunday", "Monday", "Tuesday",  "Thursday", "Friday", "Saturday"];
  let [clock,setClock]=useState(currTime);
  setInterval(()=>{
    currTime=new Date().toLocaleTimeString();
    currDate=new Date().getDay();
    setClock(currTime);
  },1000)
  return (
    <>
    <div className="digital-clock">
      <div className="date">{weeks[currDate]}</div>
      <div className="top">{clock}</div>
    </div>
    </>
  )
}
