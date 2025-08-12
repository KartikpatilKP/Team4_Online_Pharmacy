package com.example.onlinepharmacy.service;

import com.example.onlinepharmacy.entity.Drug;
import com.example.onlinepharmacy.repository.DrugRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DrugService {
    private final DrugRepository drugRepository;
    public DrugService(DrugRepository drugRepository) { this.drugRepository = drugRepository; }

    public List<Drug> listAll() { return drugRepository.findAll(); }
    public Optional<Drug> get(Long id) { return drugRepository.findById(id); }
    public Drug save(Drug d) { return drugRepository.save(d); }
    public void delete(Long id) { drugRepository.deleteById(id); }
}
