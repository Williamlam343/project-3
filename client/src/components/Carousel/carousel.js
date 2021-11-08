
import React from 'react';
import { Carousel } from 'react-materialize';
import { Slider, Caption, Slide } from 'react-materialize';

export default function HomeCarousel() {

    return (
        <Slider

            fullscreen={false}
            options={{
                duration: 500,
                height: 300,
                indicators: false,
                interval: 6000
            }}
        >
            <Slide image={<img alt="carousel shoes" src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />}>
                <Caption placement="left">
                    <h3 className="light grey-text text-lighten-3">
                        Shop our featured items
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Brand names we all know and love!
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="carousel shoes" src="https://images.unsplash.com/photo-1622866654068-ba9bba536a81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />}>
                <Caption placement="left">
                    <h3 className="light grey-text text-lighten-3">
                        The lastest styles on the market
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Delivered to your footsteps
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="carousel shoes" src="https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1583&q=80" />}>
                <Caption placement="left">
                    <h3 className="light grey-text text-darken-4">
                        Best prices available
                    </h3>
                    <h5 className="light grey-text text-darken-4">
                        100% price match to any of our competitors
                    </h5>
                </Caption>
            </Slide>

        </Slider>
    )
}