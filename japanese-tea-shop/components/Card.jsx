import React from 'react';

export const TeaCard = ({ 
  name, 
  description, 
  price, 
  image, 
  origin,
  className = '',
  onAddToCart,
  ...props 
}) => {
  return (
    <div 
      className={`tea-card ${className}`}
      style={{
        backgroundColor: 'var(--color-neutral-50)',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
        ...props.style
      }}
      {...props}
    >
      {image && (
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'var(--color-neutral-200)',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      )}
      
      <div style={{ padding: '1.5rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'var(--color-neutral-800)',
            margin: 0,
            marginBottom: '0.25rem'
          }}>
            {name}
          </h3>
          
          {origin && (
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-neutral-500)',
              margin: 0,
              fontStyle: 'italic'
            }}>
              {origin}
            </p>
          )}
        </div>
        
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--color-neutral-600)',
          lineHeight: 1.6,
          margin: '1rem 0',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1.5rem'
        }}>
          <span style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--color-primary-700)'
          }}>
            ¥{price}
          </span>
          
          {onAddToCart && (
            <button
              onClick={onAddToCart}
              style={{
                backgroundColor: 'var(--color-primary-600)',
                color: 'var(--color-neutral-50)',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'var(--color-primary-700)',
                  transform: 'translateY(-1px)',
                }
              }}
            >
              カートに追加
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const InfoCard = ({ 
  title, 
  content, 
  icon,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`info-card ${className}`}
      style={{
        backgroundColor: 'var(--color-neutral-50)',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: '0.75rem',
        padding: '2rem',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'var(--color-neutral-100)',
          borderColor: 'var(--color-primary-200)',
        },
        ...props.style
      }}
      {...props}
    >
      {icon && (
        <div style={{
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          color: 'var(--color-primary-600)'
        }}>
          {icon}
        </div>
      )}
      
      <h3 style={{
        fontFamily: 'var(--font-secondary)',
        fontSize: '1.125rem',
        fontWeight: 500,
        color: 'var(--color-neutral-800)',
        margin: '0 0 1rem 0'
      }}>
        {title}
      </h3>
      
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--color-neutral-600)',
        lineHeight: 1.6,
        margin: 0
      }}>
        {content}
      </p>
    </div>
  );
};