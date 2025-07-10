import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-white border-2 border-b-black text-black px-4 py-2 rounded-md hover:bg-gray-200"
      {...props}
    >
      {children}
    </button>
  );
};
