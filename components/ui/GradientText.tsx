import React from 'react';
import { clsx } from 'clsx';

interface GradientTextProps {
    children: React.ReactNode;
    variant?: 'light' | 'dark';
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function GradientText({
    children,
    variant = 'light',
    className,
    as: Component = 'span',
}: GradientTextProps) {
    const gradientClass = variant === 'light'
        ? 'bg-gradient-primary-light'
        : 'bg-gradient-primary-dark';

    return (
        <Component
            className={clsx(
                gradientClass,
                'bg-clip-text text-transparent',
                className
            )}
        >
            {children}
        </Component>
    );
}
