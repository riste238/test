import React from 'react';
import axios from 'axios';
import './App.css';
import Missions from './pages/Missions';
import Home from './pages/Home';
import Navigation from './Navigation/Navigation';
import {Routes,Route} from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mission" element={<Missions/>}/>
        </Routes>
    </div>
  );
}

export default App;
