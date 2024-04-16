import React, { useState } from 'react';
import '../css/Login.css';
import Logo from '../assets/logo.png';
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username,
        password,
      });
  
      if (response.data.success === 1) {
        console.log(response.data);
        window.location.href = '/principal';
      } else {
        console.error('Error al iniciar sesión:', response.data.data);
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde');
    }
  };
  
  

  return (
    <body className="body-login">
      <aside className="aside-azul">
        <img src={Logo} alt="" />
      </aside>
      <section className="section-form">
        <div className="login">
          <h1>Bienvenido Cliente</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingrese su usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button-login" type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </section>
    </body>
  );
};

export default Login;