// components/CustomButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface CustomButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  onClick,
  children,
  className = '',
  ariaLabel,
  type = 'button',
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <button
      className={`mt-4 bg-accent hover:bg-red-800 transition text-white px-8 py-3 rounded font-bold uppercase ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel || typeof children === 'string' ? (children as string) : ''}
      type={type}
        >
      {children}
    </button>
  );
};

export default CustomButton;
