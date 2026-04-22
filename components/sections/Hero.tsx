'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';
import Button from '@/components/ui/Button';

type SpaceType = 'home' | 'corporate' | 'college' | 'hospital';

const spaceTypes = [
    {
        id: 'home' as SpaceType,
        name: 'Home',
        icon: '🏠',
        description: 'Bedrooms, Living Rooms, Apartments',
    },
    {
        id: 'corporate' as SpaceType,
        name: 'Office',
        icon: '🏢',
        description: 'Workspaces, Meeting Rooms, IT Parks',
    },
    {
        id: 'hospital' as SpaceType,
        name: 'Hospital',
        icon: '🏥',
        description: 'OPD, Waiting Rooms, Recovery Zones',
    },
    {
        id: 'college' as SpaceType,
        name: 'School',
        icon: '🏫',
        description: 'Classrooms, Libraries, Hostels',
    },
];

export default function Hero() {
    const [selectedSpace, setSelectedSpace] = useState<SpaceType | null>(null);

    const filteredProducts = selectedSpace
        ? products.filter((p) => p.category === selectedSpace)
        : [];

    return (
        <section className="relative bg-white pt-32 pb-20">
            <div className="container-premium">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Clean Air Solutions
                        <br />
                        <span className="bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent">
                            for Every Space
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Select your space to see products designed for your environment
                    </p>
                </motion.div>

                {/* Space Selection */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
                >
                    {spaceTypes.map((space, index) => (
                        <motion.button
                            key={space.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            onClick={() => setSelectedSpace(space.id)}
                            className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 ${selectedSpace === space.id
                                    ? 'border-oxygen-700 bg-gradient-to-br from-oxygen-50 to-fresh-50 shadow-oxygen'
                                    : 'border-slate-200 bg-white hover:border-oxygen-300 hover:shadow-lg'
                                }`}
                        >
                            <div className="text-5xl mb-4">{space.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{space.name}</h3>
                            <p className="text-sm text-slate-600">{space.description}</p>

                            {selectedSpace === space.id && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-oxygen-700 rounded-full flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </motion.div>
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Product Results */}
                {selectedSpace && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">
                            Products for {spaceTypes.find((s) => s.id === selectedSpace)?.name}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => {
                                const minPrice = Math.min(...product.variants.map((v) => v.price));
                                const maxCoverage = Math.max(...product.variants.map((v) => parseInt(v.coverage)));

                                return (
                                    <Link key={product.id} href={`/products/${product.slug}`}>
                                        <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-oxygen-700 hover:shadow-oxygen transition-all duration-300 h-full">
                                            {/* Product Image Placeholder */}
                                            <div className="w-full h-48 bg-gradient-to-br from-oxygen-100 to-fresh-100 rounded-lg mb-6 flex items-center justify-center">
                                                <span className="text-6xl font-bold text-oxygen-700">O</span>
                                            </div>

                                            {/* Product Info */}
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                            <p className="text-sm text-slate-600 mb-4">{product.shortDescription}</p>

                                            {/* Specs */}
                                            <div className="space-y-2 mb-6">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-600">Coverage:</span>
                                                    <span className="font-semibold text-slate-900">Up to {maxCoverage} sq ft</span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-600">Variants:</span>
                                                    <span className="font-semibold text-slate-900">{product.variants.length} sizes</span>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="pt-4 border-t border-slate-200">
                                                <div className="flex items-baseline justify-between">
                                                    <span className="text-sm text-slate-600">Starting at</span>
                                                    <span className="text-2xl font-bold text-oxygen-700">
                                                        ₹{(minPrice / 1000).toFixed(0)}k
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="mt-8 text-center">
                            <Link href="/products">
                                <Button variant="outline" size="lg">
                                    View All Products
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}

                {/* Initial State - No Selection */}
                {!selectedSpace && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-center py-12"
                    >
                        <p className="text-lg text-slate-500">
                            Select a space type above to see relevant products
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
