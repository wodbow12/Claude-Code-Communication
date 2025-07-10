import React from 'react';

export const ZenHeader = ({ 
  logo, 
  navigation, 
  actions,
  className = '',
  ...props 
}) => {
  return (
    <header 
      className={`zen-header ${className}`}
      style={{
        backgroundColor: 'var(--color-neutral-50)',
        borderBottom: '1px solid var(--color-neutral-200)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        ...props.style
      }}
      {...props}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {logo}
        </div>
        
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navigation}
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {actions}
        </div>
      </div>
    </header>
  );
};

export const ZenNavLink = ({ 
  href, 
  children, 
  active = false,
  className = '',
  ...props 
}) => {
  return (
    <a 
      href={href}
      className={`zen-nav-link ${active ? 'zen-nav-link--active' : ''} ${className}`}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: active ? 'var(--color-primary-600)' : 'var(--color-neutral-600)',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        transition: 'all 0.3s ease',
        letterSpacing: '0.025em',
        '&:hover': {
          color: 'var(--color-primary-600)',
          backgroundColor: 'var(--color-primary-50)',
        },
        ...props.style
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export const ZenLogo = ({ 
  src, 
  alt = 'Tea Shop Logo', 
  text,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`zen-logo ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        ...props.style
      }}
      {...props}
    >
      {src && (
        <img 
          src={src} 
          alt={alt}
          style={{
            height: '2rem',
            width: 'auto'
          }}
        />
      )}
      
      {text && (
        <span style={{
          fontFamily: 'var(--font-secondary)',
          fontSize: '1.25rem',
          fontWeight: 500,
          color: 'var(--color-neutral-800)',
          letterSpacing: '0.05em'
        }}>
          {text}
        </span>
      )}
    </div>
  );
};

export const ZenBreadcrumb = ({ 
  items = [],
  separator = '/',
  className = '',
  ...props 
}) => {
  return (
    <nav 
      className={`zen-breadcrumb ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.875rem',
        color: 'var(--color-neutral-500)',
        margin: '1rem 0',
        ...props.style
      }}
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span style={{ color: 'var(--color-neutral-400)' }}>
              {separator}
            </span>
          )}
          
          {item.href ? (
            <a 
              href={item.href}
              style={{
                color: 'var(--color-neutral-500)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'var(--color-primary-600)',
                }
              }}
            >
              {item.label}
            </a>
          ) : (
            <span style={{ 
              color: index === items.length - 1 ? 'var(--color-neutral-800)' : 'var(--color-neutral-500)',
              fontWeight: index === items.length - 1 ? 500 : 400
            }}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};