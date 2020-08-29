import React, {useState, useEffect} from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, [time]);

  return (
    <div>
      <p>It's now {time.toLocaleTimeString()}</p>
      <strong>😁👍 Happy Coding !!!</strong>
    </div>
  );
}
