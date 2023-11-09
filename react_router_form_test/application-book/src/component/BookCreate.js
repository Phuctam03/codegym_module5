import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

function BookCreate() {
  const BookInit = {
    title: "",
    amount: 0,
  };
  const validateBook = {
    title: Yup.string().required("Required"),
    amount: Yup.number().required("Required"),
  };

  return (
    <div>
      <Formik
        initialValues={BookInit}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object(validateBook)}
      >
        <Form>
          <label htmlFor="bookTitle" style={{ fontWeight: "bold" }}>
            Tiêu đề
          </label>
          <br></br>
          <Field type="text" id="bookTitle" name="title"></Field>
          <ErrorMessage
            style={{ color: "red" }}
            name="title"
            component="span"
          ></ErrorMessage>
          <br></br>
          <label style={{ fontWeight: "bold" }} htmlFor="bookAmount">
            Số Lượng
          </label>
          <br></br>
          <Field type="text" id="bookAmount" name="amount"></Field>
          <ErrorMessage
            style={{ color: "red" }}
            name="amount"
            component="span"
          ></ErrorMessage>

          <br></br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
export default BookCreate;
