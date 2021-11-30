import "./App.css";
import { ListEmployee } from "./component/ListEmployee";
import { Header } from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./component/CreateEmployee";
import { UpdateEmployee } from "./component/UpdateEmployee";

function App() {
  return (
    <div className="app-body">
      <Router>
        <div className="">
          <Header />
        </div>
        <div className="App">
          <header className="">
            <Routes>
              <Route path="/" element={<ListEmployee />} />
              <Route path="employees" element={<ListEmployee />} />
              <Route path="add-employee" element={<CreateEmployee />} />
              <Route path="update-employee/:id" element={<UpdateEmployee />} />
            </Routes>
          </header>
        </div>{" "}
      </Router>
    </div>
  );
}

export default App;
