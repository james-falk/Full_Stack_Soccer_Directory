import React, {Component} from 'react'
import PlayerDataService from '../../service/PlayerDataService'

class PlayerDirectoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: []
        }
        this.refreshPlayerDirectory = this.refreshPlayerDirectory.bind(this)
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.updatePlayerClicked = this.updatePlayerClicked.bind(this)
        this.addPlayerClicked = this.addPlayerClicked.bind(this)
    }

    componentDidMount() {
        this.refreshPlayerDirectory();
    }

    refreshPlayerDirectory() {
        PlayerDataService.retrieveAllPlayers()
        .then(
            response => {
                this.setState({
                    players: response.data,
                })
            }
        )
    }

    deletePlayerClicked(id, playerName) {
        console('Delete Player Clicked')
        PlayerDataService.deletePlayer(id)
        .then(
            response => {
                this.setState({message: `Deleted Player: ${playerName}`})
                alert(this.state.message)
                this.refreshPlayerDirectory();
            }
        )
    }

    updatePlayerClicked(id, playerNumber) {
        console.log('Update Player Clicked')
        this.props.history.push(`/player/${id}/${playerNumber}`)
    }

    addPlayerClicked() {
        console.log('Add Player Clicked')
        this.props.history.push(`/thePlayer/-1`)
    }

    render() {
        return(
            <div className="container">
                <h1 style={{textAlign:"center"}}>Player Directory</h1><br/>
                <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
                    <table className="table">
                        <thead>
                            <tr style={{textAlign: "center" , color: "black"}}>
                                <th>Id</th>
                                <th>Player Name</th>
                                <th>Player Number</th>
                                <th>Player Country</th>
                                <th>Age</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.players.map(
                                    players => 
                                    <tr style={{textAlign: "center"}} key={players.id}>
                                        <td>{players.id}</td>
                                        <td>{players.playerName}</td>
                                        <td>{players.playerNumber}</td>
                                        <td>{players.playerCountry}</td>
                                        <td>{players.age}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deletePlayerClicked(players.id, players.playerName)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updatePlayerClicked(players.id, players.playerNumber)}>Update</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <br/>
                        <button className="btn btn-success"  onClick={this.addPlayerClicked}>Add Player</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlayerDirectoryComponent;