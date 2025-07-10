import React from 'react';

export const ZenButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseStyles = {
    fontFamily: 'var(--font-primary)',
    fontWeight: 500,
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.025em',
    opacity: disabled ? 0.6 : 1,
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary-600)',
      color: 'var(--color-neutral-50)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-700)',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }
    },
    secondary: {
      backgroundColor: 'var(--color-secondary-600)',
      color: 'var(--color-neutral-50)',
      '&:hover': {
        backgroundColor: 'var(--color-secondary-700)',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-600)',
      border: '1px solid var(--color-primary-600)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-50)',
        transform: 'translateY(-1px)',
      }
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-600)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-50)',
      }
    }
  };

  const sizes = {
    small: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      minHeight: '2rem',
    },
    medium: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      minHeight: '2.5rem',
    },
    large: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
      minHeight: '3rem',
    }
  };

  return (
    <button
      className={`zen-button zen-button--${variant} zen-button--${size} ${className}`}
      style={{
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
        ...props.style
      }}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const ZenIconButton = ({ 
  children, 
  size = 'medium', 
  className = '',
  disabled = false,
  ...props 
}) => {
  const sizeMap = {
    small: '2rem',
    medium: '2.5rem',
    large: '3rem'
  };

  return (
    <button
      className={`zen-icon-button zen-icon-button--${size} ${className}`}
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'var(--color-neutral-100)',
        color: 'var(--color-neutral-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        opacity: disabled ? 0.6 : 1,
        '&:hover': {
          backgroundColor: 'var(--color-neutral-200)',
          transform: 'scale(1.05)',
        },
        ...props.style
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};