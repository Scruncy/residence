import NavigationBar from "./NavigationBar.jsx";
import NavBar from "./NavBar.jsx";
import React from "react";
import "./style.css";


function BarraNavigazioneCompleta() {
  return (
    <div className="barranavigazione">
    <NavigationBar />
    <NavBar />
    </div>
  );
}

export default BarraNavigazioneCompleta;
