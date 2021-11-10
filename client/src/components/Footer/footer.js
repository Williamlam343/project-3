import React from "react";
import { Footer } from "react-materialize";


export default function HomeFooter() {
    return (
        <Footer
            className="white bottom-0 z-depth-3 lighten-1"
            copyrights={<div className="flex justify-center text-darken-4 grey-text">Built using React, Materialize, Tailwinds, GraphQL</div>}

            links={[
                <div className="grey-text relative text-darken-4">

                    <h5 className="text-2xl">Github</h5>
                    <ul >
                        <li> <a className="grey-text text-darken-4" href="https://github.com/Williamlam343" target="_blank"><img className="inline m-1" src={require("../../img/GitHub-Mark-32px.png").default} /> Soles R Us </a></li>
                    </ul>
                </div>
            ]}

        >
            <h5 className="flex justify-center grey-text text-darken-4">
                About Us
            </h5>
            <div className="grey-text text-darken-4">
                <p className="grey-text text-2xl text-darken-4">
                    Developers:
                </p>
                <ul className="flex justify-center flex-col">
                    <li><a className="grey-text text-darken-4" href="https://www.linkedin.com/in/william-lam-115325218/" target="_blank"><img className="inline m-1" src={require("../../img/linkedin-dark.png").default} /><span className="py-2 px-0.5">William Lam</span></a></li>
                    <li><a className="grey-text text-darken-4" href="#" target="_blank"><img className="inline m-1" src={require("../../img/linkedin-dark.png").default} /><span className="py-2 px-0.5">Henry Deserne</span></a></li>
                    <li><a className="grey-text text-darken-4" href="https://www.linkedin.com/mwlite/in/john-price-056458225" target="_blank"><img className="inline m-1" src={require("../../img/linkedin-dark.png").default} /><span className="py-2 px-0.5">John Price</span></a></li>
                </ul>
            </div>
        </Footer>
    )
}