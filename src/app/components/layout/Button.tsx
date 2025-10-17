import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button {...props} className={`btn-primary ${className}`}>
      {children}
    </button>
  );
}