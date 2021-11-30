package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Employee;

public interface EmployeeService {
    List<Employee> findAll();

    Employee createEmployee(Employee employee);

    Employee findById(Long id);

    void deleteEmployee(Long id);

    Employee updateEmployee(Employee employee) throws Exception;
}
