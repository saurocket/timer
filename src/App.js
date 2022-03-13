import './App.css';
import {useEffect, useState} from "react";
import Content from "./Content";

function App() {
const [timer, setTimer] = useState(1)

 useEffect(() => {
     const interval = setInterval(() => {
         setTimer(timer => timer + 1)
     }, 1000)

     return () => {
         clearInterval(interval)
     }
 },[timer])


  return (
    <div className="App">
        <span>{timer < 60 ? timer : Math.floor(timer/60)}</span>
        <Content content={timer} />
    </div>
  );
}

export default App;
