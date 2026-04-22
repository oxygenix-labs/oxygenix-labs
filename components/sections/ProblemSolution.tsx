'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemSolution() {
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
                        Indoor Air Challenges
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        EPA studies show indoor air is 2-5x more polluted than outdoor air. Systems address particulate matter and CO₂ levels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">The Problem</h3>

                        <div className="space-y-4 mb-8">
                            <div className="p-4 bg-white rounded-lg border-l-4 border-orange-500">
                                <div className="font-semibold text-slate-900 mb-1">Particulate Matter</div>
                                <p className="text-sm text-slate-600">PM2.5 and PM10 particles accumulate in enclosed spaces, affecting respiratory health.</p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border-l-4 border-red-500">
                                <div className="font-semibold text-slate-900 mb-1">High CO₂ Levels</div>
                                <p className="text-sm text-slate-600">Carbon dioxide builds up in poorly ventilated rooms, reducing focus and causing fatigue.</p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500">
                                <div className="font-semibold text-slate-900 mb-1">Stale Air</div>
                                <p className="text-sm text-slate-600">Lack of fresh oxygen circulation impacts long-term well-being and productivity.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-100 rounded-xl">
                            <div className="text-sm text-slate-700">
                                <span className="font-semibold">Fact:</span> Indoor air can be 2-5x more polluted than outdoor air, according to EPA studies.
                            </div>
                        </div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">System Approach</h3>

                        <div className="space-y-4">
                            <div className="p-4 bg-white rounded-lg border-l-4 border-oxygen-700">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-oxygen-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-oxygen-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900 mb-1">Filter Particulate Matter</div>
                                        <p className="text-sm text-slate-600">HEPA + carbon filters remove 99.97% of PM2.5 and PM10 particles.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-white rounded-lg border-l-4 border-fresh-600">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-fresh-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-fresh-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900 mb-1">Generate Oxygen</div>
                                        <p className="text-sm text-slate-600">Live algae culture produces oxygen naturally through photosynthesis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-white rounded-lg border-l-4 border-teal-600">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900 mb-1">Monitor Air Quality</div>
                                        <p className="text-sm text-slate-600">Real-time tracking of PM2.5, CO₂, and oxygen levels with mobile app.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900 mb-1">Reduce CO₂ Levels</div>
                                        <p className="text-sm text-slate-600">Continuous CO₂ reduction through natural algae absorption.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
