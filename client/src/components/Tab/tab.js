import React from "react";
import { Tab, Tabs } from "react-materialize";


export default function HomeTab() {
    return (
        <Tabs
            className=" z-depth-2 orange lighten-2 tabs-fixed-width"
            scope="tabs-24"
        >
            <Tab
                active
                className=" text-black"
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: true
                }}
                title={<p className="text-white">Nike</p>}
            >
                <p className="">Test 1</p>
            </Tab>
            <Tab
                active
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title={<p className="text-white">Adidas</p>}
            >
                Test 2
            </Tab>
            <Tab

                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title={<p className="text-white">Yeezy</p>}
            >
                Test 3
            </Tab>
            <Tab
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title={<p className="text-white">Alexander McQueen</p>}
            >
                Test 4
            </Tab>
            <Tab
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title={<p className="text-white">Surpreme</p>}
            >
                Test 5
            </Tab>
        </Tabs>
    )
}