package com.example.onlinepharmacy.controller;

import com.example.onlinepharmacy.entity.Drug;
import com.example.onlinepharmacy.service.DrugService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drugs")
public class DrugController {
    private final DrugService drugService;
    public DrugController(DrugService drugService) { this.drugService = drugService; }

    @GetMapping
    public ResponseEntity<List<Drug>> list() {
        return ResponseEntity.ok(drugService.listAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return drugService.get(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Drug> create(@RequestBody Drug d) {
        return ResponseEntity.ok(drugService.save(d));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        drugService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
