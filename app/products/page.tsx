'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products, type Product } from '@/lib/data/products';
import ProductCard from '@/components/ui/ProductCard';
import GradientText from '@/components/ui/GradientText';
import Button from '@/components/ui/Button';

type SortOption = 'popular' | 'price-low' | 'price-high' | 'newest';
type CategoryFilter = 'all' | Product['category'];

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
    const [sortBy, setSortBy] = useState<SortOption>('popular');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = products;

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(
                (p) =>
                    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Category filter
        if (categoryFilter !== 'all') {
            filtered = filtered.filter((p) => p.category === categoryFilter);
        }

        // Price range filter
        filtered = filtered.filter((p) => {
            const minPrice = Math.min(...p.variants.map((v) => v.price));
            return minPrice >= priceRange[0] && minPrice <= priceRange[1];
        });

        // Sort
        const sorted = [...filtered];
        switch (sortBy) {
            case 'price-low':
                sorted.sort((a, b) => {
                    const aMin = Math.min(...a.variants.map((v) => v.price));
                    const bMin = Math.min(...b.variants.map((v) => v.price));
                    return aMin - bMin;
                });
                break;
            case 'price-high':
                sorted.sort((a, b) => {
                    const aMax = Math.max(...a.variants.map((v) => v.price));
                    const bMax = Math.max(...b.variants.map((v) => v.price));
                    return bMax - aMax;
                });
                break;
            case 'newest':
                // In real app, would sort by createdAt
                sorted.reverse();
                break;
            case 'popular':
            default:
                sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
        }

        return sorted;
    }, [searchQuery, categoryFilter, sortBy, priceRange]);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
                <div className="container-premium">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <GradientText className="text-4xl md:text-5xl font-bold mb-4">
                            Our Products
                        </GradientText>
                        <p className="text-lg text-slate-600">
                            Engineered for clean air and natural oxygen. Choose the perfect solution for your space.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container-premium py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Filters</h3>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Category
                                </label>
                                <div className="space-y-2">
                                    {[
                                        { value: 'all', label: 'All Products' },
                                        { value: 'home', label: 'Home Use' },
                                        { value: 'corporate', label: 'Corporate' },
                                        { value: 'college', label: 'Colleges & Schools' },
                                        { value: 'hospital', label: 'Hospitals & Clinics' },
                                    ].map((cat) => (
                                        <label key={cat.value} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={cat.value}
                                                checked={categoryFilter === cat.value}
                                                onChange={(e) => setCategoryFilter(e.target.value as CategoryFilter)}
                                                className="w-4 h-4 text-brand-purple focus:ring-brand-purple"
                                            />
                                            <span className="text-sm text-slate-700">{cat.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Price Range
                                </label>
                                <div className="space-y-2">
                                    <input
                                        type="range"
                                        min="0"
                                        max="150000"
                                        step="5000"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-sm text-slate-600">
                                        <span>₹0</span>
                                        <span>₹{(priceRange[1] / 1000).toFixed(0)}k</span>
                                    </div>
                                </div>
                            </div>

                            {/* Clear Filters */}
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => {
                                    setSearchQuery('');
                                    setCategoryFilter('all');
                                    setPriceRange([0, 150000]);
                                    setSortBy('popular');
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:col-span-3">
                        {/* Sort and Results Count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-slate-600">
                                <span className="font-semibold text-slate-900">{filteredProducts.length}</span> products found
                            </p>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest First</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                                <p className="text-slate-600 mb-4">Try adjusting your filters or search query</p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSearchQuery('');
                                        setCategoryFilter('all');
                                        setPriceRange([0, 150000]);
                                    }}
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
