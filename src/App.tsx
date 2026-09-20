// import { useState } from 'react'
import './App.css'
import Board from './Components/Board'

function App() {

  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
    <h1>Tic Tac</h1>
    <Board/>
    </div>
  )
}

export default App
