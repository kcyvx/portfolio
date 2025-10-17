import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ 
  children, 
}: ContainerProps) {
  return (
    <div className={`max-w-[800px] mx-auto px-4`}>
      {children}
    </div>
  );
}