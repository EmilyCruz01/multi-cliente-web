import React from 'react';
import '../css/landiPage.css';
import Doctores from '../assets/doctor.png';
import Logo from '../assets/logo.png';
import SVG from '../assets/olas.svg';
import { Link } from 'react-router-dom';

const LandinPage = () => {
  return (
    <>
      <div className='corpdo-dexdeus'>
        <img className='olas' src={SVG} alt="" />
        <header className='nav-landing'>
          <img  src={Logo} alt="" />
          <Link className='bt-landinpage' to="/about">About</Link>
          <Link className='bt-landinpage' to="/contact">Contact Us</Link>
          <Link className='bt-landinpage' to="/info">Info</Link>
          <Link className='bt-landinpage' to="/login">Login</Link>
        </header>
      </div>
      <div className='corpdo-dexdeus'>
        <div  className='bodyn'>
          <div className='part1'>
            <h1>Somos tu mejor opción</h1>
            <h3>En VitalyTracker tratamos a nuestros pacientes como se merecen.</h3>
            <button className='bt-landinpage'>Descubre más aquí</button>
          </div>
          <div className='part2'>
            <img src={Doctores} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandinPage;