import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./FormContact.css";
import { useEffect } from "react";

function FormContact() {
  const studentInit = {
    name: "",
    email: "",
    phone: "",
    Message: "",
  };

  const validateStudent = {
    email: Yup.string()
      .required("khong duoc de trong")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "email phai dung dinh dang ,vd : hophuctam@gmail.com"
      ),
  };

  useEffect(() => {
    return () => {
      alert("stop");
    };
  });
  return (
    <Formik
      initialValues={studentInit}
      onSubmit={(value) => {
        console.log(value);
        alert("Add contact successfully");
      }}
      validationSchema={Yup.object().shape(validateStudent)}
    >
      <Form>
        <h1>Contact form</h1>
        <table>
          <tbody>
            <tr>
              <th>
                <label htmlFor="formName">Name</label>
              </th>
            </tr>
            <tr>
              <td>
                <Field type="text" name="name" id="formName"></Field>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="formEmail">email</label>
              </th>
            </tr>
            <tr>
              <td>
                <Field type="text" name="email" id="formEmail"></Field>
                <ErrorMessage name="email" component="span"></ErrorMessage>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="formPhone">Phone</label>
              </th>
            </tr>
            <tr>
              <td>
                <Field type="text" name="phone" id="formPhone"></Field>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="formMessage">Message</label>
              </th>
            </tr>
            <tr>
              <td>
                <Field
                  as="textarea"
                  cols="30"
                  rows="4"
                  name="Message"
                  id="formMessage"
                ></Field>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">Submmit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Form>
    </Formik>
  );
}

export default FormContact;
