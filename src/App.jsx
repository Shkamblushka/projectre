import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json'
import Popup from 'reactjs-popup'


function MyPopup() {
  return (
    <Popup trigger={<button className='secButton' style={{ width: "200px", height: "100px",}}>Trigger</button>} position="right center">
       <input type="text" placeholder="Your nick name"/>
       <br />
       <input type='email' placeholder="Your email" />
       <br />
       <input type='text' placeholder="Your message" />
       <br />
       <button className='submitButton' style={{ width: "150px", height: "33px",}}><span className='submitButton'>Submit</span></button>
    </Popup>
  );
}


function App() {
  ///const timesrolled = 0;


  /// other website part
  const [timesrolled, setCount] = useState(0)
  const whererolled = false;
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
        <a href={data.video_link} target="_blank">
          <button onClick={() => setCount((timesrolled) => timesrolled + 1)} style={{ width: "200px", height: "100px",}}>Bebebebe, bebebe, bebebebe</button>
        </a>
        <MyPopup></MyPopup>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
