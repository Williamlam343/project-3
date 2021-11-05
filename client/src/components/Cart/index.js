import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from "react-materialize"

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  console.log(state.cart)
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);


  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div className="container min-h-screen">
      <Link className="blue-text block" to="/">← Back to Shopping</Link>
      <h4>Shopping Cart</h4>
      {state.cart.length ? (
        <Row >
          <Col
            className="flex flex-col md:flex-row space-between"
            m={12}>
            <p className="text-2xl" >Total: ${calculateTotal()}</p>

            {Auth.loggedIn() ? (
              <Button className="blue relative md:bottom-2" onClick={submitCheckout}>Checkout</Button>
            ) : (
              <Link to="/login">Login to Checkout</Link>
            )}
          </Col>
          <Col m={12}
            className="grid gap-4 xl:grid-cols-2 grid-cols-1">
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </Col>

        </Row>
      ) : (
        <h5>
          You haven't added anything to your cart yet!
        </h5>
      )
      }
    </div >
  );
};

export default Cart;
