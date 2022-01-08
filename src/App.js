import React from 'react';
import Checkouthandler from './Component/checkout/checkouthandler/checkouthandler';
import MainHandler from './Component/main/Mainhandler/MainHandler';
import Menuhendler from './Component/menu/Menuhendler/Menuhendler';
import { Switch,Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Switch>
        <Route exact path="/" component={MainHandler}/>
        <Route exact path="/menu" component={Menuhendler}/>
        <Route exact path="/checkout" component={Checkouthandler}/>

        </Switch>

        {/* <Menuhendler/> */}
        {/* <Checkouthandler/> */}
    </>
  )
}

export default App;
