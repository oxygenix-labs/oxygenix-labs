'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export default function Contact() {
    const [activeTab, setActiveTab] = useState<'home' | 'corporate' | 'partnership'>('home');

    return (
        <section id="contact" className="section-padding bg-slate-900 text-white">
            <div className="container-premium">
                <SectionHeader
                    title="Get in Touch"
                    description="Different needs, different flows. Choose what fits you best."
                />

                {/* Tab Selector */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-slate-800 rounded-xl p-1">
                        <button
                            onClick={() => setActiveTab('home')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'home'
                                    ? 'bg-gradient-primary-light text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            🏠 Home Buyers
                        </button>
                        <button
                            onClick={() => setActiveTab('corporate')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'corporate'
                                    ? 'bg-gradient-primary-light text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            🏢 Corporate Demo
                        </button>
                        <button
                            onClick={() => setActiveTab('partnership')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'partnership'
                                    ? 'bg-gradient-primary-light text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            🤝 Partnerships
                        </button>
                    </div>
                </div>

                {/* Contact Forms */}
                <div className="max-w-2xl mx-auto">
                    {activeTab === 'home' && (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold mb-6">Buy for Your Home</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Room Size</label>
                                    <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white">
                                        <option>Small Bedroom (200 sq ft)</option>
                                        <option>Master Bedroom (300 sq ft)</option>
                                        <option>Living Room (500 sq ft)</option>
                                        <option>Large Hall (800 sq ft)</option>
                                    </select>
                                </div>
                                <Button variant="primary" size="lg" fullWidth>
                                    Get Product Recommendation
                                </Button>
                            </form>
                        </motion.div>
                    )}

                    {activeTab === 'corporate' && (
                        <motion.div
                            key="corporate"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold mb-6">Schedule Corporate Demo</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="Your company"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Contact Person</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Office Size</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="e.g., 10,000 sq ft, 200 employees"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="Tell us about your requirements"
                                    />
                                </div>
                                <Button variant="primary" size="lg" fullWidth>
                                    Request Demo
                                </Button>
                            </form>
                        </motion.div>
                    )}

                    {activeTab === 'partnership' && (
                        <motion.div
                            key="partnership"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold mb-6">CSR & Government Partnerships</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Organization Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="Your organization"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Partnership Type</label>
                                    <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white">
                                        <option>CSR Initiative</option>
                                        <option>Government Project</option>
                                        <option>Educational Institution</option>
                                        <option>Healthcare Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Contact Person</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Designation</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                            placeholder="Your role"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="official@organization.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Project Details</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                                        placeholder="Tell us about your partnership proposal"
                                    />
                                </div>
                                <Button variant="primary" size="lg" fullWidth>
                                    Submit Partnership Inquiry
                                </Button>
                            </form>
                        </motion.div>
                    )}
                </div>

                {/* Contact Info */}
                <div className="mt-16 pt-16 border-t border-slate-800">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl mb-3">📧</div>
                            <h4 className="font-bold mb-2">Email</h4>
                            <a href="mailto:hello@oxygenixlabs.com" className="text-slate-400 hover:text-white transition-colors">
                                hello@oxygenixlabs.com
                            </a>
                        </div>
                        <div>
                            <div className="text-3xl mb-3">📞</div>
                            <h4 className="font-bold mb-2">Phone</h4>
                            <a href="tel:+911234567890" className="text-slate-400 hover:text-white transition-colors">
                                +91 123 456 7890
                            </a>
                        </div>
                        <div>
                            <div className="text-3xl mb-3">📍</div>
                            <h4 className="font-bold mb-2">Location</h4>
                            <p className="text-slate-400">
                                Manufacturing Facility<br />
                                Bangalore, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
