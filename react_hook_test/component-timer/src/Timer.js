import { useState, useEffect } from "react";

function Time(props) {
  const [time, setTime] = useState(10);

  console.log(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (time === 0) {
      alert("time's up");
    }
  }, [time]);

  return (
    <div>
      <span style={{ padding: 5 }}>
        {props.content}
        {time}
      </span>
    </div>
  );
}

export default Time;
