import React from 'react'//for i make react
import ReactDOM from "react-dom";// this used for render method(i.e without this the render is not working 
   //css always first import bootstrap then my style
import "./css/Bootstrap.css";
import "./css/Style.css";


import App from "./App";


ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

