import React from "react";
import { Footer } from "react-materialize";


export default function HomeFooter() {
    return (
        <Footer
            className="white z-depth-3 lighten-1"
            // copyrights="&copy 2015 Copyright Text"

            links={
                <ul >
                    <li><a className="grey-text text-darken-3" href="#!">Link 1</a></li>
                    <li><a className="grey-text text-darken-3" href="#!">Link 2</a></li>
                    <li><a className="grey-text text-darken-3" href="#!">Link 3</a></li>
                    <li><a className="grey-text text-darken-3" href="#!">Link 4</a></li>
                </ul>
            }
        // moreLinks={
        //     <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        // }
        >
            <h5 className="grey-text text-darken-4">
                Footer Content
            </h5>
            <p className="grey-text text-darken-4">
                You can use rows and columns here to organize your footer content.
            </p>
        </Footer>
    )
}