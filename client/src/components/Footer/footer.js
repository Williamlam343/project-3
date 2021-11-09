import React from "react";
import { Footer } from "react-materialize";


export default function HomeFooter() {
    return (
        <Footer
            className="white bottom-0 z-depth-3 lighten-1"


            links={
                <ul >
                    <li><a className="grey-text text-darken-3" href="https://github.com/Williamlam343/project-3" target="_blank">GitHub</a></li>
                </ul>
            }

        >
            <h5 className="grey-text text-darken-4">
                About
            </h5>
            <p className="grey-text text-darken-4">
                Built using React, Materialize, Tailwinds, GraphQL
            </p>
        </Footer>
    )
}