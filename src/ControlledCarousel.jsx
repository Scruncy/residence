import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

import $ from 'jquery';


  $(document).ready(function(){
    var larghezza = ($(document).width());

  if (larghezza > 991){
      $(".immaginiCarosello").css("height", larghezza/2.5);
  } else {
      $(".immaginiCarosello").css("height", larghezza/2);
  }


$( window ).resize(function() {
  var larghezza = ($(document).width());

  if (larghezza > 991){
      $(".immaginiCarosello").css("height", larghezza/2.5);
  } else {
      $(".immaginiCarosello").css("height", larghezza/2);
  }

});
});

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="test">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 immaginiCarosello"
          src="https://www.artiespettacolo.it/wp/wp-content/uploads/2019/03/trieste.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 immaginiCarosello"
          src="https://wallpaperaccess.com/full/2189394.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 immaginiCarosello"
          src="https://i.pinimg.com/originals/e3/53/4d/e3534d2fecbbd0ebdd747209b3706969.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;
