import logo from "./logo.svg";
import "./App.css";
import Alert from "./AlertComponent";

const text = "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.";
function App() {
  return (
    <div>
      <Alert text={text} />
    </div>
  );
}

export default App;
