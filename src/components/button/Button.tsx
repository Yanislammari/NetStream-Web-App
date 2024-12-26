import React from "react";
import "./Button.css"

interface ButtonProps {
  text: string;
  color: string;
  onClick: () => void;
  isContainsMargin?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, color, isContainsMargin = true, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color, margin: isContainsMargin ? "10px" : "0" }}>{text}</button>
  );
};

export default Button;
