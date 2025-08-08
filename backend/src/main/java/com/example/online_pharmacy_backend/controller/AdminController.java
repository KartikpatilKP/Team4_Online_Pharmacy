package com.example.online_pharmacy_backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @PostMapping("/drugs")
    public String addDrug() {
        return "Drug added";
    }

    @PutMapping("/drugs/{id}")
    public String updateDrug(@PathVariable Long id) {
        return "Drug updated";
    }

    @DeleteMapping("/drugs/{id}")
    public String deleteDrug(@PathVariable Long id) {
        return "Drug deleted";
    }

    @GetMapping("/users")
    public String viewMembers() {
        return "List of members";
    }

    @PutMapping("/users/{id}/enable")
    public String approveMember(@PathVariable Long id) {
        return "Member approved";
    }
}
