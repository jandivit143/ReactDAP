import React from "react";
import playerAPI from "../playerAPI";
import { Link } from "react-router-dom";

const AllCricketers = () => (
    <div className="container-fluid">
        <h1 className="text-center display-1 text-warning">
            All Cricketers!
        </h1>
        <ul className="text-primary list-unstyled display-6" style={{textShadow: '2px 13px 18px navy'}}>
            {
                playerAPI.all().map((p) => (
                    <li key={p.id} style={{textShadow: '2px 12px 8px green'}}>
                        {/* {p.name} */}
                        <Link to={`/cricketer/${p.id}`} style={{textShadow: '2px 12px 8px green'}}>
                            {p.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>

)
export default AllCricketers;