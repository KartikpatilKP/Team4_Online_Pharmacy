package com.example.onlinepharmacy.controller;

import com.example.onlinepharmacy.entity.DrugOrder;
import com.example.onlinepharmacy.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;
    public OrderController(OrderService orderService) { this.orderService = orderService; }

    @GetMapping
    public ResponseEntity<List<DrugOrder>> list() {
        return ResponseEntity.ok(orderService.listAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return orderService.get(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<DrugOrder> create(@RequestBody DrugOrder o) {
        return ResponseEntity.ok(orderService.save(o));
    }
}
