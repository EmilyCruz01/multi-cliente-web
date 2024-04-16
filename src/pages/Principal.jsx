import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Landingpage.css';
import Logo from '../assets/logo.png';
import SVG from '../assets/olas.svg';
import '../css/about.css';
import axios from 'axios';

const Principal = () => {

    const [signosVitales, setSignosVitales] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/sings/');
          setSignosVitales(response.data);
        } catch (error) {
          console.error('Error al obtener los signos vitales:', error);
        }
      };
  
      fetchData();
    }, []);

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

      <h2>Signos Vitales</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Presión Arterial</th>
            <th>Frecuencia Cardiaca</th>
            <th>Temperatura Corporal</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(signosVitales) && signosVitales.map(signo => (
  <tr key={signo.ID}>
    <td>{signo.ID}</td>
    <td>{signo.pulso}</td>
    <td>{signo.oximetria}</td>
    <td>{signo.temperatura}</td>
  </tr>
))}
        </tbody>
      </table>

<div>
  
</div>

</div>
    </>
  )
}

export default Principal;