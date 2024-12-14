import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Background from "./components/background/Background"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import './App.css'

function App() {
  let heroData = [
    {text1:"One step",text2:"to make a big difference."},
    {text1:"Don't waste",text2:"the potential."},
    {text1:"Give charity",text2:"for clarity."},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
