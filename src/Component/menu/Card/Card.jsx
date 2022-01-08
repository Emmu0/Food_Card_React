import react from 'react';
import Navbar from '../Navbar/Navbar';
import Sdata from '../Data/sdata';


function Card(props){

    return(
    <>
    <div className='cards'>
    <div className='card'>
     <img src={props.image} alt="remdom img"/>
    <div className='card_detail'>
        <span>{props.name}</span>
        <h3>{props.price}</h3>
        <a target="" href="">
        <button>Watch here</button>
        </a>
    </div>
    </div>
    </div>
</>
    )
}

export default Card;