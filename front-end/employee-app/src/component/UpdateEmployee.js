import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CreateEmployee.css";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

export const UpdateEmployee = () => {
  const { id } = useParams();
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployeeById = () => {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setFistName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getEmployeeById();
  }, []);

  function submitForm() {
    let employee = { firstName: firstName, lastName: lastName, email: email };
    EmployeeService.updateEmployee(id, employee)
      .then((res) => {
        console.log(res.data);
        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function cancle() {
    navigate("/employees");
  }

  return (
    <div className="body-form-add">
      <div className="form-add">
        <h2 className="">Update Employee</h2>
        <div className="">
          <form className="">
            <div className="">
              <label for="" className="">
                First Name:{" "}
              </label>
              <input
                type="text"
                name=""
                value={firstName}
                onChange={(e) => setFistName(e.target.value)}
                className=""
                placeholder="First Name"
              />
            </div>
            <div className="">
              <label for="" className="">
                Last Name:{" "}
              </label>
              <input
                type="text"
                name=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className=""
                placeholder="Last Name"
              />
            </div>
            <div className="">
              <label for="" className="">
                Email:{" "}
              </label>
              <input
                type="text"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=""
                placeholder="Email"
              />
            </div>
          </form>
          <div className="div-btn">
            <button type="" className="save-btn" onClick={() => submitForm()}>
              Save
            </button>
            <button type="" className="cancle-btn" onClick={() => cancle()}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
