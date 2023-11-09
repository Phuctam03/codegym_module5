import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
