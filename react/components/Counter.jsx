import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button className="neumorphic-btn" onClick={() => count > 0 && setCount(count - 1)}><AiOutlineMinus /></button>
      <span>{count}</span>
      <button className="neumorphic-btn" onClick={() => setCount(count + 1)}><AiOutlinePlus /></button>
    </div>
  );
}