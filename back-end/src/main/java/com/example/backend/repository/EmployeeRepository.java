package com.example.backend.repository;

import java.util.List;

import com.example.backend.model.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query(value = "SELECT * FROM employee ORDER BY id  DESC", nativeQuery = true)
    List<Employee> findAll();
}
