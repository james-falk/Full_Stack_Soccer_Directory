package com.example.demo.service;

import com.example.demo.dao.PlayerDAO;
import com.example.demo.entity.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerServiceIMPL implements PlayerService{


    private final PlayerDAO playerDAO;


    @Autowired
    public PlayerServiceIMPL(PlayerDAO playerDAO) {
        this.playerDAO = playerDAO;
    }
    @Override
    public List<Player> findAll() {
        return playerDAO.findAll();
    }

    @Override
    public Player findById(int playerId) {
        return playerDAO.findById(playerId);
    }
    @Override
    public List<Player> findByName(String playerName) {
        return playerDAO.findByName(playerName);
    }

    @Override
    public void saveOrUpdate(Player thePlayer) {
        playerDAO.saveOrUpdate(thePlayer);
    }

    @Override
    public void deleteById(int playerId) {
        playerDAO.deleteById(playerId);
    }
}
