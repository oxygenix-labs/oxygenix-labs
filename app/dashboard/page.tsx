'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getCurrentUser } from '@/lib/auth/mockAuth';
import { formatDate, formatPrice } from '@/lib/utils/formatting';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Mock data
const activeOrder = {
    id: 'ORD-2024-002',
    status: 'shipped',
    estimatedDelivery: '2024-01-25',
    trackingNumber: 'TRK987654321',
    product: 'Home Pro HP-500',
};

const amcStatus = {
    active: true,
    expiryDate: '2025-01-15',
    product: 'Home Compact HC-200',
};

const companyUpdates = [
    {
        id: 1,
        category: 'product',
        title: 'New Home Plus Model Launched',
        description: 'Introducing enhanced coverage up to 1000 sq ft with improved algae efficiency.',
        date: '2024-01-20',
        image: '/updates/product-launch.jpg',
    },
    {
        id: 2,
        category: 'manufacturing',
        title: 'ISO 9001:2015 Certification Achieved',
        description: 'Our manufacturing facility in Bangalore has been certified for quality management systems.',
        date: '2024-01-18',
        image: '/updates/certification.jpg',
    },
    {
        id: 3,
        category: 'csr',
        title: 'Clean Air Initiative: 50 Units Deployed in Government Schools',
        description: 'Partnership with Karnataka Education Department to improve classroom air quality.',
        date: '2024-01-15',
        image: '/updates/csr.jpg',
    },
    {
        id: 4,
        category: 'tech',
        title: 'Firmware Update v2.1 Available',
        description: 'Improved sensor accuracy and energy efficiency. Update via mobile app.',
        date: '2024-01-12',
        image: '/updates/firmware.jpg',
    },
];

const ownedProducts = [
    {
        id: 'prod-1',
        name: 'Home Compact HC-200',
        variant: '200 sq ft',
        purchaseDate: '2024-01-15',
        warrantyExpiry: '2026-01-15',
        amcActive: true,
        amcExpiry: '2025-01-15',
    },
];

const recommendations = [
    {
        id: 'rec-1',
        type: 'upgrade',
        title: 'Upgrade to Home Pro',
        description: 'Get 2.5x more coverage for your living room',
        product: 'Home Pro HP-500',
        price: 39999,
    },
    {
        id: 'rec-2',
        type: 'amc',
        title: 'AMC Renewal Due Soon',
        description: 'Renew before Feb 15 to avoid service interruption',
        product: 'Home Compact HC-200',
        daysLeft: 21,
    },
];

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState(getCurrentUser());

    useEffect(() => {
        if (!user) {
            router.push('/login?redirect=/dashboard');
        }
    }, [user, router]);

    if (!user) return null;

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'product':
                return 'bg-purple-100 text-purple-800';
            case 'manufacturing':
                return 'bg-blue-100 text-blue-800';
            case 'csr':
                return 'bg-green-100 text-green-800';
            case 'tech':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-slate-100 text-slate-800';
        }
    };

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto px-6">
                {/* 1. Welcome & Status Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold text-slate-900 mb-6">
                        Welcome back, {user.name.split(' ')[0]}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Active Order Status */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="text-sm text-slate-600 mb-1">Active Order</div>
                                    <div className="text-xl font-bold text-slate-900">{activeOrder.id}</div>
                                </div>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                    {activeOrder.status.toUpperCase()}
                                </span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Product:</span>
                                    <span className="font-medium text-slate-900">{activeOrder.product}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Est. Delivery:</span>
                                    <span className="font-medium text-slate-900">{formatDate(activeOrder.estimatedDelivery)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Tracking:</span>
                                    <span className="font-mono text-xs text-slate-900">{activeOrder.trackingNumber}</span>
                                </div>
                            </div>
                            <Link href="/dashboard/orders">
                                <button className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">
                                    Track Order
                                </button>
                            </Link>
                        </div>

                        {/* AMC Status */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="text-sm text-green-700 mb-1">AMC Status</div>
                                    <div className="text-xl font-bold text-slate-900">{amcStatus.product}</div>
                                </div>
                                <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                    ACTIVE
                                </span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-700">Valid Until:</span>
                                    <span className="font-medium text-slate-900">{formatDate(amcStatus.expiryDate)}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-green-700">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Free maintenance included</span>
                                </div>
                            </div>
                            <button className="w-full px-4 py-2 bg-white border border-green-300 text-green-800 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium">
                                View Details
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Orders Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-900">Your Orders</h2>
                        <Link href="/dashboard/orders" className="text-sm font-medium text-brand-purple hover:text-brand-pink">
                            View All →
                        </Link>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold text-brand-purple">O</span>
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-slate-900">{activeOrder.product}</div>
                                <div className="text-sm text-slate-600">Order {activeOrder.id}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-slate-600 mb-1">Status</div>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                    In Transit
                                </span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative pl-8 space-y-4">
                            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200"></div>

                            <div className="relative">
                                <div className="absolute -left-6 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
                                <div className="text-sm">
                                    <div className="font-medium text-slate-900">Order Placed</div>
                                    <div className="text-slate-600">Jan 20, 2024</div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-6 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
                                <div className="text-sm">
                                    <div className="font-medium text-slate-900">Shipped</div>
                                    <div className="text-slate-600">Jan 22, 2024</div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-6 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                                <div className="text-sm">
                                    <div className="font-medium text-slate-500">Expected Delivery</div>
                                    <div className="text-slate-600">Jan 25, 2024</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. What's New at Oxygenix */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-900">What's New at Oxygenix</h2>
                        <Link href="/dashboard/updates" className="text-sm font-medium text-brand-purple hover:text-brand-pink">
                            View All Updates →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {companyUpdates.slice(0, 4).map((update) => (
                            <div key={update.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-gradient-primary-light rounded-full flex items-center justify-center">
                                        <span className="text-3xl text-white font-bold">O</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(update.category)}`}>
                                            {update.category.toUpperCase()}
                                        </span>
                                        <span className="text-xs text-slate-500">{formatDate(update.date)}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{update.title}</h3>
                                    <p className="text-sm text-slate-600 line-clamp-2">{update.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 4. Product Ecosystem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Your Product Ecosystem</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Owned Products */}
                        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="font-semibold text-slate-900 mb-4">Owned Products</h3>
                            {ownedProducts.map((product) => (
                                <div key={product.id} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl font-bold text-brand-purple">O</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-slate-900">{product.name}</div>
                                        <div className="text-sm text-slate-600 mb-2">{product.variant}</div>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <span className="text-slate-500">Purchased:</span>
                                                <span className="ml-1 text-slate-900">{formatDate(product.purchaseDate)}</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-500">Warranty:</span>
                                                <span className="ml-1 text-slate-900">{formatDate(product.warrantyExpiry)}</span>
                                            </div>
                                        </div>
                                        {product.amcActive && (
                                            <div className="mt-2 flex items-center gap-1 text-xs text-green-700">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>AMC Active until {formatDate(product.amcExpiry)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <Link href="/dashboard/products">
                                        <button className="px-3 py-1.5 text-xs font-medium text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Recommendations */}
                        <div className="space-y-4">
                            {recommendations.map((rec) => (
                                <div key={rec.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5">
                                    <div className="text-xs font-semibold text-blue-700 mb-2">{rec.type.toUpperCase()}</div>
                                    <h4 className="font-bold text-slate-900 mb-1">{rec.title}</h4>
                                    <p className="text-sm text-slate-700 mb-3">{rec.description}</p>
                                    {rec.price && (
                                        <div className="text-lg font-bold text-brand-purple mb-3">{formatPrice(rec.price)}</div>
                                    )}
                                    {rec.daysLeft && (
                                        <div className="text-sm text-orange-700 mb-3">{rec.daysLeft} days left</div>
                                    )}
                                    <button className="w-full px-4 py-2 bg-white border border-blue-300 text-blue-800 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                                        Learn More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 5. Announcements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-1">Firmware Update Available</h3>
                                <p className="text-sm text-slate-700 mb-3">
                                    Version 2.1 is now available for your Home Compact. Improved sensor accuracy and 15% better energy efficiency.
                                </p>
                                <button className="px-4 py-2 bg-brand-purple text-white rounded-lg hover:bg-brand-pink transition-colors text-sm font-medium">
                                    Update Now
                                </button>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
