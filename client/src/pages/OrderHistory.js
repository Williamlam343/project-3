import React from 'react';
import { Link } from 'react-router-dom';
import NoMatch from "./NoMatch"
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container min-h-screen my-1">

        {user ? (
          <>
            <Link to="/">← Back to Products</Link>
            <h4>
              Order History for {user.firstName} {user.lastName}
            </h4>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h5>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h5>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : <NoMatch />}
      </div>
    </>
  );
}

export default OrderHistory;
