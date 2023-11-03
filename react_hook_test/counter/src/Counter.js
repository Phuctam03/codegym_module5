import { useState } from "react";

function Counter(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncreament = (value) => {
    if (value === true) {
      setCount1((prev) => prev + 1);
    } else {
      setCount2((prev) => prev + 1);
    }
  };

  return (
    <div style={{ margin: 30 }}>
      <p>
        {props.content} : {count1}
      </p>
      <button onClick={() => handleIncreament(true)}>Add 1 </button>

      <p>
        {props.content} :{count2}
      </p>
      <button onClick={() => handleIncreament(false)}>Add 2 </button>
    </div>
  );
}

export default Counter;
