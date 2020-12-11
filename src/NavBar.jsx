import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';
import "./style.css";

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const NavBar = () => (
  <div className="showElement ">
  <Dropdown className="collegamentiBarra" text='Menù'>
    <Dropdown.Menu >
      <Dropdown.Item className="barranavigazione" text='Home' />
      <Dropdown.Item className="barranavigazione" text="Gli appartamenti" description='Clicca qui per vedere i nostri appartamenti!' />
      <Dropdown.Item className="barranavigazione" text='Prenota' description='Clicca qui per prenotare una camera' />
      <Dropdown.Item className="barranavigazione" text='Contatti' description='Ti servono altre informazioni?' />
    </Dropdown.Menu>
  </Dropdown>
  </div>
)

export default NavBar;
