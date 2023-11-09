import { useState, useEffect } from "react";
import "./Booklist.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function BookList() {
  const [books, setBooks] = useState([]);
  const BookInit = {
    title: "",
    amount: 0,
  };
  const validateBook = {
    title: Yup.string().required("Required"),
    amount: Yup.number().required("Required"),
  };

  const handleDelete = (index) => {
    setBooks(() =>
      books.filter((prevbook, indexbook) => {
        return indexbook !== index;
      })
    );
  };

  useEffect(() => {
    setBooks([
      {
        title: "một ngàn câu hỏi vì sao ",
        amount: 12,
      },
      {
        title: "HarryPorter ",
        amount: 12,
      },
      {
        title: "Doraemon",
        amount: 12,
      },
      {
        title: "Conan ",
        amount: 12,
      },
      {
        title: "dragonball",
        amount: 12,
      },
      {
        title: "đắc nhân tâm",
        amount: 5,
      },
    ]);
  }, []);

  return (
    <div>
      <Formik
        initialValues={BookInit}
        onSubmit={(value) => {
          setBooks((prev) => {
            return [...prev, value];
          });
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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.amount}</td>
              <td>
                <button onClick={() => alert(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookList;
