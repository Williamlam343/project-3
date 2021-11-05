
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
            <Slide image={<img alt="carousel shoes" src="https://cdn.discordapp.com/attachments/736379151853944852/905672780379467826/union-air-jordan-4-guava-DC9533-800-6.png" />}>
                <Caption placement="left">
                    <h3 className="light grey-text text-darken-4">
                        This is our big Tagline!
                    </h3>
                    <h5 className="light grey-text text-darken-4">
                        Here's our small slogan.
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src="" />}>
                <Caption placement="left">
                    <h3>
                        Left Aligned Caption
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Here's our small slogan.
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src="" />}>
                <Caption placement="right">
                    <h3>
                        Right Aligned Caption
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Here's our small slogan.
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src="" />}>
                <Caption placement="center">
                    <h3>
                        This is our big Tagline!
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Here's our small slogan.
                    </h5>
                </Caption>
            </Slide>
        </Slider>
    )
}