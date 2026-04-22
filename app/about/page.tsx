'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-slate-50">
                <div className="container-premium">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                            About
                            <br />
                            <span className="bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent">
                                Oxygenix Labs
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600">
                            Engineering oxygen-positive environments through algae-based air purification systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section-padding">
                <div className="container-premium max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="prose prose-lg max-w-none"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Company</h2>
                        <p className="text-slate-700 mb-4">
                            Oxygenix Labs manufactures algae-based air purification systems that combine HEPA H13 filtration with photosynthetic oxygen generation.
                        </p>
                        <p className="text-slate-700 mb-4">
                            Systems are manufactured in Bangalore, India at a 15,000 sq ft ISO 9001:2015 certified facility.
                        </p>
                        <p className="text-slate-700">
                            Products are designed for residential, commercial, and institutional applications.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Technology</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">HEPA H13 Filtration</h3>
                                <p className="text-sm text-slate-600">
                                    Removes 99.97% of particles ≥0.3μm including PM2.5, dust, and pollen.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">Algae Photosynthesis</h3>
                                <p className="text-sm text-slate-600">
                                    Chlorella culture produces oxygen through photosynthesis in addition to mechanical filtration.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">Air Quality Monitoring</h3>
                                <p className="text-sm text-slate-600">
                                    Real-time sensors track PM2.5, CO₂, and oxygen levels with mobile app connectivity.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">ISO 9001:2015</h3>
                                <p className="text-sm text-slate-600">
                                    Quality management system certification for manufacturing processes.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Manufacturing</h2>
                        <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-oxygen-700 mb-2">15,000</div>
                                    <div className="text-sm text-slate-600">Sq Ft Facility</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-oxygen-700 mb-2">Bangalore</div>
                                    <div className="text-sm text-slate-600">India</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-oxygen-700 mb-2">ISO 9001:2015</div>
                                    <div className="text-sm text-slate-600">Certified</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 p-6 bg-slate-100 rounded-xl border border-slate-200"
                    >
                        <h3 className="font-bold text-slate-900 mb-2">Facility Tours</h3>
                        <p className="text-sm text-slate-700">
                            Corporate buyers and institutional clients can schedule facility tours. Contact sales for arrangements.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
