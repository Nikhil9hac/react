// import React from 'react';
// import {Fname,Lname} from "./App.jsx"

// export  const Comc = () => {
//     return (
//         <Fname.Consumer>
//             {(fname)=>{
//                 return(
//                     <Lname.Consumer>
//                         {(lname)=>{
//                             return(
//                                 <h1>My Name is {fname} {lname} </h1>
//                             )
//                         }}
//                     </Lname.Consumer>
//                 )
//             }}
//         </Fname.Consumer>
//     )
// }

import React, { useContext } from 'react'
import {fname,lname} from "./App.jsx"
export const Comc = () => {
    const FirstName=useContext(fname)
    const LastName=useContext(lname)
    return (
        <>
        <h1>My name is {FirstName} {LastName}</h1>
        </>
    )
}

