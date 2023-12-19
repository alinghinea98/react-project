export default function Log({turns}) {
    if (!turns.length) return <ol id="log">
        No moves yet
    </ol>;
    return <ol id="log">
        {turns.map((turn) => <li key={turn.square.row + turn.square.col}>{turn.player} choose value {turn.square.row}, {turn.square.col}</li>)}
    </ol>
}
