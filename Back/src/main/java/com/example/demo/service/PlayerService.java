package com.example.demo.service;

import com.example.demo.entity.Player;

import java.util.List;

public interface PlayerService {
    List<Player> findAll();
    Player findById(int playerId);
    List<Player> findByName(String playerName);
    void saveOrUpdate(Player thePlayer);
    void deleteById(int playerId);
}
