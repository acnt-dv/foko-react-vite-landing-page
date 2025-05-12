import './App.css';
import Layout from "./components/Layout";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Works from "./components/Works";
import Home from "./components/Home";
import Studio from "./components/Studio";
import Categories from "./components/Categories";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <div className="App w-full max-w-[1920px] mx-auto">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/categories" element={<Categories/>}/>
                        <Route path="/works" element={<Works/>}/>
                        <Route path="/studio" element={<Studio/>}/>
                        <Route path="/contactUs" element={<Contact/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
