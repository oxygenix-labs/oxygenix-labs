import React from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Product } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatting';
import Button from './Button';

interface ProductCardProps {
    product: Product;
    className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
    if (!product || !product.variants || product.variants.length === 0) {
        return null;
    }

    const minPrice = Math.min(...product.variants.map((v) => v.price));
    const maxPrice = Math.max(...product.variants.map((v) => v.price));
    const priceDisplay = minPrice === maxPrice
        ? formatPrice(minPrice)
        : `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;

    return (
        <Link href={`/products/${product.slug}`}>
            <div
                className={clsx(
                    'group relative bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer h-full',
                    className
                )}
            >
                {/* Image */}
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 bg-gradient-primary-light opacity-20 rounded-full blur-3xl" />
                    </div>
                    {/* Placeholder for product image */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="w-32 h-32 bg-gradient-primary-light rounded-full flex items-center justify-center">
                            <span className="text-5xl text-white font-bold">O</span>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {product.inStock && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                In Stock
                            </span>
                        )}
                        {product.rating && (
                            <span className="px-2 py-1 bg-white text-slate-900 text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                                ⭐ {product.rating}
                            </span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <p className="text-sm font-medium text-brand-purple mb-1">{product.categoryLabel}</p>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-purple transition-colors">
                                {product.name}
                            </h3>
                        </div>
                        {product.variants.length > 1 && (
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                {product.variants.length} variants
                            </span>
                        )}
                    </div>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-slate-600">
                                {product.variants[0].coverage}
                                {product.variants.length > 1 && '+'}
                            </span>
                        </div>
                        {product.reviewCount && (
                            <div className="flex items-center gap-1 text-slate-500">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                </svg>
                                <span>{product.reviewCount}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-xs text-slate-500 mb-1">Starting from</div>
                            <div className="text-xl font-bold text-brand-purple">{priceDisplay}</div>
                        </div>
                        <Button variant="primary" size="sm">
                            View Details
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
