import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Item(props) {
    return (
        <Paper className="text-center">
            <h2 className=" z-10">{props.item.name}</h2>
            <p className=" z-10">{props.item.description}</p>
            <img className="top-0 w-full " src={props.item.image} />

        </Paper>
    )
}
export default function HomeCarousel() {
    var items = [
        {
            name: "Shoes R Us!",
            description: "Checkout the lastest selections",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        },
        {
            name: "Hello",
            description: "Hello World!",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80"
        }
    ]

    return (
        <Carousel
            className="w-full"
            // indicators={false}
            swipe={true}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}
