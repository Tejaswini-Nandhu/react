import { React } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className='navbar'>
          <NavLink id='home-btn' exact="true" className={({ isActive }) => isActive ? "active" : ""} to="/">
            <button>Home</button>
          </NavLink>
          <NavLink id='Login-btn' className={({ isActive }) => isActive ? "active" : ""} to="/login"> 
          <button>Login</button>
          </NavLink>
          <NavLink id='Register-btn' className={({ isActive }) => isActive ? "active" : ""} to="/register"> 
          <button>Register</button>
          </NavLink>
        </div>
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;