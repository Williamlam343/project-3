import React from "react";
import { Tab, Tabs } from "react-materialize";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import ShoeCard from "../Card/card";
import ProductList from "../ProductList";

export default function HomeTab() {


    const { loading, data } = useQuery(QUERY_CATEGORIES)

    const brands = data?.categories || []


    return (
        <Tabs
            className=" z-depth-2 white lighten-2 tabs-transparent tabs-fixed-width"
            scope="tabs-"
        >

            {loading ? (<div>Loading...</div>) : (
                brands.map((brand) =>
                    <Tab

                        key={brand.name}
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                        }}
                        title={
                            <Link to={brand.name}>
                                <p className="grey-text text-darken-3">{brand.name}</p>
                            </Link>
                        }
                    ><div className="container">


                        </div>
                    </Tab>

                )
            )}

        </Tabs>
    )
}