package com.example.onlinepharmacy.service;

import com.example.onlinepharmacy.dto.RegisterRequest;
import com.example.onlinepharmacy.entity.Address;
import com.example.onlinepharmacy.entity.Role;
import com.example.onlinepharmacy.entity.User;
import com.example.onlinepharmacy.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public MemberService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(RegisterRequest request) {
        Optional<User> existing = userRepository.findByEmail(request.getEmail());
        if (existing.isPresent()) {
            throw new RuntimeException("Email already registered");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        String r = request.getRole();
        if (r != null && !r.isBlank()) {
            try {
                user.setRole(Role.valueOf(r.toUpperCase()));
            } catch (IllegalArgumentException ex) {
                user.setRole(Role.USER);
            }
        } else {
            user.setRole(Role.USER);
        }

        Address addr = new Address();
        addr.setLine1(request.getLine1());
        addr.setCity(request.getCity());
        addr.setState(request.getState());
        addr.setPostalCode(request.getPostalCode());
        addr.setCountry(request.getCountry());
        user.setAddress(addr);

        return userRepository.save(user);
    }
}
