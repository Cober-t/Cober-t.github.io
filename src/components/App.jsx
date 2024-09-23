import React from 'react'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import '../style.css'
import Header from "./Header/Header.jsx"
import Home from "./Home.jsx"
import Contact from "./Contact.jsx"
import Experience from "./Experience/Experience.jsx"
import Projects from "./Projects/Projects.jsx"

export default function App() {

    const location = useLocation()

    return (
        <>
        <AnimatePresence mode="wait">

            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={
                    <>
			        <Header />
                    <Home />
                    </>
                }/>
                <Route path="/experience" exact element={
                    <>
                    <Header />
                    <Experience/>
                    </>
                } />
                <Route path="/projects" exact element={
                    <>
                    <Header />
                    <Projects/>
                    </>
                } />
                <Route path="/contact" exact element={
                    <>
			        <Header />
                    <Contact/>
                    </>
                } />
            </Routes>
        </AnimatePresence>
        </>
    )
}