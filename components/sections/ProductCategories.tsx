'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import { products, getProductsByCategory } from '@/lib/data/products';

export default function ProductCategories() {
    const categories = [
        {
            id: 'home',
            title: '🏠 Home Use',
            description: 'Perfect for bedrooms, living rooms, and apartments',
            gradient: 'from-purple-50 to-pink-50',
        },
        {
            id: 'corporate',
            title: '🏢 Corporate Use',
            description: 'Designed for offices, IT parks, and co-working spaces',
            gradient: 'from-blue-50 to-cyan-50',
        },
        {
            id: 'college',
            title: '🏫 Colleges & Schools',
            description: 'Ideal for classrooms, libraries, and hostels',
            gradient: 'from-green-50 to-emerald-50',
        },
        {
            id: 'hospital',
            title: '🏥 Hospitals & Clinics',
            description: 'Medical-grade for OPD, waiting rooms, and recovery zones',
            gradient: 'from-red-50 to-orange-50',
        },
    ];

    return (
        <section id="products" className="section-padding bg-slate-50">
            <div className="container-premium">
                <SectionHeader
                    title="Choose Your Environment"
                    description="Tailored solutions for every space and use case"
                    gradient
                />

                <div className="space-y-20">
                    {categories.map((category, categoryIndex) => {
                        const categoryProducts = getProductsByCategory(category.id as any);

                        return (
                            <motion.div
                                key={category.id}
                                id={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Category Header */}
                                <div className={`bg-gradient-to-br ${category.gradient} rounded-3xl p-8 md:p-12 mb-8`}>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                        {category.title}
                                    </h3>
                                    <p className="text-lg text-slate-700 max-w-2xl">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Products Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {categoryProducts.map((product, productIndex) => (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                                        >
                                            <ProductCard product={product} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
