import { useEffect, useState } from "react";
import "./styles-tic.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}
export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  function handleRestart() {
    setIsXturn(true);
    setSquares(Array(9).fill(""));
  }

  function getWinner(squares) {
    const winningPattern = [
      [0, 1, 2],

      [3, 4, 5],
      [6, 7, 8],

      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (squares[x] && squares[x] === squares[y] && squares[x] == squares[z]) {
        return squares[x];
      }
    }

    return null;
  }

  function handleOnclick(currentSquare) {
    let copyOfSquares = [...squares];

    if (getWinner(copyOfSquares) || copyOfSquares[currentSquare]) return;

    copyOfSquares[currentSquare] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);

    setSquares(copyOfSquares);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! Please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)} Please restart the game`);
    } else {
      setStatus(`Next player is:${isXturn ? "X" : "O"}`);
    }
  }, [squares, isXturn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleOnclick(0)} />
        <Square value={squares[1]} onClick={() => handleOnclick(1)} />
        <Square value={squares[2]} onClick={() => handleOnclick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleOnclick(3)} />
        <Square value={squares[4]} onClick={() => handleOnclick(4)} />
        <Square value={squares[5]} onClick={() => handleOnclick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleOnclick(6)} />
        <Square value={squares[7]} onClick={() => handleOnclick(7)} />
        <Square value={squares[8]} onClick={() => handleOnclick(8)} />
      </div>
      <h1>{status}</h1>
      <button className="button" onClick={handleRestart}>
        RESTART
      </button>
    </div>
  );
}
