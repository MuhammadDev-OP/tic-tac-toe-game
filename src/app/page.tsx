"use client";

import Image from "next/image";
import { useState } from "react";

interface SquareType {
  value: string | number | any;
  onSquareClick: string | number | any;
}

interface HomeType {
  xIsNext: string | number | any;
  squares: string | number | any;
  onPlay: string | number | any;
}

function Square({ value, onSquareClick }: SquareType) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// type Square = string | null;

function Home({ xIsNext, squares, onPlay }: HomeType) {
  function handleClick(i: any) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const NextSquares: String | Number | any = squares.slice();
    if (xIsNext) {
      NextSquares[i] = "X";
    } else {
      NextSquares[i] = "O";
    }
    onPlay(NextSquares);

    // setSquares(NextSquares);
    // setxIsNext(!xIsNext);
  }
  const Winner = calculateWinner(squares);
  let status;

  if (Winner) {
    status = "Winner: " + Winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="text-center mt-44 bg-yellow-600 ">
        <h1 className="animate-pulse font-bold text-5xl text-cyan-800 p-10 hover:scale-150">
          Phir Se Khelo!
        </h1>
      </div>
      <div className="status">{status}</div>
      <div className="ml-5 mt-5">
        <div className="table-row-group">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="table-row-group">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="table-row-group">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(NextSquares: any) {
    setHistory([...history, NextSquares]);
    setxIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Home xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
