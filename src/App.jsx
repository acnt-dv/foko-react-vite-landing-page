import './App.css';
import Layout from "./components/Layout";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Works from "./components/Works";
import Home from "./components/Home";
import Studio from "./components/Studio";
import Categories from "./components/Categories";
import Contact from "./components/ContactUsPage";
import Login from "./components/Login";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes>
                        {!loggedIn ? (
                            <Route path="*" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                        ) : (
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route path="/categories" element={<Categories />} />
                                <Route path="/works" element={<Works />} />
                                <Route path="/studio" element={<Studio />} />
                                <Route path="/contactUs" element={<Contact />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Route>
                        )}
                    </Routes>
                </AnimatePresence>
            </div>
        </Router>
    );
}

export default App;
