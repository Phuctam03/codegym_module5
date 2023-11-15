import { useEffect, useState } from "react";
import * as studentService from "../service/StudentService";
import axios from "axios";
import { NavLink } from "react-router-dom";

export function StudentList() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [languages, setLanguages] = useState("");

  useEffect(() => {
    getAllStudent();
  }, [name, languages]);

  const getAllStudent = async () => {
    let temp = await studentService.getAll(name, languages);
    console.log(temp);
    setStudents(temp);
  };

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="find by name"
      ></input>
      <input
        onChange={(e) => setLanguages(e.target.value)}
        placeholder="find By name"
      ></input>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>
                  {student.languages.map((value, index) => {
                    return <span key={index}>{value},</span>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
