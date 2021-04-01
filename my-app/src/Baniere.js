
import './Baniere.css';
import React from 'react';
import Baniere2 from './img/baniere2.png';
import video from './img/video.png';
import Demo from './Selecteurs/Selecteur1';
import Demo2 from './Selecteurs/Selecteur2';
import Demo3 from './Selecteurs/Selecteur3';
import Demo4 from './Selecteurs/Selecteur4';
import {Link} from 'react-router-dom';


function Ban() {
    return (
        <body>
            <div className='corps'>
                <strong><p className='text-baniere'>Prenez un rendez-vous</p></strong>
                <img src={Baniere2}  className='baniere'/>

                <div className='selection'>
                    <div class='cote-droit'>
                        <p className='titre'>Business Development</p>
                        <Demo />
                        <Demo2 />
                        <Demo3 />
                        <Demo4 />



                    </div>
                    
                        <button className='bouton-confirmer'>
                            <Link className="lien" to='/Calendar'>
                                Confirmer
                            </Link>
                        </button>

                </div>

                <p className='description'>Se fixer objectifs sociaux et environnementaux clairs est primordial pour le bon développement d’une entreprise à impact. Le Crédit du Nord s’engage à vous accompagner dans tous vos projets avec les mentors les mieux adaptées à vos besoins.</p>
                <img src={video} className='video'/>
                
            </div>
        </body>
        
    );
  }
  
  export default Ban;
