'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MaintenanceClarity() {
    const maintenanceCosts = [
        {
            item: 'Filter Replacement',
            frequency: '2x per year',
            cost: 3000,
            description: 'HEPA and carbon filters',
        },
        {
            item: 'Algae Culture Refresh',
            frequency: '1x per year',
            cost: 1500,
            description: 'Fresh algae culture installation',
        },
        {
            item: 'Technician Visit',
            frequency: 'Per visit',
            cost: 499,
            description: 'Professional inspection & service',
        },
    ];

    const totalAnnual = maintenanceCosts.reduce((sum, item) => {
        if (item.frequency.includes('2x')) return sum + item.cost;
        if (item.frequency.includes('1x')) return sum + item.cost;
        return sum;
    }, 0) + 499; // Add one technician visit

    const amcPrice = 3999;
    const savings = totalAnnual - amcPrice;

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
                        Maintenance Costs
                        <br />
                        <span className="bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent">
                            Fully Transparent
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        No hidden fees. Here's exactly what it costs to maintain your system annually.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Standard Maintenance Costs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 md:p-10 mb-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Standard Maintenance (Pay-as-you-go)</h3>

                        <div className="space-y-4 mb-6">
                            {maintenanceCosts.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start justify-between p-4 bg-white rounded-lg border border-slate-200"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="font-bold text-slate-900">{item.item}</h4>
                                            <span className="px-2 py-0.5 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">
                                                {item.frequency}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600">{item.description}</p>
                                    </div>
                                    <div className="text-right ml-4">
                                        <div className="text-xl font-bold text-slate-900">₹{item.cost.toLocaleString()}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-6 border-t-2 border-slate-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-slate-900 mb-1">Total Annual Cost</div>
                                    <div className="text-sm text-slate-600">Without AMC contract</div>
                                </div>
                                <div className="text-3xl font-bold text-slate-900">₹{totalAnnual.toLocaleString()}</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* AMC Option */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-oxygen-50 to-fresh-50 rounded-2xl border-2 border-oxygen-300 p-8 md:p-10 relative overflow-hidden"
                    >
                        {/* Recommended Badge */}
                        <div className="absolute top-6 right-6">
                            <span className="px-4 py-2 bg-oxygen-700 text-white text-sm font-bold rounded-full shadow-lg">
                                RECOMMENDED
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Annual Maintenance Contract (AMC)</h3>
                        <p className="text-slate-700 mb-6">All-inclusive annual plan with priority support</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-3">What's Included:</h4>
                                <ul className="space-y-2">
                                    {[
                                        'Free filter replacements (2x/year)',
                                        'Free algae culture refresh (1x/year)',
                                        'Free technician visits',
                                        'Priority customer support',
                                        'Annual health check & calibration',
                                        'Emergency service within 24 hours',
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                                            <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <div className="bg-white rounded-xl p-6 border-2 border-oxygen-200">
                                    <div className="text-sm text-slate-600 mb-2">AMC Annual Cost</div>
                                    <div className="text-4xl font-bold text-oxygen-700 mb-4">₹{amcPrice.toLocaleString()}</div>

                                    <div className="pt-4 border-t border-slate-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-slate-600">Standard Cost:</span>
                                            <span className="text-sm font-semibold text-slate-900">₹{totalAnnual.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm text-slate-600">AMC Cost:</span>
                                            <span className="text-sm font-semibold text-slate-900">₹{amcPrice.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-3 border-t border-oxygen-200">
                                            <span className="font-bold text-oxygen-700">You Save:</span>
                                            <span className="text-xl font-bold text-oxygen-700">₹{savings.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="text-xs font-semibold text-green-800 text-center">
                                            Save {Math.round((savings / totalAnnual) * 100)}% with AMC
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-oxygen-200">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                <div className="text-sm text-slate-700">
                                    <span className="font-semibold">Note:</span> AMC can be purchased with your product or added later. Prices shown are for Home Compact model. Costs vary by product model.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
