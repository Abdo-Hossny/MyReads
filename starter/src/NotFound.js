import React from "react";
import Header from "./Components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <>
        <Header />
        <h1 className="back-to-home">Sorry, Page not Found
        <Link to="/">
          <p>Back to Home</p>
        </Link>
        </h1>
        </>
    )
    
}

export default NotFound