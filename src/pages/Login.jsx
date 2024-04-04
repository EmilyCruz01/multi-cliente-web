import React from 'react'
import '../css/Login.css'
import Logo from "../assets/logo.png"


const Login = () => {
  return (
    <body className='body-login'>
      <aside className='aside-azul'>
    <img src={Logo} alt="" />
      </aside>
      <section className='section-form'>
<div className='login'>
  <h1 >Bienvenido Cliente</h1>
  <form className="login-form">
        <div className="input-group">
     
          <input type="text" id="username" name="username" placeholder="Ingrese su usuario" />
        </div>
        <div className="input-group">
        
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
        </div>
        <button className='button-login' type="submit">Ingresar</button>
      </form>
  
</div>
      </section>
    </body>
  )
}

export default Login