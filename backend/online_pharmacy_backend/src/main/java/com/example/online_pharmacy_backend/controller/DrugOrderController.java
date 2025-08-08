package com.example.online_pharmacy_backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class DrugOrderController {

    @PostMapping
    public String placeOrder() {
        return "Order placed successfully";
    }
}
