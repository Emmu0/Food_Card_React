import React from 'react';
import { Link } from "react-router-dom";


function content() {
 
    return (
        <div>
         <div className='Content'>
         <p>welcome to food's  kitchen</p>
         <button><Link to="/menu">
             Go to menu
         </Link></button>
         </div>
        
        </div>
    )
}

export default content
