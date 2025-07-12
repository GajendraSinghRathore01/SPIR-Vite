// ToastContext.tsx
import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext<any>(null);
type ToastProviderProps = {
  children: React.ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const showToast = (
    message: string,
    type: "success" | "error" | "info" | "warning" 
  ) => {
    toast[type](message);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer position="top-right" autoClose={2000} />
    </ToastContext.Provider>
  );
};


export const useToast = () => {
  return useContext(ToastContext);
};
