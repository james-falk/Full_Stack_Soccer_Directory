import React, {Component} from 'react' 
import PlayerDataService from '../../service/PlayerDataService'

class AddPlayer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: this.props.match.params.id,
            playerName: '',
            playerNumber: '',
            playerCountry: '',
            age: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let player = {
            id: this.state.id,
            playerName: this.state.playerName,
            playerNumber: this.state.playerNumber,
            playerCountry: this.state.playerCountry,
            age: this.state.age
        }
        PlayerDataService.createPlayer(player)
            .then(this.props.history.push(`/PlayerDirectory`))
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                    <h3 style={{ textAlign: "center"}}>Add Player</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled/>
                        </div>
                        <div>
                            <label>Player Name</label>
                            <input className="form-control" type="text" name="playerName" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Player Number</label>
                            <input className="form-control" type="text" name="playerNumber" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Player Country</label>
                            <input className="form-control" type="text" name="playerCountry" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Age</label>
                            <input className="form-control" type="text" name="age" onChange={this.handleChange}/>
                        </div> <br/> <br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}


export default AddPlayer