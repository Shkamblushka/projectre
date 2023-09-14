import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json'
import Popup from 'reactjs-popup'





function App() {
  const savedData = localStorage.getItem('userData');
  const [timesrolled, setCount] = useState(0)
  const whererolled = false;

  //localStorage.setItem("userData", JSON.stringify(timesrolled));


  let rolltext;
  if (whererolled) {
    rolltext = <h2>true</h2>
  } else {
    rolltext = <h2>- {timesrolled} -</h2>
  }
  return (
    <>
      <div>
        <h1 className='not_sus_website'>Not sus website</h1>
        {rolltext}
        <a>
          <button onClick={() => setCount((timesrolled) => timesrolled + 1)} style={{ width: "200px", height: "100px",}}>Bebebebe, bebebe, bebebebe</button>
        </a>
        <text>{savedData}</text>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
