'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function About() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-premium">
                <SectionHeader
                    title="About Oxygenix Labs"
                    description="Building oxygen infrastructure for India"
                    gradient
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">Why We Exist</h3>
                        <div className="space-y-4 text-lg text-slate-700">
                            <p>
                                In 2020, during the oxygen crisis, we realized something fundamental: India doesn't just need air purifiers. We need oxygen infrastructure.
                            </p>
                            <p>
                                Traditional air purifiers clean air. Plants generate oxygen but stop at night. We asked: what if we could combine both?
                            </p>
                            <p>
                                Oxygenix Labs was founded by engineers who believe in solving problems at their root. Not with marketing. Not with shortcuts. With science, manufacturing excellence, and honest engineering.
                            </p>
                            <p className="font-semibold text-slate-900">
                                We're building the oxygen infrastructure India needs. One system at a time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden border border-slate-300"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-32 h-32 mx-auto mb-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p className="text-slate-500">Founding Team</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                        <p className="text-slate-700 text-lg">
                            To make oxygen-positive environments accessible to every Indian home, office, school, and hospital through honest engineering and transparent manufacturing.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Long-term Vision</h3>
                        <p className="text-slate-700 text-lg">
                            Building India's oxygen infrastructure. Not just products, but a movement towards cleaner, oxygen-rich indoor environments for healthier, more productive lives.
                        </p>
                    </motion.div>
                </div>

                {/* Values */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Principles</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Engineering First',
                                description: 'Performance over marketing',
                                icon: '⚙️',
                            },
                            {
                                title: 'Radical Transparency',
                                description: 'Honest about capabilities and limits',
                                icon: '🔍',
                            },
                            {
                                title: 'Built to Last',
                                description: 'Durability and serviceability',
                                icon: '🛠️',
                            },
                            {
                                title: 'Made in India',
                                description: 'Local manufacturing, global standards',
                                icon: '🇮🇳',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 border border-slate-200 text-center"
                            >
                                <div className="text-4xl mb-3">{value.icon}</div>
                                <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>
                                <p className="text-sm text-slate-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
