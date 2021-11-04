import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';



export default function Nav() {
  return (
    <Navbar
      className="white lighten-2"
      alignLinks="left"
      brand={<a className="grey-text text-darken-3 brand-logo" href="#">Soles R' Us</a>}
      centerLogo
      id="mobile-nav"
      menuIcon={<Icon className="black-text">menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem className="black-text" onClick={function noRefCheck() { }}>
        Getting started
      </NavItem>
      <NavItem className="black-text" href="components.html">
        Components
      </NavItem>
    </Navbar>
  );
}