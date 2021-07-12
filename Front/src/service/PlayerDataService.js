import axios from 'axios'

class PlayerDataService{

    retrieveAllPlayers() {
        return axios.get(`http://localhost:8080/retrieveAllPlayers`);
    }

    deletePlayer(id) {
        return axios.delete(`http://localhost:8080/deletePlayer/${id}`)
    }

    updatePlayer(player) {
        return axios.put(`htpp://localhost:8080/updatePlayer`, player)
    }

    createPlayer(player) {
        return axios.post(`http://localhost:8080`, player)
    }
}

export default new PlayerDataService()