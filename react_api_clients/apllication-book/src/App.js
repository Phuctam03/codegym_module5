import { BookCreate } from "./components/BookCreate";
import { BookUpdate } from "./components/BookUpdate";
import { BookList } from "./components/Booklist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/create" element={<BookCreate />}></Route>
        <Route path="/update/:id" element={<BookUpdate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
