import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
export default function Nav() {




  return (
    <Navbar
      className="white z-depth-3"
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
      {Auth.loggedIn() ? <Link className="grey-text text-darken-3" onClick={() => Auth.logout()}>
        Logout
      </Link> :
        <Link className="grey-text text-darken-3" to='/login'>
          Login
        </Link>
      }
      {!Auth.loggedIn() && <Link className="grey-text text-darken-3" to='/signup'>
        Signup
      </Link>}


      {Auth.loggedIn() && <Link className="grey-text text-darken-3" to='/orderHistory'>
        Your Orders
      </Link>}

      <Link className="grey-text text-darken-3" to='/cart'>
        <p>
          <Icon>shopping_cart</Icon>
        </p>
      </Link>

    </Navbar>
  );
}