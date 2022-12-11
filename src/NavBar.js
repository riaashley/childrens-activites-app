import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navDiv">
            <ul className="navBar">
                <li className="link">
                    <Link to="/">
                         Home
                     </Link>
                 </li>
                <li className="link">
                    <Link to="/activities">
                     Activities
                    </Link>
                 </li>  
                 <li className="link">
                     <Link to="/new">
                         New Activity
                     </Link>
                 </li>     
            </ul>
         </div>
        )
    }
export default NavBar;
