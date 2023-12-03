import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import "./index1.css";
//import App from "./App";
import App from "./App1";


// ReactDOM.render(<App/>,document.getElementById("root"));
// ReactDOM.render(<App/>,document.getElementById("root1"));
const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);