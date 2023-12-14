import { useState } from 'react';

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName ?? '');
    const [isEditing, setIsEditing] = useState(false);
    // when you update the state based on the previous state YOU SHOULD PASS A FUNCTION to update the state immediately
    function handleEditButton() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? (<input placeholder="Insert name" required onChange={handleChange} value={playerName}/>) : (<span className="player-name">{playerName}</span>)}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
