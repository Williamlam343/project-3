import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

export default function ShoeCard(item) {
    const [state, dispatch] = useStoreContext();

    console.log(item)
    const {
        image,
        name,
        _id,
        price,
        quantity,
        description
    } = item;
    return (
        <Card className="" sx={{ maxWidth: 400, boxShadow: 3 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://i.stack.imgur.com/y9DpT.jpg"
                    alt="green iguana"
                />
                <CardContent className="text-center">
                    <Typography gutterBottom className="text-left" variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography className=" text-xl " variant="body" >
                        {`$${price}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="justify-center" >
                <Button size="medium" variant="outlined" color="primary">
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
}