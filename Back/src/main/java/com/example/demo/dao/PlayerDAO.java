package com.example.demo.dao;

import com.example.demo.entity.Player;

import java.util.List;

public interface PlayerDAO {
    List<Player> findAll();
    Player findById(int theId);
    List<Player> findByName(String theName);
    void saveOrUpdate(Player thePlayer);
    void deleteById(int theId);
}
