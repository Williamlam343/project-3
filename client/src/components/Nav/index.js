import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import { Search } from 'react-router-dom';

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

  <Link to='/login'>
    LOG IN
  </Link>
  <Link to='/Signup'>
    SIGN UP
  </Link>
  <Link to='/OrderHistory'>
    ORDERS
  </Link>


    </Navbar>
  );
}