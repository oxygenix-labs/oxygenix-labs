'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store/cartStore';
import { getCurrentUser } from '@/lib/auth/mockAuth';
import { formatPrice } from '@/lib/utils/formatting';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';

export default function CheckoutPage() {
    const router = useRouter();
    const user = getCurrentUser();
    const { items, getSubtotal, getTax, getTotal } = useCartStore();

    useEffect(() => {
        if (!user) {
            router.push('/login?redirect=/checkout');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                    <p className="text-slate-600 mb-6">Add some products to checkout</p>
                    <Link href="/products">
                        <Button variant="gradient">Browse Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container-premium">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <GradientText className="text-4xl font-bold mb-8 text-center">Checkout</GradientText>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Information */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={user.email}
                                            disabled
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Shipping Address</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                                        <input
                                            type="text"
                                            placeholder="Street address"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">PIN Code</label>
                                            <input
                                                type="text"
                                                placeholder="400001"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Country</label>
                                            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent">
                                                <option>India</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Payment Method</h3>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-sm text-blue-900">
                                        <strong>Note:</strong> Payment integration will be added in Phase 3. This is a frontend-only demo.
                                    </p>
                                </div>
                                <div className="mt-4 space-y-3">
                                    <label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-brand-purple transition-colors">
                                        <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-brand-purple" />
                                        <span className="font-medium">Credit/Debit Card</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-brand-purple transition-colors">
                                        <input type="radio" name="payment" className="w-4 h-4 text-brand-purple" />
                                        <span className="font-medium">UPI</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-brand-purple transition-colors">
                                        <input type="radio" name="payment" className="w-4 h-4 text-brand-purple" />
                                        <span className="font-medium">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Order Summary</h3>

                                {/* Cart Items */}
                                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                                    {items.map((item) => (
                                        <div key={`${item.productId}-${item.variantId}`} className="flex gap-3 pb-3 border-b border-slate-200">
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl font-bold text-brand-purple">O</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-sm text-slate-900 truncate">{item.productName}</h4>
                                                <p className="text-xs text-slate-600">{item.variantName}</p>
                                                <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                                                {item.includeAMC && <p className="text-xs text-brand-purple">+ AMC</p>}
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-sm">{formatPrice(item.price * item.quantity)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Price Breakdown */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Subtotal:</span>
                                        <span className="font-semibold">{formatPrice(getSubtotal())}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Tax (18% GST):</span>
                                        <span className="font-semibold">{formatPrice(getTax())}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Shipping:</span>
                                        <span className="font-semibold text-green-600">FREE</span>
                                    </div>
                                    <div className="border-t border-slate-300 pt-2 mt-2">
                                        <div className="flex justify-between">
                                            <span className="font-bold text-slate-900">Total:</span>
                                            <span className="text-2xl font-bold text-brand-purple">{formatPrice(getTotal())}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Place Order Button */}
                                <Button variant="gradient" className="w-full mb-3">
                                    Place Order
                                </Button>
                                <Link href="/products">
                                    <Button variant="outline" className="w-full">
                                        Continue Shopping
                                    </Button>
                                </Link>

                                {/* Security Badge */}
                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Secure checkout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
