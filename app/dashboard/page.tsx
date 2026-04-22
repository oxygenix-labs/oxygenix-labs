'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getCurrentUser } from '@/lib/auth/mockAuth';
import { formatDate, formatPrice } from '@/lib/utils/formatting';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Mock data - represents real user states
const mockUserStates = {
    // Day 1 user: Just purchased, anxious about order
    day1: {
        activeStatus: {
            type: 'order',
            status: 'confirmed',
            message: 'Installation scheduled for Feb 10, 2026',
            actionText: 'View Installation Details',
            actionLink: '/dashboard/orders',
            statusColor: 'blue',
        },
        hasProducts: false,
        nextMaintenance: null,
    },
    // Day 30 user: Product installed, settling in
    day30: {
        activeStatus: {
            type: 'maintenance',
            status: 'running',
            message: 'Next maintenance in 45 days',
            actionText: 'Schedule Service',
            actionLink: '/dashboard/maintenance',
            statusColor: 'green',
        },
        hasProducts: true,
        nextMaintenance: '2026-03-20',
    },
    // Year 1 user: Established, AMC renewal needed
    year1: {
        activeStatus: {
            type: 'amc',
            status: 'renewal-due',
            message: 'AMC expires in 15 days — Renew now',
            actionText: 'Renew AMC',
            actionLink: '/dashboard/amc',
            statusColor: 'amber',
        },
        hasProducts: true,
        nextMaintenance: '2026-02-25',
    },
};

// Using Day 30 state as default
const currentUserState = mockUserStates.day30;

const ownedProducts = [
    {
        id: 'prod-1',
        name: 'Home Compact HC-200',
        variant: '200 sq ft',
        installationDate: '2026-01-05',
        warrantyExpiry: '2028-01-05',
        amcActive: true,
        amcExpiry: '2027-01-05',
        image: '/products/home-compact.jpg',
    },
];

const maintenanceSchedule = [
    {
        id: 'maint-1',
        type: 'Routine Checkup',
        date: '2026-03-20',
        product: 'Home Compact HC-200',
        status: 'scheduled',
    },
    {
        id: 'maint-2',
        type: 'Filter Replacement',
        date: '2026-01-15',
        product: 'Home Compact HC-200',
        status: 'completed',
    },
];

const companyUpdates = [
    {
        id: 1,
        category: 'csr',
        title: 'We just installed our 10,000th oxygen system in rural India',
        description: 'Partnership with Karnataka Education Department brings clean air to 50 government schools.',
        date: '2026-01-30',
        impact: '2,500 students now breathe cleaner air',
    },
    {
        id: 2,
        category: 'product',
        title: 'New Home Plus Model: 2.5x Coverage, Same Footprint',
        description: 'Enhanced algae efficiency now covers up to 1000 sq ft. Available for pre-order.',
        date: '2026-01-28',
        impact: 'Perfect for larger living spaces',
    },
    {
        id: 3,
        category: 'manufacturing',
        title: 'ISO 9001:2015 Certification Achieved',
        description: 'Our Bangalore facility meets international quality management standards.',
        date: '2026-01-25',
        impact: 'Ensuring consistent product quality',
    },
];

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState(getCurrentUser());
    const [expandedUpdate, setExpandedUpdate] = useState<number | null>(null);

    useEffect(() => {
        if (!user) {
            router.push('/login?redirect=/dashboard');
        }
    }, [user, router]);

    if (!user) return null;

    const getStatusColor = (color: string) => {
        switch (color) {
            case 'blue':
                return 'bg-blue-50 border-blue-200 text-blue-800';
            case 'green':
                return 'bg-green-50 border-green-200 text-green-800';
            case 'amber':
                return 'bg-amber-50 border-amber-200 text-amber-800';
            default:
                return 'bg-slate-50 border-slate-200 text-slate-800';
        }
    };

    const getCategoryBadge = (category: string) => {
        switch (category) {
            case 'product':
                return 'bg-purple-100 text-purple-800';
            case 'manufacturing':
                return 'bg-blue-100 text-blue-800';
            case 'csr':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-slate-100 text-slate-800';
        }
    };

    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                {/* Welcome */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Welcome back, {user.name.split(' ')[0]}
                    </h1>
                </motion.div>

                {/* 1. ACTIVE STATUS CARD - Answers "What's happening right now?" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <div className={`rounded-2xl border-2 p-6 ${getStatusColor(currentUserState.activeStatus.statusColor)}`}>
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <div className="text-sm font-medium opacity-75 mb-1">Current Status</div>
                                <div className="text-xl font-bold mb-4">{currentUserState.activeStatus.message}</div>
                                <Link href={currentUserState.activeStatus.actionLink}>
                                    <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">
                                        {currentUserState.activeStatus.actionText}
                                    </button>
                                </Link>
                            </div>
                            <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-white/50 rounded-full">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. MY PRODUCTS - Answers "What do I own?" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold text-slate-900 mb-4">My Products</h2>

                    {currentUserState.hasProducts ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ownedProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-gradient-primary-light rounded-full flex items-center justify-center">
                                            <span className="text-2xl text-white font-bold">O</span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="font-bold text-slate-900 mb-1">{product.name}</div>
                                        <div className="text-sm text-slate-600 mb-4">{product.variant}</div>

                                        <div className="space-y-2 mb-4 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">Installed</span>
                                                <span className="font-medium text-slate-900">{formatDate(product.installationDate)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">Warranty until</span>
                                                <span className="font-medium text-slate-900">{formatDate(product.warrantyExpiry)}</span>
                                            </div>
                                        </div>

                                        {product.amcActive && (
                                            <div className="flex items-center gap-2 text-sm text-green-700 mb-4 p-2 bg-green-50 rounded-lg">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>AMC Active</span>
                                            </div>
                                        )}

                                        <div className="flex gap-2">
                                            <Link href={`/dashboard/products/${product.id}`} className="flex-1">
                                                <button className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">
                                                    View Details
                                                </button>
                                            </Link>
                                            <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                                                Support
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Your dashboard will come alive once your first product is installed</h3>
                            <p className="text-slate-600 mb-4">Track your order to see installation progress</p>
                            <Link href="/dashboard/orders">
                                <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">
                                    Track My Order
                                </button>
                            </Link>
                        </div>
                    )}
                </motion.div>

                {/* 3. MAINTENANCE & AMC - Answers "Am I protected?" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-900">Maintenance & AMC</h2>
                        <Link href="/dashboard/maintenance" className="text-sm font-medium text-brand-purple hover:text-brand-pink">
                            View All →
                        </Link>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        {currentUserState.nextMaintenance ? (
                            <>
                                <div className="flex items-center gap-3 mb-6 p-4 bg-green-50 rounded-lg">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-slate-900">Next service: {formatDate(currentUserState.nextMaintenance)}</div>
                                        <div className="text-sm text-slate-600">Routine maintenance for Home Compact HC-200</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="text-sm font-medium text-slate-700 mb-2">Recent Service History</div>
                                    {maintenanceSchedule.slice(0, 3).map((service) => (
                                        <div key={service.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <div>
                                                <div className="font-medium text-slate-900 text-sm">{service.type}</div>
                                                <div className="text-xs text-slate-600">{formatDate(service.date)}</div>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${service.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                {service.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-slate-600">No maintenance scheduled yet</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* 4. COMPANY UPDATES - Answers "Who is this company?" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Company Updates</h2>

                    <div className="space-y-4">
                        {companyUpdates.map((update) => (
                            <div key={update.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <div className="p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryBadge(update.category)}`}>
                                            {update.category.toUpperCase()}
                                        </span>
                                        <span className="text-xs text-slate-500">{formatDate(update.date)}</span>
                                    </div>

                                    <h3 className="font-bold text-slate-900 mb-2">{update.title}</h3>

                                    {expandedUpdate === update.id ? (
                                        <>
                                            <p className="text-sm text-slate-700 mb-3">{update.description}</p>
                                            <div className="flex items-center gap-2 text-sm text-brand-purple mb-3">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-medium">{update.impact}</span>
                                            </div>
                                            <button
                                                onClick={() => setExpandedUpdate(null)}
                                                className="text-sm text-slate-600 hover:text-slate-900 font-medium"
                                            >
                                                Show less
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-sm text-slate-600 mb-3 line-clamp-2">{update.description}</p>
                                            <button
                                                onClick={() => setExpandedUpdate(update.id)}
                                                className="text-sm text-brand-purple hover:text-brand-pink font-medium"
                                            >
                                                Read more →
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 5. SUPPORT ACCESS - Answers "How do I get help?" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-6">
                        <h3 className="font-bold text-slate-900 mb-4">Need Help?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <a href="tel:+918000000000" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-600">Call Us</div>
                                    <div className="text-sm font-semibold text-slate-900">Support</div>
                                </div>
                            </a>

                            <a href="https://wa.me/918000000000" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-600">WhatsApp</div>
                                    <div className="text-sm font-semibold text-slate-900">Chat</div>
                                </div>
                            </a>

                            <Link href="/dashboard/support" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-600">Help Center</div>
                                    <div className="text-sm font-semibold text-slate-900">FAQ</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
