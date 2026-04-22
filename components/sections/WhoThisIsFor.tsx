'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhoThisIsFor() {
    const audiences = [
        {
            title: 'Homes & Apartments',
            icon: '🏠',
            spaces: [
                'Bedrooms (100-400 sq ft)',
                'Living rooms & studios',
                'Home offices',
            ],
            forWhom: 'Families, individuals, remote workers',
            bgColor: 'from-oxygen-50 to-fresh-50',
            borderColor: 'border-oxygen-200',
        },
        {
            title: 'Corporate & Commercial',
            icon: '🏢',
            spaces: [
                'Office spaces (200-1500 sq ft)',
                'Meeting rooms & conference halls',
                'IT parks & co-working spaces',
            ],
            forWhom: 'Facility managers, HR teams, office admins',
            bgColor: 'from-blue-50 to-indigo-50',
            borderColor: 'border-blue-200',
        },
        {
            title: 'Institutions & Healthcare',
            icon: '🏥',
            spaces: [
                'Hospital waiting rooms',
                'School classrooms',
                'College hostels & libraries',
            ],
            forWhom: 'Administrators, procurement heads, ESG teams',
            bgColor: 'from-teal-50 to-cyan-50',
            borderColor: 'border-teal-200',
        },
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
                        Application Areas
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Systems designed for residential, commercial, and institutional spaces.
                    </p>
                </motion.div>

                {/* Audience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bg-gradient-to-br ${audience.bgColor} rounded-2xl border-2 ${audience.borderColor} p-8 hover:shadow-lg transition-all duration-300`}
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-6">{audience.icon}</div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {audience.title}
                            </h3>

                            {/* Spaces */}
                            <div className="mb-6">
                                <ul className="space-y-2">
                                    {audience.spaces.map((space, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                                            <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm">{space}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* For Whom */}
                            <div className="pt-4 border-t border-slate-300">
                                <div className="text-xs font-semibold text-slate-500 mb-1">FOR:</div>
                                <div className="text-sm font-medium text-slate-900">{audience.forWhom}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
