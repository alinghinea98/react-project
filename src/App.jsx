import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';

function App() {
    const [activePlayer, setActivePLayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setActivePLayer((currActivePlayer) => currActivePlayer === 'X' ? '0' : 'X');
        setGameTurns(prevState => {
            let currentPlayer = 'X';
            if (!!prevState.length && prevState[0].player === 'X') {
                currentPlayer = '0';
            }
            return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevState];
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Player 2" symbol="0" isActive={activePlayer === '0'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}

export default App
