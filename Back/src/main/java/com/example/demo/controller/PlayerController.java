package com.example.demo.controller;

import com.example.demo.entity.Player;
import com.example.demo.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class PlayerController {

    private final PlayerService playerService;

    //Constructor Injection: this is telling the spring framework to wire up your
    //dependencies for the playerService

    @Autowired
    public PlayerController(@Qualifier("playerServiceIMPL") PlayerService playerService) {
        this.playerService = playerService;
    }

    //This is a GET request that will read a list of all the players.
    //http://localhost:8080/retrieveAllPlayers
    @GetMapping("/retrieveAllPlayers")
    public List<Player> findAll() {
        return playerService.findAll();
    }

    //This is a GET request that will retrieve one player by id
    //http://localhost:8080/retrievePlayer/1
    @GetMapping("/retrievePlayer/{playerId}")
    public Player findById(@PathVariable int playerId) {
        return playerService.findById(playerId);
    }

    //This is a GET request that will retrieve one player by id
    //http://localhost:8080/retrievePlayer/Ronaldo
    @GetMapping("/retrievePlayer/{playerName}")
    public List<Player> findByName(@PathVariable String playerName) {
        return playerService.findByName(playerName);
    }


    //This is a POST request to add a new player.
    //http://localhost:8080/addPlayer
    @PostMapping("/addPlayer")
    public Player addPlayer(@RequestBody Player thePlayer) {
        //also just in case they pass an id in JSON .... set id to o
        //this is to force a save of new item .... instead of update
        thePlayer.setId(0);

        //This will call the playerDaoImpl.save method to save a new employee
        //through the playerService interface SPRING
        playerService.saveOrUpdate(thePlayer);
        return thePlayer;
    }

    //This is a PUT request to update an existing player.
    //http://localhost:8080/updatePlayer
    @PutMapping("/updatePlayer")
    public Player updatePlayer(@RequestBody Player updatePlayer) {
        playerService.saveOrUpdate(updatePlayer);
        return updatePlayer;
    }

    //This is a DELETE request to delete an existing player.
    //http://localhost:8080/deletePlayer/1

    @DeleteMapping("/deletePlayer/{playerId}")
    public String deletePlayer(@PathVariable int playerId) {
        playerService.deleteById(playerId);
        return "Deleted player id: " + playerId;
    }

}
