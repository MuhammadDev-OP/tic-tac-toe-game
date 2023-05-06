'use client';

import Image from "next/image";
import { useState } from "react";

interface SquareType {
  value: string | number | any;
}

function Square({value} : SquareType) {

 
  return (
     <button  className="square">{value}</button>

  )
}

export default function Home() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="text-center mt-44 bg-stone-200 ">
        <h1 className="animate-pulse font-bold text-5xl text-cyan-500 p-10 hover:scale-150">
          Phir Se Khelo!
        </h1>
      </div>
      <div className="ml-5 mt-5">
      <div className="table-row-group">
        <Square value={squares['1']} />
        <Square value={squares['2']} />
        <Square value={squares['3']} />
        </div>
        <div className="table-row-group">

        <Square value={squares['4']} />
        <Square value={squares['5']} />
        <Square value={squares['6']} />
        </div>
        <div className="table-row-group">

        <Square value={squares['7']} />
        <Square value={squares['8']} />
        <Square value={squares['9']} />
        </div>
      </div>
    </>
  );
}
