import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';


function Benvenuto(){
  return (
    <div className="container benvenuto allineatore">
  <div className="row">
    <div className="col-lg-12">
      <p className="testoBenvenuto">BENVENUTI DA</p>
      <h1 className="titoloPrincipale">RESIDENCE SARA</h1>
      <h2 className="slogan">Un Soggiorno nella Città più bella</h2>
    </div>
    <div className="col-lg-6 descrizione">
      <p className="testo"> Residence Sara si trova a Trieste e vanta una posizione strategica nel centro
      della città e vicino alla spiaggia. Castello di Miramare e Arco di Riccardo sono due
      dei più importanti punti di riferimento della zona. Tra le altre attrazioni, spiccano
       Centro visite della Riserva naturale marina di Miramare e Parco scientifico AREA Science Park. </p>
    </div>
    <div className="col-lg-6 descrizione">
      <p className="testo"> Sei in cerca di eventi sportivi o spettacoli a cui assistere? Stadio Nereo Rocco o
      Palazzetto Allianz Dome potrebbero avere in programma qualcosa di interessante per te.
      La zona di questa struttura è molto centrale, con grande soddisfazione dei suoi ospiti.
      </p>
    </div>
  </div>
</div>

  );
}

export default Benvenuto;
