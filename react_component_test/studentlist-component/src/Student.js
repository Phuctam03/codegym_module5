import "./Student.css";

const studentList = [
  {
    id: 1,
    name: "Nguyễn Thành Long",
    Age: "20",
    Address: "Đà nẵng",
  },
  {
    id: 2,
    name: "Nguyễn Kiều My",
    Age: "20",
    Address: "Đà nẵng",
  },
  {
    id: 3,
    name: "Huỳnh Mai Linh",
    Age: "20",
    Address: "Đà nẵng",
  },
  {
    id: 4,
    name: "Dương Thành long",
    Age: "20",
    Address: "Đà nẵng",
  },
  {
    id: 5,
    name: "Tôn Nữ Ngọc Quỳnh",
    Age: "20",
    Address: "Đà nẵng",
  },
  {
    id: 6,
    name: "Nguyễn Kim thành",
    Age: "20",
    Address: "Đà nẵng",
  },
];
function Students() {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {studentList.map((student) => (
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.Age}</td>
            <td>{student.Address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Students;
