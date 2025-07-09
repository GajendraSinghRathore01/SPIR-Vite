import React from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  styleLabel?: string;
  styleInput?: string;
  register: UseFormRegister<any>; // you can replace `any` with your form type
  errors: FieldErrors<any>; // same here
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
  return (
    <div className="flex flex-col space-y-1 ">
      <label className={styleLabel}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styleInput}
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-xs text-red-600">
          {errors[name]?.message as string}
        </p>
      )}
      
    </div>
  );
};

export default InputField;
