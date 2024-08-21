import React from 'react';
import Contact from "./Contact.jsx"
import ToolBranch from './ToolBranch.jsx';
import { pathGameEngine, pathUnity, pathPython } from "../constants.jsx"
import '../style.css'

import { Routes, Route } from "react-router-dom"

export default function App() {

    return (
        <div>
            <Routes>
                <Route path="/" exact element={
                    <ToolBranch path={pathGameEngine}/>
                }/>
                <Route path="/python" exact element={
                    <ToolBranch path={pathPython}/>
                } />
                <Route path="/unity" exact element={
                    <ToolBranch path={pathUnity}/>
                } />
            </Routes>

            {/* <Contact /> */}
        </div>
    )
}