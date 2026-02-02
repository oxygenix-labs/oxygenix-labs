'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/lib/store/cartStore';
import { formatPrice } from '@/lib/utils/formatting';
import Button from '@/components/ui/Button';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, removeItem, updateQuantity, toggleAMC, getSubtotal, getTax, getTotal } = useCartStore();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-slate-900">Shopping Cart</h2>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">
                                {items.length} {items.length === 1 ? 'item' : 'items'}
                            </p>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Your cart is empty</h3>
                                    <p className="text-slate-600 mb-4">Add some products to get started</p>
                                    <Link href="/products" onClick={onClose}>
                                        <Button variant="gradient">Browse Products</Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={`${item.productId}-${item.variantId}`} className="bg-slate-50 rounded-xl p-4">
                                            <div className="flex gap-4">
                                                {/* Product Image */}
                                                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-2xl font-bold text-brand-purple">O</span>
                                                </div>

                                                {/* Product Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-slate-900 truncate">{item.productName}</h4>
                                                    <p className="text-sm text-slate-600">{item.variantName} - {item.coverage}</p>
                                                    <p className="text-sm font-semibold text-brand-purple mt-1">
                                                        {formatPrice(item.price)}
                                                    </p>

                                                    {/* AMC Toggle */}
                                                    {item.amcPrice && (
                                                        <label className="flex items-center gap-2 mt-2 cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={item.includeAMC}
                                                                onChange={() => toggleAMC(item.productId, item.variantId)}
                                                                className="w-4 h-4 rounded border-slate-300 text-brand-purple focus:ring-brand-purple"
                                                            />
                                                            <span className="text-xs text-slate-600">
                                                                AMC +{formatPrice(item.amcPrice)}
                                                            </span>
                                                        </label>
                                                    )}

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-2 mt-3">
                                                        <button
                                                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                                                            className="w-7 h-7 rounded border border-slate-300 hover:border-brand-purple transition-colors flex items-center justify-center text-sm font-bold"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                                                            className="w-7 h-7 rounded border border-slate-300 hover:border-brand-purple transition-colors flex items-center justify-center text-sm font-bold"
                                                        >
                                                            +
                                                        </button>
                                                        <button
                                                            onClick={() => removeItem(item.productId, item.variantId)}
                                                            className="ml-auto text-red-600 hover:text-red-700 text-sm font-medium"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer with Totals */}
                        {items.length > 0 && (
                            <div className="border-t border-slate-200 p-6 bg-slate-50">
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Subtotal:</span>
                                        <span className="font-semibold">{formatPrice(getSubtotal())}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Tax (18% GST):</span>
                                        <span className="font-semibold">{formatPrice(getTax())}</span>
                                    </div>
                                    <div className="border-t border-slate-300 pt-2">
                                        <div className="flex justify-between">
                                            <span className="font-bold text-slate-900">Total:</span>
                                            <span className="text-xl font-bold text-brand-purple">{formatPrice(getTotal())}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout" onClick={onClose}>
                                    <Button variant="gradient" className="w-full mb-2">
                                        Proceed to Checkout
                                    </Button>
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="w-full text-center text-sm text-slate-600 hover:text-slate-900 transition-colors py-2"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
