import React from 'react'
import '../css/landiPage.css'
import Logo from '../assets/logo.png'
import SVG from '../assets/olas.svg'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const contact = () => {
  

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

<div className='bodyn'>
  <div className='part1'>

</div>
</div>
  </div>
</>
  )
}

export default contact
