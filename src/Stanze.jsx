import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import AppartamentoColonna from "./AppartamentoColonna.jsx"

import './style.css';

function Stanze (){
  return (
    <div className="container allineatore hiddenElement stanze">
      <h2 className="testoBenvenuto"> I nostri appartamenti </h2>
      <div className="row">
        <AppartamentoColonna
        sorgente="https://media-cdn.tripadvisor.com/media/photo-o/04/0a/5e/26/soggiorno.jpg"
        nome="Delux Room"
        testo="Se cercate spazio per tre ospiti, le nostre camere triple sono a vostra disposizione. Dispongono di tre letti singoli o, se lo preferite, di un letto matrimoniale e uno singolo. Indicateci le vostre preferenze al momento di effettuare la prenotazione." />
        <AppartamentoColonna
        sorgente="https://media-cdn.tripadvisor.com/media/photo-o/04/0a/5e/26/soggiorno.jpg"
        nome="Secondary Room"
        testo="Se cercate spazio per tre ospiti, le nostre camere triple sono a vostra disposizione. Dispongono di tre letti singoli o, se lo preferite, di un letto matrimoniale e uno singolo. Indicateci le vostre preferenze al momento di effettuare la prenotazione." />
        <AppartamentoColonna
        sorgente="https://media-cdn.tripadvisor.com/media/photo-o/04/0a/5e/26/soggiorno.jpg"
        nome="Home Room"
        testo="Se cercate spazio per tre ospiti, le nostre camere triple sono a vostra disposizione. Dispongono di tre letti singoli o, se lo preferite, di un letto matrimoniale e uno singolo. Indicateci le vostre preferenze al momento di effettuare la prenotazione." />

        </div>
      </div>
  )
}

export default Stanze;
