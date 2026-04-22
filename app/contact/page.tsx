'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: 'general',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
                            Contact
                            <br />
                            <span className="bg-gradient-to-r from-oxygen-700 to-fresh-600 bg-clip-text text-transparent">
                                Sales & Support
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600">
                            Technical inquiries, bulk orders, and facility tours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding">
                <div className="container-premium max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Inquiry</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-oxygen-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-oxygen-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                                        Company / Institution
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-oxygen-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-oxygen-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-slate-900 mb-2">
                                        Inquiry Type *
                                    </label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        required
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-oxygen-500 focus:outline-none transition-colors"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="bulk">Bulk Order (10+ units)</option>
                                        <option value="institutional">Institutional Purchase</option>
                                        <option value="facility">Facility Tour Request</option>
                                        <option value="technical">Technical Support</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-oxygen-500 focus:outline-none transition-colors resize-none"
                                    />
                                </div>

                                <Button type="submit" variant="gradient" size="lg" fullWidth>
                                    Submit Inquiry
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                {/* Sales */}
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3">Sales</h3>
                                    <div className="space-y-2 text-sm text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-oxygen-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>sales@oxygenixlabs.com</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-oxygen-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span>+91 80 1234 5678</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Support */}
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3">Technical Support</h3>
                                    <div className="space-y-2 text-sm text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-oxygen-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>support@oxygenixlabs.com</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-oxygen-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span>+91 80 8765 4321</span>
                                        </div>
                                        <div className="text-xs text-slate-500 mt-2">
                                            Mon-Sat: 9:00 AM - 6:00 PM IST
                                        </div>
                                    </div>
                                </div>

                                {/* Manufacturing Facility */}
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3">Manufacturing Facility</h3>
                                    <div className="space-y-2 text-sm text-slate-700">
                                        <div className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-oxygen-700 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>
                                                Oxygenix Labs Pvt. Ltd.<br />
                                                Bangalore, Karnataka 560001<br />
                                                India
                                            </span>
                                        </div>
                                        <div className="text-xs text-slate-500 mt-2">
                                            Facility tours available for corporate and institutional buyers
                                        </div>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="p-6 bg-oxygen-50 rounded-xl border border-oxygen-200">
                                    <h3 className="font-bold text-slate-900 mb-2">Response Time</h3>
                                    <p className="text-sm text-slate-700">
                                        Sales inquiries: 24 hours<br />
                                        Technical support: 48 hours<br />
                                        Facility tour requests: 3-5 business days
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
