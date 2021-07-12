import React, {Component} from 'react'
import {Formik, Form, Field} from 'formik'
import PlayerDataService from '../../service/PlayerDataService'

class UpdatePlayerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            playerName: '',
            playerNumber: this.props.match.params.playerNumber,
            playerCountry: '',
            age: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let player = {
            id: this.state.id,
            playerName: values.playerName,
            playerNumber: values.playerNumber,
            playerCountry: values.playerCountry,
            age: values.age
        }
        PlayerDataService.updatePlayer(player)
        .then(() => this.props.history.push(`/PlayerDirectory`))
    }

    render() {
        let {id, playerName, playerNumber, playerCountry, age} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor:"gray"}}>
                    <h3 style={{textAlign:"center"}}>Update Player</h3>
                </div>
                <div className="container">
                    <Formik
                        intialValues={{id, playerName, playerNumber, playerCountry, age}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            () => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label > Id</label>
                                        <Field className="form-control" type="text" name="id" disabled></Field>
                                    </fieldset>
                                    <fieldset>
                                        <label>Player Name</label>
                                        <Field className="form-control" type="text" name="playerName"></Field>
                                    </fieldset>
                                    <fieldset>
                                        <label>Player Number</label>
                                        <Field className="form-control" type="text" name="playerNumber"></Field>
                                    </fieldset>
                                    <fieldset>
                                        <label>Player Country</label>
                                        <Field className="form-control" type="text" name="playerCountry"></Field>
                                    </fieldset>
                                    <fieldset>
                                        <label>Age</label>
                                        <Field className="form-control" type="text" name="age"></Field>
                                    </fieldset><br/>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik><br/><br/>
                </div>
            </div>
        )
    }
}



export default UpdatePlayerComponent