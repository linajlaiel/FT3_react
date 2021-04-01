
import React from 'react';
import accueil from './img/accueil.png';
import services from './img/services.png';
import agenda from './img/agenda.png';
import contact from './img/contact.png';
import menu from './img/menu.png';
import './Nav.css';

function Nav() {
    return (
      
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
      
    )
  }
  
  export default Nav;