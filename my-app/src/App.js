import React from "react"
import Nav from "./Nav"
import Header from "./Header";
import {Route,Routes } from "react-router-dom";


function App() {
  return (
    < >
     <Header/>
     <Nav/>
     <Routes>
      <Route path="/" element={<Sign_in/>} />
     </Routes>
     <div><h1>Hello world</h1></div>
     <main/>
     <footer/>
    </>
  );
}

export default App;
