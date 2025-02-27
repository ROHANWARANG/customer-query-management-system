package com.rohan.newproject;

import jakarta.persistence.*;

@Entity // ✅ Ensure this is present
@Table(name = "queries") // ✅ Make sure table name matches exactly
public class Query {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    private String name;
    private String email;
    private String pnr;
    private String flight;
    private String queryType;
    private String message;
    private String status; // ✅ Ensure status field is present

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPnr() { return pnr; }
    public void setPnr(String pnr) { this.pnr = pnr; }

    public String getFlight() { return flight; }
    public void setFlight(String flight) { this.flight = flight; }

    public String getQueryType() { return queryType; }
    public void setQueryType(String queryType) { this.queryType = queryType; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}