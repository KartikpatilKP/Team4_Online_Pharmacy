package com.example.onlinepharmacy.repository;

import com.example.onlinepharmacy.entity.Drug;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrugRepository extends JpaRepository<Drug, Long> {
}
