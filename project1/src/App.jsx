import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    console.log("time",time);
    console.log("state of time",isRunning);
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(()=> {
                
                setTime((prevTime) => prevTime + 1);
                console.log("setTime",setTime);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time/3600);
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div id="stopwatch">
            <h2>Welcome to StopTime...!</h2>
            <h2 id="time">{formatTime(time)}</h2>

            <div id="btn1"><button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button></div>
            <div id="btn2"><button onClick={handleReset}>Reset</button></div>
        </div>
    );
}
// setInterval(()=>{
//     setTime(time+1);
//     console.log(time);
// },1000);


export default App;