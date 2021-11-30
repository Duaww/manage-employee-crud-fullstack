import React, { useState } from "react";
import "./CreateEmployee.css";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

export const CreateEmployee = () => {
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function submitForm() {
    let employee = { firstName: firstName, lastName: lastName, email: email };
    EmployeeService.createEmployee(employee)
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
        <h2 className="">Add Employee</h2>
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
