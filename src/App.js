import React from 'react'
import NavBar from './components/navbar'
import Home from './components/home'
import Contact from './components/contact'
import Maps from './components/maps'
import Picture from './components/picture'
import Skills from './components/skills'
import FirstSection from './components/section/firstsection'
import SecondSection from './components/section/secondsection'
import ThirdSection from './components/section/thirdsection'
import LastSection from './components/section/lastsection'
import './index.css'
const App = () => {
  return(
    <div>
      <NavBar/>
      <Home/>
      <FirstSection/>
      <Skills/>
      <SecondSection/>
      <Picture/>
      <ThirdSection/>
      <Maps/>
      <Contact/>
      <LastSection/>
    </div>
  )
}

export default App;

