import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WelcomeComponent extends Component {
    render() {
        return(
            <div className="container">
                <br/><br/>
                <div className="jumbotron" style={{textAlign:"center", backgroundColor:"Black"}}>
                <h1 style={{color:"Green"}}>Welcome to the Soccer Registry</h1>
                <br/>    
                <h2 style={{color:"White"}}>You can access the Registry <Link to="/SoccerDirectory">Here</Link> </h2>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent;