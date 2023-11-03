import { useState } from "react";

const carList = [
  "Mercedes S600",
  "Mercedes EQS500",
  "Mercedes C-Class",
  "Mercedes S450",
];

const colorList = ["Black", "grey", "White", "Pink"];

function Car(props) {
  const [car, setCar] = useState(carList[0]);
  const [color, setColor] = useState(colorList[0]);

  return (
    <div>
      <h1 style={{ color: "black" }}>{props.title}</h1>
      {/* <p>
        {props.firstContent}
        <select style={{ margin: 10 }} onChange={(e) => setCar(e.target.value)}>
          <option value={carList[0]}>Mercedes S600</option>
          <option value={carList[1]}>Mercedes EQS500</option>
          <option value={carList[2]}>Mercedes C-Class</option>
          <option value={carList[3]}>Mercedes S450</option>
        </select>
      </p> */}
      <p>
        {props.firstContent}
        <select style={{ margin: 10 }} onChange={(e) => setCar(e.target.value)}>
          <option>Mercedes S600</option>
          <option>Mercedes EQS500</option>
          <option>Mercedes C-Class</option>
          <option>Mercedes S450</option>
        </select>
      </p>
      {/* <p>
        {props.secondContent}
        <select
          style={{ margin: 10 }}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value={colorList[0]}>Black</option>
          <option value={colorList[1]}>grey</option>
          <option value={colorList[2]}>White</option>
          <option value={colorList[3]}>Pink</option>
        </select>
      </p> */}
      <p>
        {props.secondContent}
        <select
          style={{ margin: 10 }}
          onChange={(e) => setColor(e.target.value)}
        >
          <option>Black</option>
          <option>grey</option>
          <option>White</option>
          <option>Pink</option>
        </select>
      </p>
      <p style={{ fontWeight: "bold" }}>
        You selected a {color} - {car}
      </p>
    </div>
  );
}

export default Car;
