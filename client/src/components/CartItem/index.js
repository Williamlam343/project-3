import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Card, Icon, CardTitle, Button } from 'react-materialize';

export default function CartItem({ item }) {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (

    <Card
      style={{ minWidth: "100%" }}
      actions={[
        <Button
          onClick={() => removeFromCart(item)}
          className="red lighten-1">Remove from Cart</Button>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={item.image} />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
      className="z-depth-2"

    >
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <h4>{`$${item.price}`}</h4>
      <p>Size:12</p>
      <input
        type="number"
        placeholder="1"
        value={item.purchaseQuantity}
        onChange={onChange}
      />

    </Card>

  )

}
