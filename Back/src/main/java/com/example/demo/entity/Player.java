package com.example.demo.entity;


import javax.persistence.*;

@Entity //Lets java know that this will be mapped to a db table
@Table(name = "player")
public class Player {

    //Define fields
    @Id   //Will map the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Auto increments the primary key
    @Column(name = "id")
    private int id;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "player_number")
    private String playerNumber;

    @Column(name = "player_country")
    private String playerCountry;

    @Column(name = "age")
    private String age;

    //Default constructor
    public Player() {
    }

    // Parameter constructor
    public Player(String playerName, String playerNumber, String playerCountry, String age) {
        this.playerName = playerName;
        this.playerNumber = playerNumber;
        this.playerCountry = playerCountry;
        this.age = age;
    }

    //getters/setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getPlayerNumber() {
        return playerNumber;
    }

    public void setPlayerNumber(String playerNumber) {
        this.playerNumber = playerNumber;
    }

    public String getPlayerCountry() {
        return playerCountry;
    }

    public void setPlayerCountry(String playerCountry) {
        this.playerCountry = playerCountry;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    //ToString Method
    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", playerName='" + playerName + '\'' +
                ", playerNumber='" + playerNumber + '\'' +
                ", playerCountry='" + playerCountry + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}
