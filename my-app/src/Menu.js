import accueil from './img/accueil.png';
import services from './img/services.png';
import agenda from './img/agenda.png';
import contact from './img/contact.png';
import menu from './img/menu.png';
import turnOff from './img/turnoff.png';
import logo from './img/logo.png';
import './App.css';
import React from 'react';

function Menu() {
    return (
      <body>
      <div className="App">
        <header className="App-header">
          <div className='logo-droite'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Services
          </p>
          </div>
          <img src={turnOff} className="App-logo-off" alt="logo-off" />
        </header> 
      </div>
      <footer className='Nav'>
        <div className='logo-text'>
          <img src={accueil} className='img-footer'/>
          <p className='text-footer'>Accueil</p>
        </div>
  
        <div className='logo-text'>
          <img src={services} className='img-footer'/>
          <p className='text-footer'>Services</p>
        </div>
  
        <div className='logo-text'>
          <img src={agenda} className='img-footer'/>
          <p className='text-footer'>Agenda</p>
        </div>
  
        <div className='logo-text'>
          <img src={contact} className='img-footer'/>
          <p className='text-footer'>Contact</p>
        </div>
  
        <div className='logo-text'>
          <img src={menu} className='img-footer'/>
          <p className='text-footer'>Menu</p>
        </div>
      </footer>
     </body>
    );
  }
  
  export default Menu;
  