import './App.css';
import Layout from "./components/Layout";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Works from "./components/Works";
import Home from "./components/Home";
import Studio from "./components/Studio";
import Categories from "./components/Categories";
import Contact from "./components/ContactUsPage";
import Login from "./components/Login";
import {AnimatePresence} from "framer-motion";

const AUTH_COOKIE = 'auth_token';
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return undefined;
};
const setCookie = (name, val, {hours} = {}) => {
    let attrs = `path=/; SameSite=Lax`;
    if (location.protocol === 'https:') attrs += `; Secure`;
    if (typeof hours === 'number') {
        const maxAge = Math.max(0, Math.floor(hours * 60 * 60)); // interpret as hours
        attrs += `; Max-Age=${maxAge}`;
    }
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(val)}; ${attrs}`;
};
const deleteCookie = (name) => {
    document.cookie = `${encodeURIComponent(name)}=; Max-Age=0; path=/; SameSite=Lax` + (location.protocol === 'https:' ? '; Secure' : '');
};

function App() {
    // initialize from cookie to avoid flicker on refresh
    const [loggedIn, setLoggedIn] = useState(() => Boolean(getCookie(AUTH_COOKIE)));

    // keep state in sync if cookie changes from elsewhere (rare)
    useEffect(() => {
        const isAuth = Boolean(getCookie(AUTH_COOKIE));
        if (isAuth !== loggedIn) setLoggedIn(isAuth);
        // no interval to keep it light; routes re-evaluate on navigation
        // You can add a visibilitychange listener if needed later
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // wrap the setter so Login can call setLoggedIn(true/false[, options])
    const setLoggedInWithCookie = (value, options = {}) => {
        if (value) {
            // if options.hours provided -> persistent; otherwise session cookie (expires on browser close)
            if (typeof options.hours === 'number') {
                setCookie(AUTH_COOKIE, 'loggedIn', {hours: options.hours});
            } else {
                setCookie(AUTH_COOKIE, 'loggedIn'); // session cookie
            }
        } else {
            deleteCookie(AUTH_COOKIE);
        }
        setLoggedIn(Boolean(value));
    };

    return (
        <Router>
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes>
                        {!loggedIn ? (
                            <Route
                                path="*"
                                element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedInWithCookie}/>}
                            />
                        ) : (
                            <Route path="/" element={<Layout/>}>
                                <Route index element={<Home/>}/>
                                <Route path="/categories" element={<Categories/>}/>
                                <Route path="/works" element={<Works/>}/>
                                <Route path="/studio" element={<Studio/>}/>
                                <Route path="/contactUs" element={<Contact/>}/>
                                <Route path="*" element={<Navigate to="/" replace/>}/>
                            </Route>
                        )}
                    </Routes>
                </AnimatePresence>
            </div>
        </Router>
    );
}

export default App;
