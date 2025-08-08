package com.example.online_pharmacy_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String role;
    private boolean enabled = false;

    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
}
