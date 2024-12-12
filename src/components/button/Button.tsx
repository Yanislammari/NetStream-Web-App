import React from "react";
import "./Button.css"

interface ButtonProps {
  text: string;
  color: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
  );
};

export default Button;
