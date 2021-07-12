import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from '../header_footer/FooterComponent' 
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from '../header_footer/HeaderComponent'
import PlayerDirectoryComponent from '../player/PlayerDirectoryComponent'
import UpdatePlayerComponent from '../player/UpdatePlayerComponent'
import AddPlayer from '../player/AddPlayer'



class RouterComponent extends Component {
    render() {
        return(
            <div>
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route exact path="/" ><WelcomeComponent/></Route>
                        <Route path="/thePlayer/:id" component={AddPlayer}/>
                        <Route path="/player/:id/:playerNumber" component={UpdatePlayerComponent} />
                        <Route path="/PlayerDirectory" exact component={PlayerDirectoryComponent} />
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}


export default RouterComponent;