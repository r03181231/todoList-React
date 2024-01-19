import React, { useEffect, useState } from "react";
import "./CurrTime.css";

export const CurrTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const moment = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(moment);
  }, []);
  return (
    <>
      <div className="date">
        <p>{time.toLocaleTimeString()}</p>
      </div>
    </>
  );
};

export default CurrTime;
