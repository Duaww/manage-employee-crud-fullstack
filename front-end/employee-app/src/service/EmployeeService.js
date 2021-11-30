import axios from "axios";

const EMPLOYEE_BASE_API_URL = "http://localhost:8080/api/employee";

class EmployeeService {
  getListEmployees() {
    return axios.get(EMPLOYEE_BASE_API_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_API_URL, employee);
  }

  getEmployeeById(id) {
    const URL_GET_EMPLOYEE_BY_ID = EMPLOYEE_BASE_API_URL + "/" + id;
    return axios.get(URL_GET_EMPLOYEE_BY_ID);
  }

  updateEmployee(id, employee) {
    const URL_GET_EMPLOYEE_BY_ID = EMPLOYEE_BASE_API_URL + "/" + id;
    return axios.put(URL_GET_EMPLOYEE_BY_ID, employee);
  }

  deleteEmployee(id) {
    const URL_GET_EMPLOYEE_BY_ID = EMPLOYEE_BASE_API_URL + "/" + id;
    return axios.delete(URL_GET_EMPLOYEE_BY_ID);
  }
}

export default new EmployeeService();
