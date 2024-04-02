// src/components/ActivePlayerLabel.js
import React from 'react';
import { useGameState } from '../contexts/GameStateContext';

const ActivePlayerLabel = () => {
    const { activePlayer } = useGameState();

    return (
        <div>
            <h2>Active Player</h2>
            <p>Player {activePlayer} is currently active.</p>
        </div>
    );
};

export default ActivePlayerLabel;
