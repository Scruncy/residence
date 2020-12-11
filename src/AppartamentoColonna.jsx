import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';

import './style.css';

function AppartamentoColonna(props){
  return (
    <div className="col-lg-4 allineatoreSinistra">
      <img className="stanzeImmagini" alt="stanza" src={props.sorgente} />
      <h3 style={{marginTop:5}} className="slogan"> {props.nome} </h3>
      <p className="testo"> {props.testo}
      </p>
      <div className="allineatore">
      <Button  variant="outlined" color="secondary">
        Scopri di più
      </Button>
      </div>
  </div>)
}

export default AppartamentoColonna;
