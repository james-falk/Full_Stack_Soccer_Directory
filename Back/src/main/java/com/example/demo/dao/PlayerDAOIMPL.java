package com.example.demo.dao;

import com.example.demo.entity.Player;
import org.apache.catalina.webresources.ClasspathURLStreamHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import org.hibernate.Session;
import org.hibernate.query.Query;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;



@Repository
public class PlayerDAOIMPL implements PlayerDAO{

    //Define field for entity manager
    /*The EntityManager API is used to create and remove persistent entity instances,
        to find entities by their primary key, and to query over entities. */
    private final EntityManager entityManager;

    // Set up constructor injection
    @Autowired
    public PlayerDAOIMPL (EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Player> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query myQuery = currentSession.createQuery("from Player");
        return myQuery.getResultList();
    }

    @Override
    @Transactional
    public Player findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(Player.class, theId);
    }

    @Override
    @Transactional
    public List<Player> findByName(String theName) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query myQuery = currentSession.createQuery("from Player P where P.playerName = : theName");
        return myQuery.getResultList();
    }

    @Override
    @Transactional
    public void saveOrUpdate(Player thePlayer) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(thePlayer);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Player myPlayer = currentSession.get(Player.class, theId);
        currentSession.delete(myPlayer);
    }
}
