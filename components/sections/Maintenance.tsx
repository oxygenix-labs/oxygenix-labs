'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Maintenance() {
    const maintenanceItems = [
        {
            component: 'HEPA Filter',
            frequency: 'Every 12-18 months',
            cost: '₹2,999 - ₹4,999',
            difficulty: 'Easy',
            icon: '🔧',
        },
        {
            component: 'Algae Bioreactor',
            frequency: 'Every 6-9 months',
            cost: '₹1,999 - ₹3,499',
            difficulty: 'Moderate',
            icon: '🌱',
        },
        {
            component: 'Pre-Filter',
            frequency: 'Every 3 months',
            cost: '₹499 - ₹799',
            difficulty: 'Very Easy',
            icon: '🧹',
        },
        {
            component: 'Sensor Calibration',
            frequency: 'Yearly',
            cost: 'Free (AMC)',
            difficulty: 'Professional',
            icon: '📊',
        },
    ];

    const amcPlans = [
        {
            name: 'Basic AMC',
            price: '₹4,999/year',
            features: [
                '2 scheduled visits',
                'Filter cleaning',
                'Sensor calibration',
                'Performance check',
            ],
        },
        {
            name: 'Premium AMC',
            price: '₹7,999/year',
            features: [
                '4 scheduled visits',
                'All filters included',
                'Algae replacement',
                'Priority support',
                '24/7 helpline',
            ],
            recommended: true,
        },
        {
            name: 'Enterprise AMC',
            price: 'Custom pricing',
            features: [
                'Monthly visits',
                'Dedicated technician',
                'All parts included',
                'Performance analytics',
                'SLA guarantee',
            ],
        },
    ];

    return (
        <section id="maintenance" className="section-padding bg-slate-50">
            <div className="container-premium">
                <SectionHeader
                    title="Transparent Maintenance"
                    description="Know exactly what to expect. No hidden costs, no surprises."
                    gradient
                />

                {/* Maintenance Items */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        What Needs Maintenance?
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {maintenanceItems.map((item, index) => (
                            <motion.div
                                key={item.component}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 border border-slate-200"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h4 className="font-bold text-slate-900 mb-4">{item.component}</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Frequency:</span>
                                        <span className="font-medium text-slate-900">{item.frequency}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Cost:</span>
                                        <span className="font-medium text-slate-900">{item.cost}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Difficulty:</span>
                                        <span className="font-medium text-slate-900">{item.difficulty}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AMC Plans */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Annual Maintenance Contracts
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {amcPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl p-8 border-2 ${plan.recommended
                                        ? 'border-brand-purple shadow-xl scale-105'
                                        : 'border-slate-200'
                                    }`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-primary-light text-white px-4 py-1 rounded-full text-sm font-medium">
                                            Recommended
                                        </span>
                                    </div>
                                )}

                                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                                <div className="text-3xl font-bold text-slate-900 mb-6">{plan.price}</div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-slate-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-lg font-medium transition-all ${plan.recommended
                                            ? 'bg-gradient-primary-light text-white hover:shadow-lg'
                                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                        }`}
                                >
                                    Choose Plan
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Yearly Cost Breakdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                        Total Cost of Ownership
                    </h3>
                    <p className="text-center text-slate-700 mb-6">
                        Typical yearly cost for a home unit (without AMC)
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">₹4,999</div>
                            <div className="text-sm text-slate-600">Filters & Parts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">₹1,200</div>
                            <div className="text-sm text-slate-600">Electricity (yearly)</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-brand-purple mb-1">₹6,199</div>
                            <div className="text-sm text-slate-600">Total/Year</div>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-600 mt-6">
                        Less than ₹520/month for oxygen-positive air quality
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
