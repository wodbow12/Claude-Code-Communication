import React from 'react';

export const ZenContainer = ({ children, className = '', ...props }) => (
  <div 
    className={`zen-container ${className}`}
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      ...props.style
    }}
    {...props}
  >
    {children}
  </div>
);

export const ZenSection = ({ children, className = '', spacing = 'large', ...props }) => (
  <section 
    className={`zen-section zen-section--${spacing} ${className}`}
    style={{
      padding: spacing === 'large' ? '6rem 0' : spacing === 'medium' ? '4rem 0' : '2rem 0',
      ...props.style
    }}
    {...props}
  >
    {children}
  </section>
);

export const ZenGrid = ({ children, columns = 3, gap = '2rem', className = '', ...props }) => (
  <div 
    className={`zen-grid ${className}`}
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: gap,
      alignItems: 'start',
      ...props.style
    }}
    {...props}
  >
    {children}
  </div>
);

export const ZenCard = ({ children, className = '', elevated = false, ...props }) => (
  <div 
    className={`zen-card ${elevated ? 'zen-card--elevated' : ''} ${className}`}
    style={{
      backgroundColor: 'var(--color-neutral-50)',
      borderRadius: '0.75rem',
      padding: '2rem',
      boxShadow: elevated ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none',
      border: elevated ? 'none' : '1px solid var(--color-neutral-200)',
      transition: 'all 0.3s ease',
      ...props.style
    }}
    {...props}
  >
    {children}
  </div>
);

export const ZenDivider = ({ className = '', orientation = 'horizontal', ...props }) => (
  <div 
    className={`zen-divider zen-divider--${orientation} ${className}`}
    style={{
      backgroundColor: 'var(--color-neutral-200)',
      ...(orientation === 'horizontal' 
        ? { height: '1px', width: '100%', margin: '3rem 0' }
        : { width: '1px', height: '100%', margin: '0 3rem' }
      ),
      ...props.style
    }}
    {...props}
  />
);

export const ZenSpacer = ({ size = 'medium', className = '', ...props }) => {
  const spacingMap = {
    small: '1rem',
    medium: '2rem',
    large: '4rem',
    xlarge: '6rem'
  };
  
  return (
    <div 
      className={`zen-spacer zen-spacer--${size} ${className}`}
      style={{
        height: spacingMap[size] || spacingMap.medium,
        ...props.style
      }}
      {...props}
    />
  );
};