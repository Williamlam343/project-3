import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import ShoeCard from '../Card'
import { Pagination, Row } from "react-materialize";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { category } = useParams();
  console.log(category)

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!category) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category.name === category
    );
  }

  return (
    <>
      <div className="container my-2">
        <h3>{category}</h3>
        {state.products.length ? (
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2 my-4">
            {filterProducts().map((product) => (
              <ShoeCard
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                description={product.description}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
        {loading ? <div>Loading...</div> : null}
        <Row>

          <Pagination className="white flex justify-center" items={5} />
        </Row>

      </div>

    </>
  );
}

export default ProductList;
