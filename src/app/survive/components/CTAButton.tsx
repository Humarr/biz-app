'use client';
import React from 'react';

interface CTAButtonProps {
  /** The main text displayed on the button */
  buttonText: string;
  
  /** The URL the button links to */
  href: string;
  
  /** Optional: Subtext displayed below the button */
  subtext?: string;
  
  /** Optional: CSS classes for the button */
  buttonClassName?: string;
  
  /** Optional: CSS classes for the subtext */
  subtextClassName?: string;
  
  /** Optional: CSS classes for the container */
  containerClassName?: string;
  
  /** Optional: Should the button open in a new tab? */
  openInNewTab?: boolean;
  
  /** Optional: Additional button styling */
  buttonStyle?: React.CSSProperties;
  
  /** Optional: Icon to display before button text */
  iconBefore?: React.ReactNode;
  
  /** Optional: Icon to display after button text */
  iconAfter?: React.ReactNode;
  
  /** Optional: Callback when button is clicked */
  onClick?: () => void;
  
  /** Optional: Button type */
  type?: 'button' | 'submit' | 'reset';
  
  /** Optional: Button variant for predefined styles */
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  
  /** Optional: Button size */
  size?: 'small' | 'medium' | 'large';
  
  /** Optional: Disabled state */
  disabled?: boolean;
  
  /** Optional: Loading state */
  isLoading?: boolean;
  
  /** Optional: Loading text when isLoading is true */
  loadingText?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  buttonText,
  href,
  subtext,
  buttonClassName = '',
  subtextClassName = '',
  containerClassName = '',
  openInNewTab = false,
  buttonStyle = {},
  iconBefore,
  iconAfter,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...'
}) => {
  
  // Predefined variants
  const variantClasses = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 border-gray-800',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-300',
    outline: 'bg-transparent text-gray-900 border-2 border-gray-800 hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 border-red-800',
    success: 'bg-green-600 text-white hover:bg-green-700 border-green-800'
  };
  
  // Predefined sizes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  // Base button classes
  const baseButtonClasses = `rounded-lg font-semibold transition-colors cursor-pointer shadow-lg border-2 border-dotted disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`;
  
  // Combine all button classes
  const combinedButtonClasses = `
    ${baseButtonClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${buttonClassName}
    ${isLoading ? 'opacity-75 cursor-wait' : ''}
  `.trim();
  
  // Default subtext classes
  const defaultSubtextClasses = 'text-gray-600 text-sm mt-2';
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled || isLoading) {
      e.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  const renderButtonContent = () => (
    <>
      {isLoading ? (
        <>
          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {iconBefore && <span>{iconBefore}</span>}
          <span>{buttonText}</span>
          {iconAfter && <span>{iconAfter}</span>}
        </>
      )}
    </>
  );
  
  return (
    <div className={`text-center ${containerClassName}`}>
      <a
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        onClick={handleClick}
        className="inline-block"
      >
        <button
          type={type}
          className={combinedButtonClasses}
          style={buttonStyle}
          disabled={disabled || isLoading}
        >
          {renderButtonContent()}
        </button>
      </a>
      
      {subtext && (
        <p className={`${defaultSubtextClasses} ${subtextClassName}`}>
          {subtext}
        </p>
      )}
    </div>
  );
};

export default CTAButton;