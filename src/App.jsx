import React from 'react'
import { useState } from "react";

function App(){
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() *100) + 1) ;
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

function tebakAngka(){
  if(guess < randomNumber){
    setResult("Terlalu Kecil, Pak!");
  }else if(guess > randomNumber){
    setResult("Kegedean, Pak!");
  }else{
    setResult("Bener, King!");
  }
} 
  return (
    <main className='flex flex-col items-center min-h-screen bg-black text-white gap-8 pt-8'>
      <header className='text-2xl font-bold'>
        Guessing the Number
      </header>
      <section className='flex flex-col items-center'>
        <input type="number" 
                placeholder='Masukan Angka'
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className='mb-3 p-2 rounded-2xl bg-cyan-50 text-black hover:bg-gray-300 font-semibold'
        />
        <button 
        onClick={tebakAngka}
        className='bg-purple-500 px-4 py-2 rounded-2xl hover:bg-purple-400'>
          submit
        </button>
      </section>
      <article>
        <p>{result}</p>
      </article>
    </main>
  )
}

export default App