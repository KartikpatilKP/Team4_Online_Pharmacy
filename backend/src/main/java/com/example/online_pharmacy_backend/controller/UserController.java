package com.example.online_pharmacy_backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping("/drugs")
    public String fetchAllDrugs() {
        return "All drugs listed";
    }

    @GetMapping("/drugs/name/{name}")
    public String fetchDrugByName(@PathVariable String name) {
        return "Drug details for name";
    }

    @GetMapping("/drugs/id/{id}")
    public String fetchDrugById(@PathVariable Long id) {
        return "Drug details for id";
    }

    @GetMapping("/profile")
    public String fetchProfile() {
        return "Profile details";
    }

    @PutMapping("/profile")
    public String updateProfile() {
        return "Profile updated";
    }

    @DeleteMapping("/profile")
    public String deleteProfile() {
        return "Profile deleted";
    }
}
