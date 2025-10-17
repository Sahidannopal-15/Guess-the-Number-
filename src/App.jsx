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
       <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-7xl mx-auto items-center ">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 lg:col-span-1">
          <h3 className="text-xl font-bold mb-3 text-indigo-700 border-b pb-2">1. Paragraf Default (Kurang Rapi)</h3>
          <p className="text-base text-gray-700">
⚙️ Mekanisme Permainan Utama
Permainan Tebak Angka memiliki alur yang sangat mudah dipahami, menjadikannya ideal untuk segala usia dan platform : <br />
Penentuan Angka Rahasia: Komputer (atau sistem) secara acak memilih satu angka bulat dalam rentang yang telah ditentukan antara 1 dan 100. Angka ini disembunyikan dari pemain. <br />
Input Pemain: Pemain memasukkan tebakan mereka. <br />
Umpan Balik : Setelah pemain memasukkan angka, sistem akan memberikan petunjuk apakah angka tebakan mereka terlalu Tinggi atau terlalu Rendah dari angka rahasia.
    </p>
      </div>
        </div>
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