import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

export function FormEmail() {
  const emailInit = {
    to: "",
    title: "",
    Message: "",
    file: null,
  };

  const validateEmail = {
    to: Yup.string()
      .required("không được để trống")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "email phải đúng định dạng vd:phuctam@gmail.com"
      ),
    title: Yup.string().required("không được để trống"),
    Message: Yup.string().required("không được để trống"),
  };
  return (
    <div>
      <Formik
        initialValues={emailInit}
        onSubmit={(values) => {
          console.log(values);
          alert("Sent Successfully");
        }}
        validationSchema={Yup.object(validateEmail)}
      >
        <Form>
          <h1>Mail form</h1>
          <label htmlFor="emailTo">To</label>
          <br></br>
          <Field type="text" id="emailTo" name="to"></Field>
          <ErrorMessage name="to" component="span"></ErrorMessage>
          <br></br>
          <label htmlFor="emailTitle">Title</label>
          <br></br>
          <Field type="text" id="emailTitle" name="title"></Field>
          <ErrorMessage name="title" component="span"></ErrorMessage>
          <br></br>
          <label htmlFor="emailMessage">Message</label>
          <br></br>
          <Field as="textarea" id="emailMessage" name="Message"></Field>
          <ErrorMessage name="Message" component="span"></ErrorMessage>
          <br />
          <Field type="file" name="file"></Field>
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
