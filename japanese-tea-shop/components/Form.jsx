import React from 'react';

export const ZenInput = ({ 
  label, 
  type = 'text', 
  placeholder,
  error,
  helperText,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`zen-input-group ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        ...props.containerStyle
      }}
    >
      {label && (
        <label style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-neutral-700)',
          letterSpacing: '0.025em'
        }}>
          {label}
        </label>
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '1rem',
          padding: '0.75rem 1rem',
          border: `1px solid ${error ? 'var(--color-accent-400)' : 'var(--color-neutral-300)'}`,
          borderRadius: '0.5rem',
          backgroundColor: 'var(--color-neutral-50)',
          color: 'var(--color-neutral-800)',
          transition: 'all 0.3s ease',
          '&:focus': {
            outline: 'none',
            borderColor: error ? 'var(--color-accent-500)' : 'var(--color-primary-500)',
            boxShadow: `0 0 0 3px ${error ? 'rgba(211, 93, 55, 0.1)' : 'rgba(157, 132, 95, 0.1)'}`,
          },
          '&::placeholder': {
            color: 'var(--color-neutral-400)',
          },
          ...props.style
        }}
        {...props}
      />
      
      {error && (
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--color-accent-600)',
          fontWeight: 500
        }}>
          {error}
        </span>
      )}
      
      {helperText && !error && (
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--color-neutral-500)'
        }}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export const ZenTextarea = ({ 
  label, 
  placeholder,
  rows = 4,
  error,
  helperText,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`zen-textarea-group ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        ...props.containerStyle
      }}
    >
      {label && (
        <label style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-neutral-700)',
          letterSpacing: '0.025em'
        }}>
          {label}
        </label>
      )}
      
      <textarea
        placeholder={placeholder}
        rows={rows}
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '1rem',
          padding: '0.75rem 1rem',
          border: `1px solid ${error ? 'var(--color-accent-400)' : 'var(--color-neutral-300)'}`,
          borderRadius: '0.5rem',
          backgroundColor: 'var(--color-neutral-50)',
          color: 'var(--color-neutral-800)',
          resize: 'vertical',
          transition: 'all 0.3s ease',
          '&:focus': {
            outline: 'none',
            borderColor: error ? 'var(--color-accent-500)' : 'var(--color-primary-500)',
            boxShadow: `0 0 0 3px ${error ? 'rgba(211, 93, 55, 0.1)' : 'rgba(157, 132, 95, 0.1)'}`,
          },
          '&::placeholder': {
            color: 'var(--color-neutral-400)',
          },
          ...props.style
        }}
        {...props}
      />
      
      {error && (
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--color-accent-600)',
          fontWeight: 500
        }}>
          {error}
        </span>
      )}
      
      {helperText && !error && (
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--color-neutral-500)'
        }}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export const ZenSelect = ({ 
  label, 
  options = [],
  placeholder = 'Select an option',
  error,
  helperText,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`zen-select-group ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        ...props.containerStyle
      }}
    >
      {label && (
        <label style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-neutral-700)',
          letterSpacing: '0.025em'
        }}>
          {label}
        </label>
      )}
      
      <select
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '1rem',
          padding: '0.75rem 1rem',
          border: `1px solid ${error ? 'var(--color-accent-400)' : 'var(--color-neutral-300)'}`,
          borderRadius: '0.5rem',
          backgroundColor: 'var(--color-neutral-50)',
          color: 'var(--color-neutral-800)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:focus': {
            outline: 'none',
            borderColor: error ? 'var(--color-accent-500)' : 'var(--color-primary-500)',
            boxShadow: `0 0 0 3px ${error ? 'rgba(211, 93, 55, 0.1)' : 'rgba(157, 132, 95, 0.1)'}`,
          },
          ...props.style
        }}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && (
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--color-accent-600)',
          fontWeight: 500
        }}>
          {error}
        </span>
      )}
      
      {helperText && !error && (
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--color-neutral-500)'
        }}>
          {helperText}
        </span>
      )}
    </div>
  );
};