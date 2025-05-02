import { useEffect, useState } from "react";

const Counter = ({ targetNumber, duration = 1500, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const end = parseInt(targetNumber);
    if (isNaN(end)) return;

    const stepTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration, start]);

  return <span className="transition-all duration-200">{count}</span>;
};

export default Counter;
