import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
}

export const Button: FC<ButtonProps> = ({ className = "", text, onClick, disabled }) => (
  <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
