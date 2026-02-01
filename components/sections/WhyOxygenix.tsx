'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function WhyOxygenix() {
    const comparisons = [
        {
            title: 'Air Purifiers',
            status: 'limited',
            features: [
                { text: 'Removes PM2.5', available: true },
                { text: 'Generates oxygen', available: false },
                { text: 'Works at night', available: true },
                { text: 'Absorbs CO₂', available: false },
            ],
        },
        {
            title: 'Indoor Plants',
            status: 'limited',
            features: [
                { text: 'Removes PM2.5', available: false },
                { text: 'Generates oxygen', available: true },
                { text: 'Works at night', available: false },
                { text: 'Absorbs CO₂', available: true },
            ],
        },
        {
            title: 'Oxygenix Hybrid',
            status: 'complete',
            features: [
                { text: 'Removes PM2.5', available: true },
                { text: 'Generates oxygen', available: true },
                { text: 'Works at night', available: true },
                { text: 'Absorbs CO₂', available: true },
            ],
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-premium">
                <SectionHeader
                    title="Why Oxygenix?"
                    description="Not just air cleaning. Complete oxygen engineering."
                    gradient
                />

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border-2 ${item.status === 'complete'
                                    ? 'border-brand-purple bg-gradient-to-br from-purple-50 to-pink-50'
                                    : 'border-slate-200 bg-white'
                                }`}
                        >
                            {/* Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                {item.status === 'complete' ? (
                                    <span className="text-2xl">✅</span>
                                ) : (
                                    <span className="text-2xl">❌</span>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4">
                                {item.features.map((feature) => (
                                    <li key={feature.text} className="flex items-center gap-3">
                                        {feature.available ? (
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-slate-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        <span className={feature.available ? 'text-slate-700' : 'text-slate-400 line-through'}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {item.status === 'complete' && (
                                <div className="mt-6 pt-6 border-t border-purple-200">
                                    <p className="text-sm font-medium text-brand-purple">
                                        Complete oxygen engineering solution
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Key Differentiators */}
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            ),
                            title: 'Fast PM2.5 Removal',
                            description: 'HEPA filtration cleans air in minutes',
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ),
                            title: 'Algae-Based Oxygen',
                            description: 'Continuous oxygen support, naturally',
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ),
                            title: 'Day & Night',
                            description: 'Works 24/7, unlike plants',
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            ),
                            title: 'Smart Monitoring',
                            description: 'Real-time air quality tracking',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary-light rounded-2xl text-white mb-4">
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
