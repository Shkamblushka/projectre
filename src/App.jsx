import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json'

function App() {
  
  return (
    <>
      <div>
        <h1 className='not_sus_website'>Not sus website</h1>
        <a href={data.video_link} target="_blank">
          <button style={{ width: "200px", height: "100px",}}>Bebebebe, bebebe, bebebebe</button>
        </a>
      </div>
    </>
  )
}

export default App
