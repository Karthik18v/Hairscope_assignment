import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainPage.css";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss, SiGraphql, SiTensorflow, SiC } from "react-icons/si";

const skills = [
  { name: "React JS", icon: <FaReact color="#61DBFB" size={40} /> },
  { name: "C", icon: <SiC color="#004482" size={40} /> },
  { name: "Angular", icon: <FaAngular color="#DD0031" size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" size={40} /> },
  { name: "GraphQL", icon: <SiGraphql color="#E10098" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" size={40} /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" size={40} /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34C26" size={40} /> },
  { name: "Python", icon: <FaPython color="#FFD43B" size={40} /> },
  { name: "PHP", icon: <FaPhp color="#8993BE" size={40} /> },
];

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (skillName) => {
    const confirmed = window.alert(`labs/${skillName}`);
    // After OK → navigate to login page
    navigate("/login");
  };

  return (
    <div className="app">
      <div className="left-panel">
        <select className="dropdown">
          <option>Programming</option>
          <option>Design</option>
          <option>DevOps</option>
        </select>

        <div className="arrows">
          <div></div>
          <div className="arrow">↑</div>
          <div></div>
          <div className="arrow">←</div>
          <div className="arrow">↓</div>
          <div className="arrow">→</div>
        </div>

        <button className="enter-btn">Enter Labs</button>
      </div>

      <div className="grid">
        {Array.from({ length: 24 }).map((_, i) => {
          const skill = skills[i];
          return (
            <div
              key={i}
              className="cell"
              onClick={() => skill && handleClick(skill.name)}
              style={{ cursor: skill ? "pointer" : "default" }}
            >
              {skill ? skill.icon : <div className="empty"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
