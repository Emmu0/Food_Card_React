import React from 'react';
import Card from '../Card/Card';
import Sdata from '../Data/sdata';
// import Navbar from '../Navbar/Navbar';


function Menuhendler() {
    return (
        <div>
             {/* <Navbar/> */}
    <Card image={Sdata[0].image}
        name={Sdata[0].name}
        price={Sdata[0].price}
    />
     <Card image={Sdata[1].image}
        name={Sdata[1].name}
        price={Sdata[1].price}
    />
     <Card image={Sdata[2].image}
        name={Sdata[2].name}
        price={Sdata[2].price}
    />
     <Card image={Sdata[3].image}
        name={Sdata[3].name}
        price={Sdata[3].price}
    />
        </div>
    )
}

export default Menuhendler;