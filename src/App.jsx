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
    <main className='flex flex-col items-center mt-20'>
      <header className=''>
        Guessing the Number
      </header>
      <section className=''>
        <input type="number" 
                placeholder='Masukan Angka'
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className=''
        />
        <button 
        onClick={tebakAngka}
        className='bg-purple-800'>
          submit
        </button>
      <article>
        <p>{result}</p>
      </article>
      </section>
    </main>
  )
}

export default App