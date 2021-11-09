import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import ShoeCard from "../Card";
import { Pagination, Row } from "react-materialize";
import NoMatch from "../../pages/NoMatch";
function ProductList() {
  const [state, dispatch] = useStoreContext();
  // num of pages = total / limit (round up)
  // offset = page * limit

  const [pagination, setPagination] = useState({
    page: 0,
    limit: 8,
    offset: 0,
  });

  const { category } = useParams();

  const { loading, data, refetch } = useQuery(QUERY_PRODUCTS, {
    variables: { ...pagination, category },
  });
  // console.log(data.products.items[0].category.name)
  useEffect(() => {
    refetch({ ...pagination });
  }, [pagination.page]);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products.items,
      });
    }
  }, [data]);

  function pageHandler(page) {
    // Calculate the offset based off the total number of items and the page
    setPagination({
      ...pagination,
      page: page - 1,
      offset: (page - 1) * pagination.limit,
    });
  }

  return (
    <>
      <div className="container my-2">
        {state.products.length ? (
          <>
            {category && <h3>{state.products[0].category.name}</h3>}
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2 my-4">
              {state.products.map((product) => (
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
          </>
        ) : (
          <NoMatch />
        )}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Row>
            <Pagination
              onSelect={pageHandler}
              activePage={pagination.page + 1}
              className="white flex justify-center"
              items={5
                // Math.ceil(data.products.total / pagination.limit)
              }
            />
          </Row>
        )}
      </div>
    </>
  );
}

export default ProductList;
