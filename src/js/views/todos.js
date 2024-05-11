import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Todos = () => {
    
    return(
<>
    <div>
        <h1>Todos!</h1>
    </div> 
    <div>
        <Link to="/demo">
            <button>Go to demo page</button>
        </Link>
    </div>
</>

    )

}