import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Hotellista from './Hotellista.js';
import Footer from './Footer.js';
import Bekraftelse from './Bekraftelse.js';
import Bokningssida from './Bokningssida.js';
import Hotell from './Hotell.js';
import CustomerService from './customerservice.js';
import Welcome from './startsida.js';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/startsida/" component={Welcome}></Route>
        <Route path="/Hotellista/" component={Hotellista}></Route>
        <Route path="/Bokningssida/" component={Bokningssida}></Route>
        <Route path="/Bekraftelse/" component={Bekraftelse}></Route>
        <Route path="/Hotell/" component={Hotell}></Route>
        <Route path="/Bokningssida/" component={Bokningssida}></Route>

        <Redirect to="startsida"></Redirect>
      </Switch>
      <Footer />
      <div></div>
      <div></div>
    </div>
  );
}
