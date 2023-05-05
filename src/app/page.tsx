import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='text-center mt-44 bg-stone-900 '> 
      <h1 className='animate-pulse font-bold text-5xl text-yellow-500 p-10 hover:scale-150'>
        USTAAD IDHAR KIDHAR
      </h1>
    </div>
    <div className='ml-5 mt-5'>
    <div className='table-row-group'>
      <button className='square'>1</button>
      <button className='square'>2</button>
      <button className='square'>3</button>
      </div>
      <div className='table-row-group'>
      <button className='square'>4</button>
      <button className='square'>5</button>
      <button className='square'>6</button>
      </div>
      <div className='table-row-group'>
      <button className='square'>7</button>
      <button className='square'>8</button>
      <button className='square'>9</button>
      </div>
    </div>

    </>
  )
}
