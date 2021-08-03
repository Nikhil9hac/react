import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {App} from "./App.jsx";
import ReactRouter from "./Routers.jsx";
ReactDOM.render(
    <BrowserRouter>
    <ReactRouter/>
    </BrowserRouter>,
    document.getElementById('root')
)