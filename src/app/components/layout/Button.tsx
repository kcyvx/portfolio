import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-primary ${className}`}>
      {children}
    </button>
  );
}