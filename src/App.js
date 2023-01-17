import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from './components/navbar';
import Home from "./containers/home"
import Login from "./containers/login"

const App=(props)=> {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
   
}

export default App;

