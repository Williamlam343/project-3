import React from 'react';
import { Card, Icon, CardTitle, Col, Row, Button } from "react-materialize"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Link } from 'react-router-dom';

export default function ShoeCard(item) {
    const [state, dispatch] = useStoreContext();
    const {
        image,
        name,
        _id,
        price,
        quantity,
        description
    } = item;

    return (

        <Card

            textClassName="grey-text text-darken-4"
            className="min-w-full z-depth-2"
            actions={[
                <Link to={`/products/${_id}`}>
                    <Button className="red lighten-1" key="1" href="#">Buy Now</Button>
                </Link>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
                <Link to={`/products/${_id}`}>
                    <CardTitle className="" waves="red" image={image}

                    ><span className="grey-text text-darken-4">{name}</span></CardTitle>
                </Link>

            }

        >
            <h6>{description}</h6>
            <h5>{`$${price}`}</h5>
        </Card>


    );
}