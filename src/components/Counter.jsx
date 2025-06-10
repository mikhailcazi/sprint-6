import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const onButtonClicked = () => setCount(count + 1);
  return <button onClick={onButtonClicked}>Count: {count}</button>;
}

export default Counter;
