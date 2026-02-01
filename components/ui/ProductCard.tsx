import React from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import Button from './Button';

interface ProductCardProps {
    name: string;
    slug: string;
    category: string;
    coverage: string;
    image: string;
    description: string;
    price?: string;
    variants?: number;
    className?: string;
}

export default function ProductCard({
    name,
    slug,
    category,
    coverage,
    image,
    description,
    price,
    variants,
    className,
}: ProductCardProps) {
    return (
        <div
            className={clsx(
                'group relative bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1',
                className
            )}
        >
            {/* Image */}
            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-primary-light opacity-10 rounded-full blur-3xl" />
                </div>
                {/* Placeholder for product image */}
                <div className="relative z-10 flex items-center justify-center h-full text-slate-400">
                    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <p className="text-sm font-medium text-brand-purple mb-1">{category}</p>
                        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                    </div>
                    {variants && (
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                            {variants} variants
                        </span>
                    )}
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-slate-600">{coverage}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link href={`/products/${slug}`} className="flex-1">
                        <Button variant="primary" size="sm" fullWidth>
                            Explore
                        </Button>
                    </Link>
                    {price && (
                        <span className="text-lg font-bold text-slate-900">{price}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
