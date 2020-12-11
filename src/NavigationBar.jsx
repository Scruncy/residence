import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';

function NavigationBar(){
  return (<div className="container-fluid allineatore">
    <div className="row">
      <div className="col-lg-6">
        <h1 className="header"> Residence Sara </h1>
      </div>
      <div className="col-lg-6 hiddenElement center">
        <a href="/" className="collegamentiBarra"> Home </a>
        <a className="collegamentiBarra"> Gli appartamenti </a>
        <a href="https://www.tripadvisor.it/Hotel_Review-g187813-d1098219-Reviews-Residence_Sara-Trieste_Province_of_Trieste_Friuli_Venezia_Giulia.html" className="collegamentiBarra"> Prenota </a>
        <a className="collegamentiBarra"> Contatti </a>
      </div>
    </div>
  </div>
)
}

export default NavigationBar;
