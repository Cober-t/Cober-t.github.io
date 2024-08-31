import React from 'react';
import ToolUnity from './ToolUnity.jsx'
import ToolPython from './ToolPython.jsx'
import ToolGameEngine from './ToolGameEngine.jsx'
import { pathGameEngine, pathUnity, pathPython } from "../constants.jsx"
import '../style.css'
import { useLocation } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';

export default function App() {

    const location = useLocation()

    return (
        <>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={
                    <ToolGameEngine path={pathGameEngine}/>
                }/>
                <Route path="/python" exact element={
                    <ToolPython path={pathPython}/>
                } />
                <Route path="/unity" exact element={
                    <ToolUnity path={pathUnity}/>
                } />
            </Routes>

        </AnimatePresence>
        </>
    )
}