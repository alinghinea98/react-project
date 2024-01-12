import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

export const WINNING_COMBINATIONS = [
    [
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 0, column: 2 },
    ],
    [
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
    ],
    [
        { row: 2, column: 0 },
        { row: 2, column: 1 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 2, column: 0 },
    ],
    [
        { row: 0, column: 1 },
        { row: 1, column: 1 },
        { row: 2, column: 1 },
    ],
    [
        { row: 0, column: 2 },
        { row: 1, column: 2 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 0 },
        { row: 1, column: 1 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 2 },
        { row: 1, column: 1 },
        { row: 2, column: 0 },
    ],
];

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (!!gameTurns.length && gameTurns[0].player === 'X') {
        currentPlayer = '0';
    }
    return currentPlayer;
}

function App() {
    // const [activePlayer, setActivePLayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    let winner = null;
    let gameBoard = initialGameBoard;
    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquare = gameBoard[combination[0].row][combination[0].column];
        const secondSquare = gameBoard[combination[1].row][combination[1].column];
        const thirdSquare = gameBoard[combination[2].row][combination[2].column];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            winner = firstSquare;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePLayer((currActivePlayer) => currActivePlayer === 'X' ? '0' : 'X');
        setGameTurns(prevState => {
            const currentPlayer = deriveActivePlayer(prevState);
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
                {(winner || hasDraw) && <GameOver winner={winner}/>}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}

export default App
