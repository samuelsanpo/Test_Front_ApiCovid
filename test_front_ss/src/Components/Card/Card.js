import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import stats from '../../stats.png';

// Desarrollado por Samuel Sanabria
function Card({Country, Slug, ISO2})  {




    return (
    
        <div className='card-container'>
            <div className='card-content'>
            <div className='card-title'>
            <h3>{Country}</h3>
            </div>
            <div >
            <img className='card-image' src={stats} />
            </div>

            <div className='container-link'>
            <Link className='link' to={{pathname: `/table/${Slug}`}}>View More</Link>
            
            </div>
           
            </div>
           
        
        
        </div>
    )
}

export default Card;