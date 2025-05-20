import { useState, useEffect } from "react";

function Footer() {
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  const updateTime = () => {
    const date = new Date();
    setHour(date.getHours());
    setMinutes(date.getMinutes());
  };
  useEffect(() => {
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <p>
        It is {hour < 10 ? "0" + hour : hour}:
        {minutes < 10 ? "0" + minutes : minutes}
        {hour >= 12 ? " PM" : " AM"} now. We're{" "}
        {hour >= 22 || hour < 9
          ? "currently closed. We open at 09:00 AM"
          : "open until 22:00 PM. Come visit us or order online"}
        !
      </p>
    </footer>
  );
}

export default Footer;
