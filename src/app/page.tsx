'use client';

import Image from "next/image";
import { useState } from "react";

interface SquareType {
  value: string | number | any;
  onSquareClick: string | number | any;
}

function Square({value, onSquareClick} : SquareType) {
    
  return (
     <button  className="square" onClick={onSquareClick}>{value}</button>

  )
}

// type Square = string | null;

export default function Home() {
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i : any) {
      const NextSquares : String | Number | any = squares.slice();
      if(xIsNext) {
        NextSquares[i] = "X";

      } else {
        NextSquares[i] = "O";
      }

      setSquares(NextSquares);
      setxIsNext(!xIsNext)
    }




  return (
    <>
      <div className="text-center mt-44 bg-yellow-600 ">
        <h1 className="animate-pulse font-bold text-5xl text-cyan-800 p-10 hover:scale-150">
          Phir Se Khelo!
        </h1>
      </div>
      <div className="ml-5 mt-5">
      <div className="table-row-group">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="table-row-group">

        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
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
