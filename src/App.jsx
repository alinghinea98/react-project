import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';

function App() {
    const [activePlayer, setActivePLayer] = useState('X');

    function handleSelectSquare() {
        setActivePLayer((currActivePlayer) => currActivePlayer === 'X' ? '0' : 'X');
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Player 2" symbol="0" isActive={activePlayer === '0'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
            </div>
            LOG
        </main>
    )
}

export default App
