import React from 'react';

import { Link } from "react-router-dom";
import NavBar from '../navBar/navBar';

const Teams = () => {
    return ( <div className="teamsDiv">
      <NavBar />
        <h3>Teams</h3>
        <button
        
            >
                <Link
                    to="/addSales"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    ADD SALES EXECUTIVE
                  </Link>
            </button>
    </div> );
}
 
export default Teams;