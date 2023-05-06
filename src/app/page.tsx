'use client';

import Image from "next/image";
import { useState } from "react";

interface SquareType {
  value: string | number | any;
}

function Square() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
     <button  className="square">{squares}</button>

  )
}

export default function Home() {
  return (
    <>
      <div className="text-center mt-44 bg-stone-200 ">
        <h1 className="animate-pulse font-bold text-5xl text-cyan-500 p-10 hover:scale-150">
          Phir Se Khelo!
        </h1>
      </div>
      <div className="ml-5 mt-5">
      <div className="table-row-group">
        <Square />
        <Square />
        <Square />
        </div>
        <div className="table-row-group">

        <Square />
        <Square />
        <Square />
        </div>
        <div className="table-row-group">

        <Square />
        <Square />
        <Square />
        </div>
      </div>
    </>
  );
}
