import BarraNavigazioneCompleta from "./BarraNavigazioneCompleta.jsx"
import React from "react";
import "./style.css";
import ControlledCarousel from "./ControlledCarousel.jsx";
import Benvenuto from "./Benvenuto.jsx";
import Footer from "./Footer.jsx";
import Stanze from "./Stanze.jsx";

function App() {
  return (
    <div>
    <BarraNavigazioneCompleta />
    <ControlledCarousel />
    <Benvenuto />
    <Stanze />
    <Footer />
    </div>
  );
}

export default App;
