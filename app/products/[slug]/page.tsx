'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProductBySlug } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cartStore';
import { formatPrice } from '@/lib/utils/formatting';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import Toast from '@/components/ui/Toast';
import ImageGallery from '@/components/product/ImageGallery';
import ReviewsSection from '@/components/product/ReviewsSection';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const product = getProductBySlug(slug);

    const [selectedVariantId, setSelectedVariantId] = useState(product?.variants[0]?.id || '');
    const [includeAMC, setIncludeAMC] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const addItem = useCartStore((state) => state.addItem);

    if (!product) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
                    <Link href="/products">
                        <Button variant="gradient">Browse All Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];
    const totalPrice = selectedVariant.price * quantity + (includeAMC && selectedVariant.amcPrice ? selectedVariant.amcPrice * quantity : 0);

    // Use images array or fallback to single image
    const productImages = product.images || [product.image, product.image, product.image, product.image, product.image];

    const handleAddToCart = () => {
        addItem({
            productId: product.id,
            variantId: selectedVariant.id,
            productName: product.name,
            variantName: selectedVariant.name,
            price: selectedVariant.price,
            image: product.image,
            coverage: selectedVariant.coverage,
            includeAMC,
            amcPrice: selectedVariant.amcPrice,
            quantity,
        });

        setToast({ message: '✅ Added to cart successfully!', type: 'success' });
        setTimeout(() => setToast(null), 3000);
    };

    const handleBuyNow = () => {
        handleAddToCart();
        setTimeout(() => {
            router.push('/checkout');
        }, 500);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-slate-200">
                <div className="container-premium py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container-premium py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="sticky top-24 self-start"
                    >
                        <ImageGallery images={productImages} productName={product.name} />
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-medium text-brand-purple px-3 py-1 bg-purple-50 rounded-full">
                                    {product.categoryLabel}
                                </span>
                                {product.inStock && (
                                    <span className="text-sm font-medium text-green-700 px-3 py-1 bg-green-50 rounded-full flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        In Stock
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl font-bold text-slate-900 mb-3">{product.name}</h1>

                            {/* Rating */}
                            {product.rating && (
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(product.rating!) ? 'text-yellow-400' : 'text-slate-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-slate-900">{product.rating}</span>
                                    <span className="text-sm text-slate-600">({product.reviewCount} reviews)</span>
                                    <a href="#reviews" className="text-sm text-brand-purple hover:underline">
                                        See all reviews
                                    </a>
                                </div>
                            )}

                            <p className="text-lg text-slate-700 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Variant Selector */}
                        <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-slate-100">
                            <label className="block text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Select Coverage Area
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {product.variants.map((variant) => (
                                    <button
                                        key={variant.id}
                                        onClick={() => setSelectedVariantId(variant.id)}
                                        className={`p-4 border-2 rounded-xl transition-all text-left ${selectedVariantId === variant.id
                                                ? 'border-brand-purple bg-purple-50 shadow-lg scale-105'
                                                : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="font-bold text-slate-900 text-lg">{variant.name}</div>
                                        <div className="text-sm text-slate-600 mt-1">{variant.coverage}</div>
                                        <div className="text-xs text-slate-500 mt-1">For {variant.roomSize}</div>
                                        <div className="text-xl font-bold text-brand-purple mt-2">
                                            {formatPrice(variant.price)}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* AMC Add-on */}
                        {selectedVariant.amcPrice && (
                            <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={includeAMC}
                                        onChange={(e) => setIncludeAMC(e.target.checked)}
                                        className="w-6 h-6 mt-1 rounded border-slate-300 text-brand-purple focus:ring-brand-purple cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="font-bold text-slate-900 text-lg">Annual Maintenance Contract (AMC)</span>
                                            <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">RECOMMENDED</span>
                                        </div>
                                        <ul className="text-sm text-slate-700 space-y-1 mb-3">
                                            <li className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Free filter replacement (worth ₹{product.maintenanceCost.yearly})
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Algae culture maintenance & replacement
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Priority customer support
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Annual health check & calibration
                                            </li>
                                        </ul>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-brand-purple">{formatPrice(selectedVariant.amcPrice)}</span>
                                            <span className="text-sm text-slate-600">/year</span>
                                            <span className="text-xs text-green-700 font-semibold ml-2">Save {Math.round((product.maintenanceCost.yearly - selectedVariant.amcPrice) / product.maintenanceCost.yearly * 100)}%</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        )}

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-900 mb-3">Quantity</label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 bg-white border-2 border-slate-300 rounded-lg p-2">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center font-bold text-lg"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-16 text-center text-lg font-bold border-0 focus:ring-0"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center font-bold text-lg"
                                    >
                                        +
                                    </button>
                                </div>
                                {quantity > 1 && (
                                    <span className="text-sm text-slate-600">
                                        Bulk order discount available for 5+ units
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Price Summary */}
                        <div className="mb-6 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-slate-700">
                                    <span>Product Price ({quantity}x):</span>
                                    <span className="font-semibold">{formatPrice(selectedVariant.price * quantity)}</span>
                                </div>
                                {includeAMC && selectedVariant.amcPrice && (
                                    <div className="flex justify-between items-center text-slate-700">
                                        <span>AMC (Annual) ({quantity}x):</span>
                                        <span className="font-semibold text-blue-700">{formatPrice(selectedVariant.amcPrice * quantity)}</span>
                                    </div>
                                )}
                                <div className="border-t-2 border-slate-300 pt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-slate-900">Total Amount:</span>
                                        <span className="text-3xl font-bold text-brand-purple">{formatPrice(totalPrice)}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 mt-1">Inclusive of all taxes • Free shipping</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-8">
                            <Button variant="gradient" className="flex-1 py-4 text-lg" onClick={handleAddToCart}>
                                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Add to Cart
                            </Button>
                            <Button variant="primary" className="flex-1 py-4 text-lg" onClick={handleBuyNow}>
                                Buy Now
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl border border-slate-200">
                            <div className="text-center">
                                <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-xs font-semibold text-slate-900">2 Year Warranty</p>
                            </div>
                            <div className="text-center">
                                <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                                </svg>
                                <p className="text-xs font-semibold text-slate-900">Free Shipping</p>
                            </div>
                            <div className="text-center">
                                <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                </svg>
                                <p className="text-xs font-semibold text-slate-900">30 Day Returns</p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Specifications</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                                        <div className="text-xs text-slate-500 uppercase mb-1 font-semibold">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </div>
                                        <div className="font-bold text-slate-900">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Reviews Section */}
                <div id="reviews" className="mt-12">
                    <ReviewsSection
                        productId={product.id}
                        productName={product.name}
                        averageRating={product.rating || 4.7}
                        totalReviews={product.reviewCount || 342}
                    />
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}
