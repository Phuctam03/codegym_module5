import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { StudentList } from "./components/StudentList";
import { NotFound } from "./components/NotFound";
import { StudentCreate } from "./components/StudentCreate";

function App() {
  return (
    <div className="App">
      <NavLink to={"/students"}>List</NavLink>
      <NavLink to={"/create"}>Create</NavLink>
      <Routes>
        <Route path="/students" element={<StudentList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/create" element={<StudentCreate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
