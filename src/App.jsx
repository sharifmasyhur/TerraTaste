import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
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