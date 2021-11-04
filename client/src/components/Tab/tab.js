import React from "react";
import { Tab, Tabs } from "react-materialize";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';



export default function HomeTab() {


    const { loading, data } = useQuery(QUERY_CATEGORIES)
    const brands = data?.categories || []


    return (
        <Tabs
            className=" z-depth-2 white lighten-2 tabs-fixed-width"
            scope="tabs-24"
        >

            {loading ? (<div>Loading...</div>) : (
                brands.map((brand) =>
                    <Tab

                        key={brand.name}
                        className=" text-black"
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,

                        }}
                        title={

                            <p className="grey-text text-darken-3">{brand.name}</p>

                        }
                    />
                )
            )}

        </Tabs>
    )
}