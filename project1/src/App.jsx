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
  

  return (
    <div class="container">
      <h1>Python Programing</h1>
      <Content title={Concepts[0].title} description={Concepts[0].description}/>
      <Content title={Concepts[1].title} description={Concepts[1].description}/>
      <Content title={Concepts[2].title} description={Concepts[2].description} level={Concepts[2].level}/>
    </div>
  )
}

export default App
