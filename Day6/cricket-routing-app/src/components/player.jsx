import React from "react";
import playerAPI from "../playerAPI";
import { Link, useNavigate, useParams } from "react-router-dom";

const Player = () => {
    // React Hook - useParams - hook return an object of key/value pair of the dynamic params from the current
    // URL that were matched by the Route path.
    const {id} = useParams();

    // useNavigate() - hook returns a function that lets you navigate programatically
    const navigate = useNavigate();

    const player = playerAPI.get(parseInt(id));
    if(!player){
        return <div className="display-1 text-center text-danger">Player not found!</div>
    }
    return  <div className="container">
                <h1 style={{textAlign: 'center'}} className="display-1 text-info">
                    Player Info
                </h1>
                <h2 style={{margin: '20px', color: 'black', textShadow: '2px 13px 10px maroon'}}>
                    {player.name} (#{player.id})
                </h2>
                <h3 style={{margin: '20px', color: 'black', textShadow: '2px 13px 10px navy'}}>
                    Position: {player.position}
                </h3>
                <Link to='/cricketer/allCricketers'  className="btn btn-success" style={{margin: '20px'}}>Back</Link>
                <button className="btn btn-danger" onClick={() => {navigate('/home')}}>Home</button>
            </div>
}
export default Player;