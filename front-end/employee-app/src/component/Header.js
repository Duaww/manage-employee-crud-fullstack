import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  function listEmployee(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div>
      <header className="employee-app-header">
        <nav className="">
          <a
            href=""
            className="employee-app-link"
            onClick={(e) => listEmployee(e)}
          >
            Employee Management App
          </a>
        </nav>
      </header>
    </div>
  );
};
