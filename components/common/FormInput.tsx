"use client";

import { InputHTMLAttributes, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

type FormInputProps = {
  label?: string;
  type?: string;
  errors?: FieldError;
  password?: boolean;
  isRequire?:boolean;
  register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormInput({
  label,
  register,
  errors,
  type,
  isRequire=false,
  password = false,
  hidden=false,
  ...rest
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (

    <div className={`${hidden ? "hidden" : ""} flex flex-col gap-1 relative`}>
      <label htmlFor={label} className={`mb-1 text-gray-700 dark:text-fill-primary text-sm ${isRequire ? "font-semibold":""}`}>
        {label} {isRequire && <span className="text-red">*</span>}
      </label>
      <input
        type={showPassword ? (type === "password" ? "text" : type) : type}
        id={label}
        {...register}
        {...rest}
        className="border border-stroke-secondary dark:border-fill-primary rounded-md px-3 py-2 focus:outline-none "
      />
      {password && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      )}
      {errors && (
        <p className="text-red-500 text-xs absolute -bottom-4 mt-1">
          {errors.message}
        </p>
      )}
    </div>
  );
}
