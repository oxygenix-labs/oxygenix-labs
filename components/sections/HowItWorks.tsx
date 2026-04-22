'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    const steps = [
        {
            number: '1',
            title: 'Air Intake',
            description: 'Fan draws indoor air into filtration chamber',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            ),
        },
        {
            number: '2',
            title: 'Filtration',
            description: 'HEPA H13 removes 99.97% of particles ≥0.3μm',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
            ),
        },
        {
            number: '3',
            title: 'Algae Chamber',
            description: 'Chlorella culture produces O₂ via photosynthesis',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
        {
            number: '4',
            title: 'Air Output',
            description: 'Filtered air released back into room',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
    ];

    const specs = [
        { label: 'Filtration Efficiency', value: '99.97% of PM2.5' },
        { label: 'Oxygen Generation', value: 'Natural photosynthesis' },
        { label: 'Coverage Area', value: '200-1500 sq ft' },
        { label: 'Noise Level', value: '<35 dB (library-quiet)' },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-premium">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        System
                        <br />
                        <span className="bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent">
                            Operation
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Four-stage process: mechanical filtration, algae photosynthesis, air quality monitoring.
                    </p>
                </motion.div>

                {/* Process Flow */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-6 hover:border-oxygen-300 transition-all h-full">
                                    {/* Step Number */}
                                    <div className="w-12 h-12 bg-gradient-oxygen rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-oxygen-700 mb-4 border border-slate-200">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-600">{step.description}</p>
                                </div>

                                {/* Arrow (Desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <svg className="w-6 h-6 text-oxygen-700" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Technical Specifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technical Specifications</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 border-2 border-slate-200 text-center"
                            >
                                <div className="text-sm text-slate-600 mb-2">{spec.label}</div>
                                <div className="text-lg font-bold text-oxygen-700">{spec.value}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                        <div className="flex items-start gap-4">
                            <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Algae photosynthesis process</h4>
                                <p className="text-sm text-slate-700">
                                    Algae converts CO₂ and water into oxygen and glucose using light energy. System maintains temperature and light conditions for continuous operation.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
