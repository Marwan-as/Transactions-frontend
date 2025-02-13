import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" ;
  color?: "gray" | "white";
  children?: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ type = "button", color = "gray", children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      className={`${
        color === "white"
          ? "text-gray-700 bg-gray-100 hover:text-gray-100 hover:bg-gray-700"
          : "text-gray-100 bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
      } cursor-pointer px-6 py-2 text-sm font-medium  rounded-full shadow-md duration-50`}
    >
      {children}
    </button>
  );
};

export default Button;
