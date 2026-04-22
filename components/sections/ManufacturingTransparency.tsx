'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ManufacturingTransparency() {
    const facilities = [
        {
            title: 'Production Facility',
            location: 'Bangalore, Karnataka',
            size: '15,000 sq ft',
            capacity: '500 units/month',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: 'Quality Testing Lab',
            location: 'On-site facility',
            size: '2,000 sq ft',
            capacity: '100% product testing',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
        },
    ];

    const certifications = [
        {
            name: 'ISO 9001:2015',
            description: 'Quality Management Systems',
            year: '2024',
        },
        {
            name: 'BIS Registration',
            description: 'Bureau of Indian Standards',
            year: '2023',
        },
        {
            name: 'CE Certified',
            description: 'European Conformity',
            year: '2024',
        },
    ];

    const qualitySteps = [
        {
            step: '1',
            title: 'Component Inspection',
            description: 'Every component tested before assembly',
        },
        {
            step: '2',
            title: 'Assembly Quality Check',
            description: '3-point inspection during assembly',
        },
        {
            step: '3',
            title: 'Performance Testing',
            description: '24-hour operational test',
        },
        {
            step: '4',
            title: 'Final Certification',
            description: 'Quality certificate with each unit',
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
                        Manufacturing and
                        <br />
                        <span className="bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent">
                            Quality Control
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Bangalore facility. 15,000 sq ft production capacity. ISO 9001:2015 certified.
                    </p>
                </motion.div>

                {/* Facilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8"
                        >
                            <div className="w-16 h-16 bg-oxygen-700 rounded-xl flex items-center justify-center text-white mb-6">
                                {facility.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{facility.title}</h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">Location:</span>
                                    <span className="font-semibold text-slate-900">{facility.location}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">Size:</span>
                                    <span className="font-semibold text-slate-900">{facility.size}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">Capacity:</span>
                                    <span className="font-semibold text-slate-900">{facility.capacity}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quality Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quality Control Process</h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {qualitySteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-oxygen-300 transition-all">
                                    <div className="w-12 h-12 bg-gradient-oxygen rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>

                                {index < qualitySteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300 z-10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Certifications & Standards</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-xl border-2 border-oxygen-200 p-6 text-center"
                            >
                                <div className="w-20 h-20 bg-oxygen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-oxygen-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">{cert.name}</h4>
                                <p className="text-sm text-slate-600 mb-2">{cert.description}</p>
                                <span className="inline-block px-3 py-1 bg-oxygen-100 text-oxygen-800 text-xs font-semibold rounded-full">
                                    Certified {cert.year}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                        <div className="flex items-start gap-4">
                            <svg className="w-6 h-6 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Facility Tours Available</h4>
                                <p className="text-sm text-slate-700">
                                    Corporate buyers and institutional clients can schedule facility tours. Contact sales for arrangements.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
