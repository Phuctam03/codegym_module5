import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as studentService from "../service/StudentService";

export function StudentCreate() {
  const navigate = useNavigate();
  const studentInit = {
    name: "",
    age: 0,
    gender: 0,
    languages: [],
  };
  const studentValidate = {
    name: Yup.string()
      .required("Tên không được để trống")
      .matches(
        /^[A-Za-z ]{3,100}$/,
        "Tên không đúng định dang. Example: Truong Tan Hai"
      ),
    age: Yup.number()
      .min(18, "Tuổi không được nhỏ hơn 18")
      .max(100, "Tuổi không được lớn hơn 100"),
  };

  const addNewStudent = async (value) => {
    await studentService.save(value);
    navigate("/students");
  };

  return (
    <Formik
      initialValues={studentInit}
      onSubmit={(value) => {
        addNewStudent(value);
      }}
      validationSchema={Yup.object(studentValidate)}
    >
      <Form>
        <h1>Create Student</h1>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Name :</th>
                <td>
                  <Field type="text" name="name"></Field>
                </td>
                <ErrorMessage name="name" component="span"></ErrorMessage>
              </tr>
              <tr>
                <th>Age :</th>
                <td>
                  <Field type="text" name="age"></Field>
                </td>
                <ErrorMessage name="age" component="span"></ErrorMessage>
              </tr>
              <tr>
                <th>gender :</th>
                <td>
                  <Field type="radio" name="gender" value="0"></Field>
                  <label>Nu</label>
                  <Field type="radio" name="gender" value="1"></Field>
                  <label>Nam</label>
                </td>
              </tr>
              <tr>
                <th>Languages</th>
                <td>
                  <Field type="checkbox" name="languages" value="C#"></Field>
                  <label>C#</label>
                  <Field type="checkbox" name="languages" value="Java"></Field>
                  <label>Java</label>
                  <Field
                    type="checkbox"
                    name="languages"
                    value="ReactJs"
                  ></Field>
                  <label>ReactJs</label>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit">submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Form>
    </Formik>
  );
}
