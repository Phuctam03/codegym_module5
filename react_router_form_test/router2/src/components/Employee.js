import { useState, useEffect, useNavigate } from "react";
import "./Employee.css";

export function Employee() {
  const [employees, setEmployees] = useState([]);

  console.log(employees);
  useEffect(() => {
    setEmployees([
      {
        id: 1,
        name: "Hoa",
        age: 20,
      },
      {
        id: 2,
        name: "Khánh",
        age: 25,
      },
      {
        id: 3,
        name: "Tú",
        age: 22,
      },
    ]);
  }, []);

  return (
    <div>
      <table className="container">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
