import { useState, useEffect } from "react";
import * as BookService from "../service/BookService";
import "./Booklist.css";
import { Link, useNavigate } from "react-router-dom";
import { BookUpdate } from "./BookUpdate";

export function BookList() {
  const [books, setBooks] = useState([]);
  const [title, setTilte] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllBook();
  }, [title]);

  const getAllBook = async () => {
    let temp = await BookService.getAll(title);
    setBooks(temp);
  };

  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      await BookService.Delete(id);
      alert("delete book successfull");
      getAllBook();
      navigate("/books");
    }
  };

  return (
    <div>
      <h1>Library</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setTilte(e.target.value)}
          placeholder="find by title"
        ></input>
      </div>
      <div className="link-create">
        <Link className="link" to="/create">
          ADD a new Book
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td>
                  <button>
                    <Link className="link-2" to={"/update/" + book.id}>
                      Update
                    </Link>
                  </button>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                  <td></td>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
