'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TrustScience() {
    const trustPoints = [
        {
            title: 'Engineering First',
            description: 'Every product is designed by engineers, for real-world performance. No marketing gimmicks.',
            icon: '⚙️',
        },
        {
            title: 'Built in India',
            description: 'Manufactured in our facility with rigorous quality control at every stage.',
            icon: '🇮🇳',
        },
        {
            title: 'Transparent Testing',
            description: 'All performance claims backed by independent lab testing and real-world data.',
            icon: '🔬',
        },
        {
            title: 'Long-term Thinking',
            description: 'Designed for durability and serviceability. We build products that last.',
            icon: '♻️',
        },
    ];

    return (
        <section className="section-padding bg-slate-900 text-white">
            <div className="container-premium">
                <SectionHeader
                    title="Science. Manufacturing. Trust."
                    description="We don't make claims we can't prove. Every system is engineered, tested, and built to last."
                />

                {/* Trust Points Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {trustPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl mb-4">{point.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                            <p className="text-slate-400">{point.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Manufacturing Showcase */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-6">Precision Manufacturing</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-gradient-primary-light rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Component Selection</h4>
                                    <p className="text-slate-400">Premium HEPA filters, medical-grade materials, certified algae strains</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-gradient-primary-light rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Assembly & Testing</h4>
                                    <p className="text-slate-400">Each unit tested for airflow, filtration efficiency, and oxygen output</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-gradient-primary-light rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Quality Certification</h4>
                                    <p className="text-slate-400">Final inspection ensures every system meets our standards</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden border border-slate-700"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-24 h-24 mx-auto mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                <p className="text-slate-500">Manufacturing Facility</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications */}
                <div className="mt-16 pt-16 border-t border-slate-800">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Quality Standards</h3>
                        <p className="text-slate-400">Compliant with industry standards and regulations</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                        {['ISO 9001', 'CE Certified', 'BIS Approved', 'Energy Star'].map((cert) => (
                            <div key={cert} className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-700">
                                <span className="font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
