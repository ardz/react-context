// src/contexts/GameStateContext.js
import React, { createContext, useContext, useState } from 'react';

const GameStateContext = createContext();

export const useGameState = () => useContext(GameStateContext);

export const GameStateProvider = ({ children }) => {
    const [activePlayer, setActivePlayer] = useState(0);

    return (
        <GameStateContext.Provider value={{ activePlayer, setActivePlayer }}>
            {children}
        </GameStateContext.Provider>
    );
};
