import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Concepts } from './Content.jsx';

const Content = (props) => {
  return(
      <div class="component1">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>{props.level}</p>
      </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Python Programing</h1>
      <ul>
        <Content title={Concepts[0].title} description={Concepts[0].description}/>
        <Content title={Concepts[1].title} description={Concepts[1].description}/>
        <Content title={Concepts[2].title} description={Concepts[2].description} level={Concepts[2].level}/>
      </ul>
    </>
  )
}

export default App
