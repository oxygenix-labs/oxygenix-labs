'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getCurrentUser } from '@/lib/auth/mockAuth';
import { formatDate, formatPrice } from '@/lib/utils/formatting';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Mock orders data (same as dashboard)
const mockOrders = [
    {
        id: 'ORD-2024-001',
        date: '2024-01-15',
        status: 'delivered',
        total: 29999,
        deliveredDate: '2024-01-20',
        items: [
            {
                name: 'Home Compact HC-200',
                variant: '200 sq ft',
                quantity: 1,
                price: 24999,
            },
        ],
        shippingAddress: '123 MG Road, Bangalore, Karnataka 560001',
        trackingNumber: 'TRK123456789',
    },
    {
        id: 'ORD-2024-002',
        date: '2024-01-20',
        status: 'shipped',
        total: 54998,
        items: [
            {
                name: 'Home Pro HP-500',
                variant: '500 sq ft',
                quantity: 1,
                price: 39999,
            },
            {
                name: 'AMC - Annual',
                variant: 'Home Pro HP-500',
                quantity: 1,
                price: 5499,
            },
        ],
        shippingAddress: '456 Park Street, Mumbai, Maharashtra 400001',
        trackingNumber: 'TRK987654321',
        estimatedDelivery: '2024-01-25',
    },
    {
        id: 'ORD-2024-003',
        date: '2024-01-10',
        status: 'processing',
        total: 79999,
        items: [
            {
                name: 'Corporate Office CO-1000',
                variant: '1000 sq ft',
                quantity: 1,
                price: 79999,
            },
        ],
        shippingAddress: '789 Tech Park, Hyderabad, Telangana 500001',
    },
];

export default function OrdersPage() {
    const router = useRouter();
    const user = getCurrentUser();
    const [filterStatus, setFilterStatus] = useState<string>('all');

    if (!user) {
        router.push('/login?redirect=/dashboard/orders');
        return null;
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'delivered':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'shipped':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'processing':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-slate-100 text-slate-800 border-slate-200';
        }
    };

    const filteredOrders = filterStatus === 'all'
        ? mockOrders
        : mockOrders.filter(order => order.status === filterStatus);

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto px-6">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Link href="/dashboard" className="hover:text-slate-900 transition-colors">Dashboard</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">Orders</span>
                    </div>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <GradientText className="text-4xl font-bold mb-2">My Orders</GradientText>
                    <p className="text-lg text-slate-600">Track and manage your orders</p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="bg-white rounded-xl shadow-lg p-2 mb-6 inline-flex gap-2">
                    {[
                        { value: 'all', label: 'All Orders' },
                        { value: 'processing', label: 'Processing' },
                        { value: 'shipped', label: 'Shipped' },
                        { value: 'delivered', label: 'Delivered' },
                    ].map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setFilterStatus(filter.value)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${filterStatus === filter.value
                                ? 'bg-brand-purple text-white shadow-md'
                                : 'text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Orders List */}
                <div className="space-y-6">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order, index) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                                {/* Order Header */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-slate-200">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-slate-900">{order.id}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getStatusColor(order.status)}`}>
                                                    {order.status.toUpperCase()}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-600">
                                                Ordered on {formatDate(order.date)}
                                                {order.deliveredDate && ` • Delivered on ${formatDate(order.deliveredDate)}`}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-brand-purple">{formatPrice(order.total)}</div>
                                            <p className="text-sm text-slate-600">{order.items.length} item(s)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="p-6">
                                    <div className="space-y-4 mb-6">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                                                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-2xl font-bold text-brand-purple">O</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                                                    <p className="text-sm text-slate-600">{item.variant} • Quantity: {item.quantity}</p>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-bold text-slate-900">{formatPrice(item.price)}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Shipping Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Shipping Address
                                            </h4>
                                            <p className="text-sm text-slate-700">{order.shippingAddress}</p>
                                        </div>

                                        {order.trackingNumber && (
                                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                                    </svg>
                                                    Tracking Number
                                                </h4>
                                                <p className="text-sm font-mono text-slate-700">{order.trackingNumber}</p>
                                                {order.estimatedDelivery && (
                                                    <p className="text-xs text-slate-600 mt-1">
                                                        Est. Delivery: {formatDate(order.estimatedDelivery)}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="outline" className="flex-1 md:flex-none">
                                            Download Invoice
                                        </Button>
                                        {order.status === 'shipped' && (
                                            <Button variant="primary" className="flex-1 md:flex-none">
                                                Track Order
                                            </Button>
                                        )}
                                        {order.status === 'delivered' && (
                                            <Button variant="gradient" className="flex-1 md:flex-none">
                                                Write Review
                                            </Button>
                                        )}
                                        {order.status === 'processing' && (
                                            <Button variant="outline" className="flex-1 md:flex-none">
                                                Cancel Order
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No orders found</h3>
                            <p className="text-slate-600 mb-6">Try adjusting your filter or start shopping</p>
                            <Link href="/products">
                                <Button variant="gradient">Browse Products</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
