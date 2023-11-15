import { Routes, Route } from "react-router-dom";
import { ContactList } from "./components/ContactList";
import { ContactCreate } from "./components/ContactCreate";
import { ContactUpdate } from "./components/ContactUpdate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/contacts" element={<ContactList />}></Route>
        <Route path="/create" element={<ContactCreate />}></Route>
        <Route path="/update/:id" element={<ContactUpdate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
