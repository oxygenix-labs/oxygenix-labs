'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding Indoor Air Quality Standards',
            excerpt: 'EPA guidelines and what they mean for your space. Technical breakdown of PM2.5, CO₂, and oxygen levels.',
            date: '2026-01-15',
            category: 'Technical',
            readTime: '5 min read',
        },
        {
            id: 2,
            title: 'Algae Photosynthesis: The Science Behind Oxygen Generation',
            excerpt: 'How Chlorella culture produces oxygen through photosynthesis. System requirements and maintenance considerations.',
            date: '2026-01-10',
            category: 'Science',
            readTime: '7 min read',
        },
        {
            id: 3,
            title: 'HEPA H13 Filtration Explained',
            excerpt: 'Technical specifications of HEPA H13 filters. 99.97% particle removal efficiency for particles ≥0.3μm.',
            date: '2026-01-05',
            category: 'Technical',
            readTime: '4 min read',
        },
        {
            id: 4,
            title: 'Maintenance Schedule and Filter Replacement',
            excerpt: 'Annual maintenance costs breakdown. Filter replacement intervals and system upkeep requirements.',
            date: '2025-12-28',
            category: 'Maintenance',
            readTime: '6 min read',
        },
        {
            id: 5,
            title: 'ISO 9001:2015 Quality Management System',
            excerpt: 'Manufacturing standards and quality control processes. Bangalore facility certifications and testing procedures.',
            date: '2025-12-20',
            category: 'Manufacturing',
            readTime: '5 min read',
        },
        {
            id: 6,
            title: 'Comparing Air Purification Technologies',
            excerpt: 'HEPA-only systems vs. algae-based purification. Technical comparison of filtration methods and oxygen generation.',
            date: '2025-12-15',
            category: 'Comparison',
            readTime: '8 min read',
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-slate-50">
                <div className="container-premium">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                            Technical
                            <br />
                            <span className="bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent">
                                Documentation
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600">
                            Engineering insights, technical specifications, and system documentation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section-padding">
                <div className="container-premium">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-oxygen-300 hover:shadow-lg transition-all"
                            >
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-oxygen-100 text-oxygen-800 text-xs font-semibold rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    <span>{post.readTime}</span>
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-oxygen-700 font-semibold hover:gap-3 transition-all"
                                >
                                    Read Article
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* Coming Soon Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 p-6 bg-slate-100 rounded-xl border border-slate-200 text-center"
                    >
                        <p className="text-sm text-slate-700">
                            <span className="font-semibold">More articles in development.</span> Technical documentation and system specifications are continuously updated.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
