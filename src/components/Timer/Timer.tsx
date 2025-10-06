import './hello/hello.css';
import { useState, useEffect } from 'react'

  
function Timer({interval}: {interval: number}) {
  const [count, setCount] = useState(0);
const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + (isActive ? 1 : 0));
    }, interval);
    return () => clearInterval(intervalId);
  }, [interval, isActive]);

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}
export default Timer;