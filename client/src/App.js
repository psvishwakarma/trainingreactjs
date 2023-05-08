import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import About from "./components/About";
import Login from "./components/Login";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/about" element={<About />}> </Route>
                <Route path="/Login" element={<Login />}> </Route>
            </Routes>
        </div>
    )




}
export default App;