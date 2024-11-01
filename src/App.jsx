import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
function App() {

  let websiteName = "React Intro Page by Ankademin"

  return (
    <div>
      <Header website={websiteName} test="Test"/>
      <Main/>
      <Footer website={websiteName}/>
    </div>
  )
}

export default App
