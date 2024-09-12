import React from 'react'
import ToolBranch from './ToolBranch.jsx'
import { pathGameEngine, pathUnity, pathPython } from "../constants.jsx"
import { useLocation } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import '../style.css'
// import { Contact } from "./Contact.jsx"

export default function App() {

    const location = useLocation()

    return (
        <>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={
                    <ToolBranch path={pathGameEngine}/>
                }/>
                <Route path="/python" exact element={
                    <ToolBranch path={pathPython}/>
                } />
                <Route path="/unity" exact element={
                    <ToolBranch path={pathUnity}/>
                } />
                {/* <Route path="/contact" exact element={
                    <Contact />
                } /> */}
            </Routes>
        </AnimatePresence>
        </>
    )
}