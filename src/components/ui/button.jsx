import React, { forwardRef } from 'react'

// Minimal Button component to replace missing shadcn Button
export const Button = forwardRef(function Button(
    
  { children, className = '', variant = 'default', asChild = false, ...props },
  ref
) {
  const base = 'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium';
  const variants = {
    default: 'bg-primary',
    outline: 'border',
  };

  const classes = `${base} ${variants[variant] || ''} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [children.props.className || '', classes].filter(Boolean).join(' '),
      ref,
      ...props,
    });
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
})

export default Button
