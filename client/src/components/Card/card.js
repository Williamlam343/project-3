import React from 'react';
import { Card, Icon, CardTitle, Button } from "react-materialize"
import { Link } from 'react-router-dom';

export default function ShoeCard(item) {

    const {
        image,
        name,
        _id,
        price,
        description
    } = item;

    return (

        <Card

            textClassName="grey-text text-darken-4"
            className="min-w-full z-depth-2"
            actions={[
                <Link to={`/products/${_id}`}>
                    <Button className="red lighten-1">Buy Now</Button>
                </Link>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
                <Link to={`/products/${_id}`}>
                    <CardTitle waves="red" image={image}

                    />
                </Link>

            }


        ><span className="grey-text text-2xl text-darken-4">{name}</span>
            <h6>{description}</h6>
            <h5>{`$${price}`}</h5>
        </Card>


    );
}