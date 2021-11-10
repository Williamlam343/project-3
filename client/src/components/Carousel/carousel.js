
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
                indicators: true,
                interval: 6000
            }}
        >
            <Slide image={<img alt="carousel shoes" src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />}>
                <Caption placement="left">
                    <div className=" max-w-max bg-gray-700 p-2  rounded-2xl bg-opacity-40 z-depth-2">

                        <p className="text-5xl p-1 grey-text cursor-default text-lighten-3">
                            Shop our featured items
                        </p>
                        <p className="text-3xl grey-text cursor-default text-lighten-3">
                            Brand names we all know and love!
                        </p>
                    </div>
                </Caption>
            </Slide>
            <Slide image={<img alt="carousel shoes" src="https://images.unsplash.com/photo-1622866654068-ba9bba536a81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />}>
                <Caption placement="center">
                    <div className=" max-w-max relative m-auto bg-gray-700 p-2  rounded-2xl bg-opacity-40 z-depth-2">
                        <p className="text-5xl p-1 grey-text cursor-default text-lighten-3">
                            The lastest styles on the market
                        </p>
                        <p className="text-3xl grey-text cursor-default text-lighten-3">
                            Delivered to your footsteps
                        </p>
                    </div>
                </Caption>
            </Slide>
            <Slide image={<img alt="carousel shoes" src="https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1583&q=80" />}>
                <Caption placement="right">
                    <div className=" max-w-max bg-gray-700 p-2 absolute right-0 rounded-2xl bg-opacity-40 z-depth-2">
                        <p className="text-5xl p-1 grey-text cursor-default text-lighten-3">
                            Best prices available
                        </p>
                        <p className="text-3xl grey-text cursor-default text-lighten-3">
                            100% price match to any of our competitors
                        </p>
                    </div>
                </Caption>
            </Slide>

        </Slider>
    )
}