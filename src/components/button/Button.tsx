import React from "react";
import "./Button.css"

interface ButtonProps {
  text: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({text, color}) => {
  return (
    <button style={{ backgroundColor: color }}>{text}</button>
  );
}

export default Button;
