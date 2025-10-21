import React, { use } from 'react'
import { useState } from "react";

function App(){
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() *100) + 1);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [hint, setHint] = useState('');
  const [history, setHistory] = useState([]);
  
  function tebakAngka(){
    setHistory([...history, guess]);
    const hitungSelisih = Math.abs(guess - randomNumber);
  if(guess < randomNumber){
    setResult("Terlalu Kecil, Pak!");
  }else if(guess > randomNumber){
    setResult("Kegedean, Pak!");
  }else{
    setResult("Bener, King!");
    setHint('');
    return;
  }
  if(hitungSelisih <= 10){
     setHint ("Dikit lagi, Pak!");
  }else if(hitungSelisih <= 20){
    setHint ("Yok bisa yok!");
  }else{
    setHint ("Gilaa masih jauhhh!");
  }
} 

function reset(){
  setRandomNumber(Math.floor(Math.random()*100)+1);
  setGuess('');
  setResult('');
  setHistory([]);
}
  return (
    <main className='flex h-screen bg-black text-white'>
      <section className='flex-1 flex flex-col items-center mt-8 gap-4'>
        <p className='text-2xl font-bold'>🎯 Tebak Angka 1-100</p>
        <input type="number" 
                placeholder='Masukan Angka'
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className='mb-3 p-2 rounded-2xl bg-cyan-50 text-black hover:bg-gray-300 font-semibold'
        />
        <button 
        onClick={tebakAngka}
        className='bg-purple-500 px-4 py-2 rounded-2xl hover:bg-purple-400'>
          Tebak
        </button>
        <button 
        onClick={reset}
        className=' bg-purple-500 px-4 py-2 rounded-2xl hover:bg-purple-400'
        >
          Reset
        </button>
          <p>{result}</p>
          <footer className='mt-28'>
            Contributor
          </footer>
      </section>  
      <div className='flex flex-col bg-green-900 w-[43%] h-full overflow-y-auto'>
          <p className='font-xl font-semibold mt-8 text-center'>Petunjuk: {hint}</p>
        <ul>
          {history.map((item, index) => (
          <li className='pt-8 flex justify-center items-center' key={index}>
            tebakan ke {index + 1} : {item}
          </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App