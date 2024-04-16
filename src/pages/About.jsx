import React from 'react'
import '../css/Landingpage.css'
import Logo from '../assets/logo.png'
import Olas from '../assets/olas.svg'
import '../css/about.css'
import { useNavigate } from "react-router-dom";
import Luis from '../assets/luis.jpeg'
import Azalia from '../assets/azalia.jpeg'
import { Link } from 'react-router-dom';

const About = () => {
  

  return ( 
<>
<div className='corpdo-dexdeus'>
        <img className='olas' src={Olas} alt="" />
        <header className='nav-landing'>
          <img  src={Logo} alt="" />
          <Link className='bt-landinpage' to="/about">About</Link>
          <Link className='bt-landinpage' to="/contact">Contact Us</Link>
          <Link className='bt-landinpage' to="/info">Info</Link>
          <Link className='bt-landinpage' to="/login">Login</Link>
        </header>
      </div>
  <div className='corpdo-dexdeus'>

  <div>
    <div className='separador'>



          <figure className="snip1336">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
        <figcaption>
          <img src={Luis} alt="profile-sample4" className="profile" />
          <h2>Luis Estrada<span>Frontend</span></h2>
          <p> "El que persevera alcanza" </p>
          <p> inst: doviloui </p>
      
        </figcaption>
      </figure>
      <figure className="snip1336 hover">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" alt="sample74" />
        <figcaption>
          <img src={Azalia} alt="profile-sample2" className="profile" />
          <h2>Azalia aparicio<span>Backend</span></h2>
          <p>"se esa persona que admires"</p>
          <p> inst: ruiz.iram </p>
        
        </figcaption>
      </figure>
    </div>
    </div>

  </div>
</>
  )
}

export default About