import logo from "./logo.svg";
import "./App.css";
import Car from "./Car";

const title = "Select your car";
const firstContent = "Select a car";
const secondContent = "Select a color";
function App() {
  return (
    <div>
      <Car
        title={title}
        firstContent={firstContent}
        secondContent={secondContent}
      />
    </div>
  );
}

export default App;
