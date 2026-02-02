import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    fullWidth?: boolean;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    fullWidth = false,
    className,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const buttonVariants = {
        primary: 'bg-oxygen-700 text-white hover:bg-oxygen-800 focus:ring-oxygen-500 shadow-md hover:shadow-lg',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500',
        outline: 'border-2 border-oxygen-700 text-oxygen-700 hover:bg-oxygen-50 focus:ring-oxygen-500',
        gradient: 'bg-gradient-oxygen text-white hover:shadow-oxygen focus:ring-oxygen-500 shadow-md hover:shadow-lg',
        ghost: 'text-oxygen-700 hover:bg-oxygen-50 focus:ring-oxygen-500',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={clsx(
                baseStyles,
                buttonVariants[variant],
                sizes[size],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
