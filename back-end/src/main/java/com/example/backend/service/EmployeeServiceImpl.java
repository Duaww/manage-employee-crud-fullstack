package com.example.backend.service;

import java.lang.reflect.Field;
import java.util.List;

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepo;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @Override
    public List<Employee> findAll() {
        // TODO Auto-generated method stub
        return employeeRepo.findAll();
    }

    @Override
    public Employee createEmployee(Employee employee) {
        // TODO Auto-generated method stub
        Employee newEmployee = new Employee();
        System.out.println(employee.getEmail());
        newEmployee.setFirstName(employee.getFirstName());
        newEmployee.setLastName(employee.getLastName());
        newEmployee.setEmail(employee.getEmail());
        return employeeRepo.save(newEmployee);
    }

    @Override
    public Employee findById(Long id) {
        // TODO Auto-generated method stub
        return employeeRepo.findById(id).orElseThrow(() -> new IllegalStateException("not found employee"));
    }

    @Override
    public void deleteEmployee(Long id) {
        // TODO Auto-generated method stub
        Employee employee = this.findById(id);
        employeeRepo.delete(employee);
    }

    @Override
    public Employee updateEmployee(Employee employee) throws Exception {
        // TODO Auto-generated method stub

        Employee updateEmployee = this.findById(employee.getId());
        for (Field field : employee.getClass().getDeclaredFields()) {
            field.setAccessible(true);
            if (field.get(employee) != null) {
                for (Field fieldUpdate : updateEmployee.getClass().getDeclaredFields()) {
                    fieldUpdate.setAccessible(true);
                    if (field.getName() == fieldUpdate.getName()) {
                        fieldUpdate.set(updateEmployee, field.get(employee));
                    }
                }
            }
        }
        return employeeRepo.save(updateEmployee);
    }

}
