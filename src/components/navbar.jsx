import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/new">Creat task</Link>
            </li>
        </ul>
    );
}

export default Navbar;