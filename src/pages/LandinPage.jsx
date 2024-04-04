import React from 'react'
import '../css/Landingpage.css'
import Doctores from '../assets/doctor.png'
import Logo from '../assets/logo.png'
import SVG from '../assets/olas.svg'
import { useNavigate } from "react-router-dom";

const LandinPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
 
    navigate('/login');
  };

  return (
<>
<div className='corpdo-dexdeus'>
  <img className='olas' src={SVG} alt="" />

<header className='nav-landing'>
<img  src={Logo} alt="" />
<button className='bt-landinpage'>
  about
</button>
<button className='bt-landinpage'>
  contact us
</button>
<button className='bt-landinpage'>
  info
</button>
<button className='bt-landinpage' onClick={handleButtonClick} >
  login
</button>
</header>
</div>
  <div className='corpdo-dexdeus'>

<body className='bodyn'>
  <div className='part1'>
<h1>Somos tu mejor opcion</h1>
<h3>En VitalyTracker tratamos a nuestros pacientes como se merecen.</h3>
<button className='bt-landinpage'>Descubre mas aqui</button>
  </div>
<div className='part2'>

  <img  src={Doctores} alt="" />
</div>
</body>
  </div>
</>
  )
}

export default LandinPage