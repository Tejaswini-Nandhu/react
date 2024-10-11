import reactimage from '../assets/react-core-concepts.png';
import './Header.css';
const reactDescription = ["Fundamental","Crucial","Core"];
function getRandomInt(max){
  console.log("getRandomInt() called with max:", max);
  const result = Math.floor(Math.random()*(max+1));
  console.log("getRandomInt() returned:", result);
  return result;
}

export function Header(){
    const choices = reactDescription[getRandomInt(2)];
    return(
      <header>
          <img src={reactimage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {choices} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }

