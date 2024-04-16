import React from 'react'
import '../css/Landingpage.css'
import Logo from '../assets/logo.png'
import SVG from '../assets/olas.svg'
import '../css/info.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const info = () => {
  

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

<body className='bodyn'>
  <div className='part1'>
<h1>VitalyTracker</h1>`
<div className="mover">
<p className="parrafo">Bienvenido a VitalyTracker, tu compañero confiable en el monitoreo de la salud y el bienestar. Nuestra plataforma está diseñada para brindarte un fácil acceso y control sobre los signos vitales de tus seres queridos, garantizando una atención personalizada y oportuna.</p>

<p className="parrafo">Concebida para satisfacer las necesidades de dos tipos de usuarios clave, VitalyTracker se enfoca en proporcionar una experiencia integral tanto para el administrador como para el cliente.</p>

<p className="parrafo">Para los administradores, que actúan como cuidadores y responsables del bienestar de sus seres queridos, VitalyTracker ofrece herramientas poderosas para gestionar la salud de sus clientes de manera efectiva. Desde la creación y gestión de perfiles de clientes hasta la capacidad de supervisar y registrar los signos vitales de cada uno, nuestra plataforma proporciona todas las herramientas necesarias para garantizar un cuidado personalizado y continuo.</p>

<p className="parrafo">Con la capacidad de eliminar, buscar y visualizar los datos de los clientes, los administradores tienen el control total sobre la información de salud relevante, permitiéndoles tomar decisiones informadas y brindar la atención adecuada en todo momento.</p>

<p className="parrafo">Para los clientes, VitalyTracker ofrece una experiencia intuitiva y fácil de usar para el seguimiento de sus propios signos vitales. Con acceso rápido a sus datos de salud y la capacidad de compartirlos con sus cuidadores designados, los clientes pueden estar seguros de que están siendo atendidos de manera óptima y eficiente.</p>

<p className="parrafo">Ya sea un padre de familia preocupado por la salud de sus hijos, un cuidador profesional que supervisa a múltiples clientes, o cualquier persona interesada en monitorear y mejorar su bienestar, VitalyTracker está aquí para ti. Nuestra plataforma está abierta para todos, brindando una solución integral y accesible para el cuidado de la salud de todos los seres queridos.</p>

<p className="parrafo">Únete a nosotros en VitalyTracker y toma el control de tu salud y bienestar hoy mismo.</p>

</div>

  </div>
<div className='part2'>

</div>
</body>
  </div>
</>
  )
}

export default info