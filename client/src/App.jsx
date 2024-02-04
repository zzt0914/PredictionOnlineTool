import React, {useState} from 'react'
import Navigation from './components/navigation';
// import peptideExample from './peptideExample.html'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  Tool  from "./pages/Tool.jsx" 
import Home from "./pages/Home.jsx"
import Test from "./pages/test.jsx"
import PeptideExample from "./pages/peptideExample.jsx"
import FastaExample from "./pages/fastaExample.jsx"
function App() {
  return (
    <>
   
     <Router>
     <Navigation/>
        <Routes>
      <Route path="/tool" element={<Tool/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/peptideExample" element={<PeptideExample/>}/>
      <Route path="/fastaExample" element={<FastaExample/>}></Route>
    </Routes>
    
    </Router>
    </>
   
  
   
    
    
  )

}

export default App
