// src/components/PlayerButtons.js
import React from 'react';
import { useGameState } from '../contexts/GameStateContext';

const PlayerButtons = () => {
    const { setActivePlayer } = useGameState();

    return (
        <div>
            <h2>Select Active Player</h2>
            {[1, 2, 3, 4, 5, 6].map((player) => (
                <button key={player} onClick={() => setActivePlayer(player)}>
                    Player {player}
                </button>
            ))}
        </div>
    );
};

export default PlayerButtons;
