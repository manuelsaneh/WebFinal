import { InputHTMLAttributes } from "react";
import "./custom-input.css";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...props} />
    </>
  );
};

export default CustomInput;
