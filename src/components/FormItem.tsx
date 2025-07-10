import React from "react";

interface FormItemProps {
  children: React.ReactNode;
  label: string;
  error?: string;
}

export const FormItem = ({ children, label, error }: FormItemProps) => {
  return (
    <div className="flex flex-col gap-2 w-full border-2 border-gray-300 rounded-md p-2">
      <label htmlFor={label} className="text-sm font-medium">
        {label}
      </label>
      <div className="flex flex-col gap-2 ml-2">{children}</div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
