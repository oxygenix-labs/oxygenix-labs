'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function HowItWorks() {
    const [activeMode, setActiveMode] = useState<'day' | 'night'>('day');

    const steps = [
        {
            number: 1,
            title: 'Air Intake',
            description: 'Polluted air enters through optimized intake vents',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
            ),
        },
        {
            number: 2,
            title: 'PM2.5 Removed',
            description: 'HEPA H13 filter captures 99.97% of particles',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: 3,
            title: 'CO₂ Absorbed',
            description: 'Algae bioreactor absorbs carbon dioxide',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: 4,
            title: 'Oxygen Released',
            description: 'Fresh, oxygen-enriched air circulates back',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
            ),
        },
        {
            number: 5,
            title: 'Smart Optimization',
            description: 'Sensors continuously monitor and adjust',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="section-padding bg-white">
            <div className="container-premium">
                <SectionHeader
                    title="How It Works"
                    description="Five-stage process for oxygen-positive environments"
                    gradient
                />

                {/* Day/Night Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-slate-100 rounded-full p-1">
                        <button
                            onClick={() => setActiveMode('day')}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${activeMode === 'day'
                                    ? 'bg-white text-slate-900 shadow-md'
                                    : 'text-slate-600'
                                }`}
                        >
                            ☀️ Day Mode
                        </button>
                        <button
                            onClick={() => setActiveMode('night')}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${activeMode === 'night'
                                    ? 'bg-white text-slate-900 shadow-md'
                                    : 'text-slate-600'
                                }`}
                        >
                            🌙 Night Mode
                        </button>
                    </div>
                </div>

                {/* Mode Description */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeMode}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center mb-12 max-w-2xl mx-auto"
                    >
                        {activeMode === 'day' ? (
                            <p className="text-lg text-slate-600">
                                During daylight, algae photosynthesis is at peak efficiency, generating maximum oxygen while the HEPA system continuously cleans the air.
                            </p>
                        ) : (
                            <p className="text-lg text-slate-600">
                                At night, the system switches to optimized mode. While algae oxygen production reduces, stored oxygen reserves and enhanced air circulation maintain air quality.
                            </p>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary-light transform -translate-y-1/2 opacity-20" />

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Step Card */}
                                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-purple transition-all hover:shadow-lg">
                                    {/* Number Badge */}
                                    <div className="w-12 h-12 bg-gradient-primary-light rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex justify-center mb-4 text-brand-purple">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h4 className="font-bold text-slate-900 text-center mb-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 text-center">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Technical Specs */}
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'PM2.5 Removal', value: '99.97%', icon: '🎯' },
                        { label: 'Oxygen Boost', value: '15-20%', icon: '💨' },
                        { label: 'CO₂ Reduction', value: '25-30%', icon: '🌱' },
                        { label: 'Coverage', value: 'Up to 1500 sq ft', icon: '📐' },
                    ].map((spec, index) => (
                        <motion.div
                            key={spec.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 text-center"
                        >
                            <div className="text-3xl mb-2">{spec.icon}</div>
                            <div className="text-2xl font-bold text-slate-900 mb-1">{spec.value}</div>
                            <div className="text-sm text-slate-600">{spec.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
