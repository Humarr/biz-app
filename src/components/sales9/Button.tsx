'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    route?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className, type, route }) => {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                if (onClick) onClick();
                router.push(route || '');
            }}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
