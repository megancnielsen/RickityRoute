import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import WelcomeComp from './components/home';
import NumberComp from './components/num4';
import ColorComp from './components/colorword';

function App() {
  return (
    <div className="App">
      <Router>
        <WelcomeComp path="/home" />
        <NumberComp path="/:num" />
        <ColorComp path="/:word/:colorW/:colorBG" />
      </Router>
    </div>
  );
}

export default App;