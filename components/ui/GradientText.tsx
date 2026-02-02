import React, { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
    return (
        <span className={`bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent ${className}`}>
            {children}
        </span>
    );
}
