import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function LabPage() {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/"); // auto redirect
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleExit = () => {
    navigate("/");
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="lab-page">
      <h1>Welcome to the Lab!</h1>
      <p>
        Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <button onClick={handleExit}>Exit Lab</button>
    </div>
  );
}
