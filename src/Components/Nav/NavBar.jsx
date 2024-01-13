import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentDateWithDay, setCurrentDateWithDay] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now);
      setCurrentDateWithDay(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      );
    }, 1000);

    // Cleanup interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="date-time">
        <h1>{currentDateTime.toLocaleTimeString("en-US")}</h1>
        <h1>{currentDateWithDay}</h1>
      </div>
    </>
  );
};

export default Navbar;
