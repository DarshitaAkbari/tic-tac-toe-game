import React, { useState } from "react";
import "./tictactoe.css";

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");
  const [winner, setWinner] = useState();
  const click = (index) => {
    if (board[index] !== "") {
      alert("Already clicked");
      return;
    }
    let square = [...board];
    square[index] = move;
    setBoard(square);
    console.log("click hey!!!", index);
    if (move === "X") {
      setMove("0");
    } else {
      setMove("X");
    }
    if (checkWin(square)) {
      setWinner(move);
    }
  };
  const checkWin = (board) => {
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < condition.length; i++) {
      const [a, b, c] = condition[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setMove("X");
    setWinner(undefined);
  };

  return (
    <>
      <h1 className="text-center my-5">TIC TAC TOE</h1>
      <table>
        <tbody>
          <tr>
            <td
              onClick={() => {
                click(0);
              }}
            >
              {board[0]}
            </td>
            <td
              onClick={() => {
                click(1);
              }}
            >
              {board[1]}
            </td>
            <td
              onClick={() => {
                click(2);
              }}
            >
              {board[2]}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                click(3);
              }}
            >
              {board[3]}
            </td>
            <td
              onClick={() => {
                click(4);
              }}
            >
              {board[4]}
            </td>
            <td
              onClick={() => {
                click(5);
              }}
            >
              {board[5]}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                click(6);
              }}
            >
              {board[6]}
            </td>
            <td
              onClick={() => {
                click(7);
              }}
            >
              {board[7]}
            </td>
            <td
              onClick={() => {
                click(8);
              }}
            >
              {board[8]}
            </td>
          </tr>
        </tbody>
      </table>
      {winner && (
        <div className="text-center mt-3">
          <h3>Winner: {winner}</h3>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
    </>
  );
};

export default Tictactoe;
