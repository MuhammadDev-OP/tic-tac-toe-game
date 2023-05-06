'use client';

import Image from "next/image";

interface SquareType {
  value: string | number | any;
}

function Square({value} : SquareType) {

  function handleClick() {
    console.log('Clicked')
  }

  return (
     <button onClick={handleClick} className="square">{value}</button>

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
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
        </div>
        <div className="table-row-group">

        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
        </div>
        <div className="table-row-group">

        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
        </div>
      </div>
    </>
  );
}
