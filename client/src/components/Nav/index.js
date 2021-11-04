import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <Navbar
      className="white lighten-2"
      alignLinks="right"

      brand={<Link className="grey-text text-darken-4 brand-logo" to="/">Soles R' Us</Link>}

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
      <Link className="grey-text text-darken-3" to='/login'>
        Login
      </Link>
      <Link className="grey-text text-darken-3" to='/Signup'>
        Sign-Up
      </Link>
      <Link className="grey-text text-darken-3" to='/OrderHistory'>
        Your Orders
      </Link>
      <Link className="grey-text text-darken-3" to='/Cart'>
        <Icon>shopping_cart</Icon>
      </Link>


    </Navbar>
  );
}