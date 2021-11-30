import React, { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import "./ListEmployee.css";
import { useNavigate } from "react-router-dom";

export const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getListEmployees = () => {
      EmployeeService.getListEmployees()
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getListEmployees();
  }, []);

  function addEmployee() {
    navigate("/add-employee");
  }

  function editEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function deleteEmployee(id) {
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        setEmployees(employees.filter((employee) => employee.id != id));
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/employees");
  }

  return (
    <div className="">
      <h2 className="">Employees List</h2>
      <div class="div-btn-add">
        <button type="" className="add-btn" onClick={() => addEmployee()}>
          Add Employee
        </button>
      </div>
      <div className="body">
        <div class=""></div>
        <table className="table">
          <thead className="">
            <tr className="">
              <th className="">First Name</th>
              <th className="">Last Name</th>
              <th className="">Email</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="">{employee.firstName}</td>
                <td className="">{employee.lastName}</td>
                <td className="">{employee.email}</td>
                <td className="">
                  <button
                    type=""
                    className="delete-btn"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                  <button
                    type=""
                    className="update-btn"
                    onClick={() => editEmployee(employee.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
