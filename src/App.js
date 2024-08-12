import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MenuBar from './components/MenuBar';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Banner />
                <MenuBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;



