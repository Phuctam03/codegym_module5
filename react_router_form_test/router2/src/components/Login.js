import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const accountInit = {
    account: "",
    password: "",
  };

  return (
    <div>
      <Formik
        initialValues={accountInit}
        onSubmit={(value) => {
          if (
            value.account === "admin@gmail.com" &&
            value.password === "letmein"
          ) {
            navigate("/employees");
          }
          console.log(value);
        }}
      >
        <Form>
          <h2>Acccount</h2>
          <table>
            <tr>
              <th>acccount</th>
              <td>
                <Field type="text" name="account"></Field>
              </td>
            </tr>
            <tr>
              <th>password</th>
              <td>
                <Field type="password" name="password"></Field>
              </td>
            </tr>
          </table>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
