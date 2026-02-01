import React from 'react';
import { clsx } from 'clsx';
import GradientText from './GradientText';

interface SectionHeaderProps {
    title: string;
    description?: string;
    gradient?: boolean;
    centered?: boolean;
    className?: string;
}

export default function SectionHeader({
    title,
    description,
    gradient = false,
    centered = true,
    className,
}: SectionHeaderProps) {
    return (
        <div className={clsx('mb-12 lg:mb-16', centered && 'text-center', className)}>
            {gradient ? (
                <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
                    {title}
                </GradientText>
            ) : (
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    {title}
                </h2>
            )}
            {description && (
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
}
