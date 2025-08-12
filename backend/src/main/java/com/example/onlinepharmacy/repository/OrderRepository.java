package com.example.onlinepharmacy.repository;

import com.example.onlinepharmacy.entity.DrugOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<DrugOrder, Long> {
}
