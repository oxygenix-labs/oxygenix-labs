'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-primary-light opacity-10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-primary-dark opacity-10 rounded-full blur-3xl" />
            </div>

            <div className="container-premium relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-gradient-primary-light text-white text-sm font-medium rounded-full mb-6">
                                Climate-Tech Innovation
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                                <GradientText as="span">Oxygen.</GradientText>
                                <br />
                                Naturally Engineered.
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Air purifiers clean air.<br />
                            <span className="font-semibold text-slate-900">Oxygenix engineers oxygen-positive environments.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button variant="primary" size="lg">
                                Explore Products
                            </Button>
                            <Button variant="outline" size="lg">
                                Book a Demo
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Built in India</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>24/7 Operation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Smart Monitoring</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Product Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Animated Background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-primary-light opacity-20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Product Placeholder */}
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-white rounded-3xl shadow-2xl flex items-center justify-center border border-slate-200">
                                    <div className="text-center">
                                        <div className="w-48 h-48 mx-auto mb-4 bg-gradient-primary-light opacity-20 rounded-full flex items-center justify-center">
                                            <svg className="w-24 h-24 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-500 font-medium">Oxygenix System</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}
