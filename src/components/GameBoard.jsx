const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, board}) {
    // let gameBoard = initialGameBoard;
    // for (const turn of turns) {
    //     const {square, player} = turn;
    //     const {row, col} = square;
    //     gameBoard[row][col] = player;
    // }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    //
    // function handleSelectSquare(rowIndex, colIndex) {
    //     // we are not updating the previous state because if it's an object, we will change its reference
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, index) => <li key={index}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => onSelectSquare(index, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}
