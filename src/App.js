// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameStateProvider } from './contexts/GameStateContext';
import PlayerButtons from './components/PlayerButtons';
import ActivePlayerLabel from './components/ActivePlayerLabel';

function App() {
  return (
      <GameStateProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PlayerButtons />} />
            <Route path="/active-player" element={<ActivePlayerLabel />} />
          </Routes>
        </Router>
      </GameStateProvider>
  );
}

export default App;
