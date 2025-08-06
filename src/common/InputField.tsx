import React, { useState } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  styleLabel?: string;
  styleInput?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder = "",
  styleLabel = "",
  styleInput = "",
  register,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className={styleLabel}>{label}</label>
      <div className={`flex justify-between  bg-white ${styleInput}`}>
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          {...register(name)}
          className="w-full outline-none"
        />
        {type === "password" && (
          <span className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? `👀` : `🙈`}
          </span>
        )}
      </div>
      {errors[name] && (
        <p className="text-xs text-red-600">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default InputField;
