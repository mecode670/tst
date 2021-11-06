import React from 'react'
import Navbar from './components/js/model/Navbar'
import './components/css/tap-highlight.css'
import Home from './components/js/pages/Home'
import About from './components/js/pages/About.js'
import Contact from './components/js/pages/Contact'
import ContactState from './context/contactState'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FoodItem from './components/js/pages/FoodItem';

const App = () => {
    return (
        <>
        <ContactState>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <FoodItem />
                </Route>
                <Route exact path="/create/item">
                    New item </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router></ContactState>
        </>
    )
}

export default App
