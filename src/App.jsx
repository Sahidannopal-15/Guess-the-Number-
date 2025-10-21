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
  setHint('');
  setHistory([]);
}
  return (
    <main className='flex flex-col md:flex-row h-screen md:bg-gradient-to-r from-black via-gray-900 to-black text-white'>
      <section className='flex-1 flex flex-col items-center mt-8 gap-4'>
        <p className='text-xl md:text-2xl font-extrabold tracking-wide'>🎯 Tebak Angka 1-100</p>
        <input type="number" 
                placeholder='Masukan Angka'
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className='text-sm md:text-base mb-3 p-2 rounded-2xl bg-cyan-50 text-black hover:bg-gray-300 font-semibold'
        />
        <button 
        onClick={tebakAngka}
        className='bg-purple-500 px-4 py-2 rounded-2xl hover:bg-purple-400 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md shadow-purple-700/40'>
          Tebak
        </button>
        <button 
        onClick={reset}
        className='bg-purple-500 px-4 py-2 rounded-2xl hover:bg-purple-400 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md shadow-purple-700/40'
        >
          Reset
        </button>
          <p className='font-bold tracking-wide text-lg md:text-xl text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]'>
            {result}</p>
          <footer className='mt-24 md:mt-28 py-3 border-t border-white/10 text-sm italic hover:text-red-500 transition-colors duration-300 tracking-widest'>
            💻 dibuat oleh sahidannopal15
          </footer>
      </section>  
      <div className='flex flex-col bg-gradient-to-b from-red-900 to-rose-800 w-full md:w-[43%] h-full overflow-y-auto'>
          <p className='text-xl md:text-2xl font-semibold mt-8 text-center'>👀 Petunjuk: {hint}</p>
        <ul>
          {history.map((item, index) => (
          <li className='font-mono pt-8 flex justify-center items-center border-b border-white/10' key={index}>
            ⌛ tebakan ke {index + 1} : {item}
          </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App