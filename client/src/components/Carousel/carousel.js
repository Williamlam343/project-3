import { padding } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-materialize';

export default function HomeCarousel() {

    return (
        <Carousel
            carouselId="Carousel-32"
            className="white-text center max-h-96 "
            // images={[
            //     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            //     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            //     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            //     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            // ]}
            options={{
                duration: 500,
                fullWidth: true,
                indicators: true,
                shift: 0,
                padding: 0
            }}
        >
            <div className="red" style={
                {
                    background: `url(https://cdn.discordapp.com/attachments/736379151853944852/905672780379467826/union-air-jordan-4-guava-DC9533-800-6.png)`,
                    backgroundPosition: "50% 60%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"

                }
            }>
                <h2>
                    First Panel
                </h2>
                <p>
                    This is your first panel
                </p>
            </div>
            <div className="amber">
                <h2>
                    Second Panel
                </h2>
                <p>
                    This is your second panel
                </p>
            </div>
            <div className="green">
                <h2>
                    Third Panel
                </h2>
                <p>
                    This is your third panel
                </p>
            </div>
            <div className="blue">
                <h2>
                    Fourth Panel
                </h2>
                <p>
                    This is your fourth panel
                </p>
            </div>
        </Carousel>
    )
}