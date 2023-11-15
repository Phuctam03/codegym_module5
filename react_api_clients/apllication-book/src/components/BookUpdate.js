import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as bookService from "../service/BookService";

export function BookUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    // bookService
    //   .findById(id)
    //   .then((res) => {
    //     setBook(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    findById();
  }, [id]);

  const updateBook = async (book) => {
    await bookService.Update(id, book);
    alert("update is successfully");
    navigate("/books");
  };

  const findById = async () => {
    let temp = await bookService.findById(id);
    setBook(temp);
  };

  if (!book) return null;

  return (
    <div>
      <Formik
        initialValues={book}
        onSubmit={(value) => {
          updateBook(value);
        }}
      >
        <Form>
          <h1>Add a new Book</h1>
          <label htmlFor="bookTitle">title</label>
          <br />
          <Field type="text" name="title"></Field>
          <br />
          <label htmlFor="bookQuantity">quantity</label>
          <br />
          <Field type="text" name="quantity"></Field>
          <br />
          <button type="submit">Update</button>
        </Form>
      </Formik>
    </div>
  );
}
