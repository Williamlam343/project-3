import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Row, Col, Card, Icon, Button, Select } from 'react-materialize';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  console.log(currentProduct)
  const { products, cart } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }

    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }

    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container md:mx-3 my-1">

          <Row>
            <Link className="block" to="/">← Back to Products</Link>
            <Col
              s={12}
              m={6}
              className="s5"

            >
              <img className="rounded z-depth-2 my-1 w-full h-auto" src="https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png">
              </img>
            </Col>

            <Col
              s={12}
              m={4}
              className="s5"

            >

              <Card
                style={{ width: "100%" }}
                className="text-black flex flex-col justify-center z-depth-2 w-full right-0"
                actions={[
                  <Button className="rounded red lighten-1">Add to Cart</Button>
                ]}

                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="grey-text text-darken-4"
                title={<h4 className=""> {currentProduct.name}</h4>}
              >
                <h6 className="">{currentProduct.description}</h6>
                <h5 className="">{`$${currentProduct.price}`}</h5>
                <div className="relative flex justify-center">
                  <Select
                    className=" grey-text text-darken-3"
                    id="Select-40"
                    multiple={false}
                    onChange={function noRefCheck() { }}
                    options={{
                      classes: 'grey-text text-darken-3',
                      dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                      }
                    }}
                    value="" >
                    <option
                      className=""
                      disabled
                      value="">
                      Pick a Size
                    </option>
                    <option
                      color="red"
                      value="1">
                      8
                    </option>
                    <option value="2">
                      9
                    </option>
                    <option value="3">
                      10
                    </option>
                    <option value="4">
                      11
                    </option>
                    <option value="5">
                      12
                    </option>
                    <option value="6">
                      13
                    </option>
                  </Select>

                </div>

              </Card>

              <div className="flex justify-center">

                <Button className="rounded z-depth-2 relative my-10 grey-text text-darken-4 yellow lighten-2">Procced to Checkout</Button>
              </div>
            </Col>
          </Row>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}

    </>
  );
}

export default Detail;
