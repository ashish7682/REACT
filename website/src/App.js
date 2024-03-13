import React from "react";

import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
          <Route  path="/" Component={Home}/>
          <Route  path="/about" Component={About}/>
          <Route  path="/service" Component={Service}/>
          <Route  path="/contact" Component={Contact}/>
          <Route  path="*" Component={Home}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
