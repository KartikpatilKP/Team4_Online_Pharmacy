package com.example.onlinepharmacy.controller;

import com.example.onlinepharmacy.dto.LoginRequest;
import com.example.onlinepharmacy.dto.RegisterRequest;
import com.example.onlinepharmacy.entity.User;
import com.example.onlinepharmacy.repository.UserRepository;
import com.example.onlinepharmacy.security.JwtUtil;
import com.example.onlinepharmacy.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final MemberService memberService;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthController(MemberService memberService, UserRepository userRepository,
                          BCryptPasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.memberService = memberService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        User u = memberService.register(req);
        return ResponseEntity.ok(Map.of("id", u.getId(), "email", u.getEmail()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        Optional<User> userOpt = userRepository.findByEmail(req.getEmail());
        if (userOpt.isEmpty()) return ResponseEntity.status(401).body(Map.of("error","invalid credentials"));
        User u = userOpt.get();
        if (!passwordEncoder.matches(req.getPassword(), u.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error","invalid credentials"));
        }
        String token = jwtUtil.generateToken(u.getEmail());
        return ResponseEntity.ok(Map.of("token", token, "role", u.getRole()));
    }
}
