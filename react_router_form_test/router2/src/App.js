import { Employee } from "./components/Employee";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/employees" element={<Employee />}></Route>
      </Routes>
    </div>
  );
}

export default App;
