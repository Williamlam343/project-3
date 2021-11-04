import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom"

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <Link to="/">Back to Home</Link>
        <h4>No Results</h4>

      </Jumbotron>
    </div>
  );
};

export default NoMatch;
