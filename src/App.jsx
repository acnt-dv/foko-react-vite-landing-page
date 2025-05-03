import './App.css';
import Layout from "./components/Layout";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./components/Works";
import Home from "./components/Home";
import Studio from "./components/Studio";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    return (
        <Router>
            <div className="App">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        className="relative"
                        initial={{ opacity: 1, backgroundColor: "#000" }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 1, backgroundColor: "#000" }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 50,
                            pointerEvents: "none"
                        }}
                    />
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/works" element={<Works />} />
                            <Route path="/studio" element={<Studio />} />
                            <Route path="/contactUs" element={<Contact />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </div>
        </Router>
    );
}

export default App;
