'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyDifferent() {
    const comparisons = [
        {
            feature: 'Filtration',
            traditional: 'HEPA only',
            oxygenix: 'HEPA + Algae',
            highlight: true,
        },
        {
            feature: 'Oxygen Generation',
            traditional: 'No',
            oxygenix: 'Yes (natural)',
            highlight: true,
        },
        {
            feature: 'CO₂ Reduction',
            traditional: 'No',
            oxygenix: 'Yes',
            highlight: true,
        },
        {
            feature: 'Real-time Monitoring',
            traditional: 'Some models',
            oxygenix: 'All models',
            highlight: false,
        },
        {
            feature: 'Maintenance Transparency',
            traditional: 'Hidden costs',
            oxygenix: 'Fully disclosed',
            highlight: true,
        },
        {
            feature: 'Manufacturing',
            traditional: 'Imported/Unknown',
            oxygenix: 'Bangalore, India',
            highlight: false,
        },
    ];

    const differentiators = [
        {
            title: 'Natural Oxygen Generation',
            description: 'Algae culture produces oxygen through photosynthesis in addition to mechanical filtration.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
        {
            title: 'Disclosed Maintenance Costs',
            description: 'Annual maintenance costs disclosed upfront, including filter replacements and service visits.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Bangalore Manufacturing, ISO 9001:2015',
            description: 'Manufactured in Bangalore facility with ISO 9001:2015 quality management certification.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: 'Real-Time Air Quality Monitoring',
            description: 'Every model includes sensors and mobile app connectivity for continuous monitoring.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="section-padding bg-slate-50">
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
                        Comparison with Traditional Systems
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Key differences from standard HEPA air purifiers.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 overflow-x-auto"
                >
                    <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden min-w-[600px]">
                        {/* Header */}
                        <div className="grid grid-cols-3 bg-slate-100 border-b-2 border-slate-200">
                            <div className="p-4 font-bold text-slate-900">Feature</div>
                            <div className="p-4 font-bold text-slate-900 text-center border-l border-slate-200">Traditional Purifiers</div>
                            <div className="p-4 font-bold text-oxygen-700 text-center border-l border-slate-200 bg-oxygen-50">Oxygenix</div>
                        </div>

                        {/* Rows */}
                        {comparisons.map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-3 border-b border-slate-200 last:border-b-0 ${row.highlight ? 'bg-oxygen-50/30' : ''
                                    }`}
                            >
                                <div className="p-4 font-medium text-slate-900">{row.feature}</div>
                                <div className="p-4 text-center text-slate-600 border-l border-slate-200">{row.traditional}</div>
                                <div className="p-4 text-center font-semibold text-oxygen-700 border-l border-slate-200 bg-oxygen-50/50">
                                    {row.oxygenix}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Differentiators */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-oxygen-300 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-oxygen-100 rounded-lg flex items-center justify-center text-oxygen-700 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
