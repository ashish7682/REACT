import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/Home.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);


// root.render(
//   <>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </>
  // document.getElementById("root")
// );
