package com.example.online_pharmacy_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Drug {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Double price;
    private int quantity;
}
