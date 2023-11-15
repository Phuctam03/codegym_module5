import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as BookService from "../service/BookService";

export function BookCreate() {
  const navigate = useNavigate();
  const bookInit = {
    title: "",
    quantity: 0,
  };

  const addNewBook = async (book) => {
    await BookService.save(book);
    alert("add book succesffuly");
    navigate("/books");
  };

  return (
    <div>
      <Formik
        initialValues={bookInit}
        onSubmit={(value) => {
          addNewBook(value);
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
          <button type="submit">ADD</button>
        </Form>
      </Formik>
    </div>
  );
}
