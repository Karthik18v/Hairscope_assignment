import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const navigate = useNavigate();

  const checkPassword = () => {
    if (password === "Karthik") {
      setUnlocked(true);
      setTimeout(() => {
        navigate("/lab");
      }, 1200); // wait for animation
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="App">
      <div className={`left-box ${unlocked ? "slide-left" : ""}`}>
        <h3>JAVA</h3>
        <p>
          This course is provided by<strong> Zincop labs</strong>.
        </p>
        <ul className="list">
          <li>Labs</li>
          <li>Exercises</li>
          <li>Do it for yourself</li>
        </ul>
        <strong>EXERCISES</strong>
        <p>9 Completed out of 84.</p>
        <strong>PROJECTS</strong>
        <p>2 Completed out of 84.</p>
        <strong>TIME SPENT</strong>
        <p>5 Completed out of 84.</p>
      </div>

      <div className={`right-box ${unlocked ? "slide-right" : ""}`}>
        <strong>50 mins left out of 60</strong>
      </div>

      <div className={`login-box ${unlocked ? "rotate-out" : ""}`}>
        <h6>Login</h6>
        <label>Enter Your Zincop password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
          type="password"
        />
        <button className="login-button" onClick={checkPassword}>
          Enter lab
        </button>
      </div>
    </div>
  );
}
