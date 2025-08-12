package com.example.onlinepharmacy.service;

import com.example.onlinepharmacy.entity.DrugOrder;
import com.example.onlinepharmacy.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    public OrderService(OrderRepository orderRepository) { this.orderRepository = orderRepository; }

    public List<DrugOrder> listAll() { return orderRepository.findAll(); }
    public Optional<DrugOrder> get(Long id) { return orderRepository.findById(id); }
    public DrugOrder save(DrugOrder o) { return orderRepository.save(o); }
}
