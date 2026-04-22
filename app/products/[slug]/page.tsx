'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatting';
import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';
import ImageGallery from '@/components/product/ImageGallery';

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.slug === params.slug);
    const [selectedVariant, setSelectedVariant] = useState(0);
    const addToCart = useCartStore((state) => state.addItem);

    if (!product) {
        notFound();
    }

    const variant = product.variants[selectedVariant];

    const handleAddToCart = () => {
        addToCart({
            productId: product.id,
            variantId: variant.id,
            quantity: 1,
        });
    };

    // Product capabilities
    const capabilities = [
        'Filters PM2.5 and PM10 particles (99.97% efficiency)',
        'Generates oxygen through natural algae photosynthesis',
        'Real-time air quality monitoring via mobile app',
        'Reduces CO₂ levels in enclosed spaces',
        'HEPA + carbon filtration system',
        'Quiet operation (<35 dB)',
    ];

    const limitations = [
        'Does not eliminate viruses or bacteria',
        'Cannot replace medical-grade oxygen supply',
        'Requires filter replacement every 6 months',
        'Needs adequate light for algae photosynthesis',
        'Not suitable for outdoor use',
        'Requires regular maintenance',
    ];

    const howItWorks = [
        {
            step: '1',
            title: 'Air Intake',
            description: 'Built-in fan draws indoor air into the filtration chamber',
        },
        {
            step: '2',
            title: 'Multi-Stage Filtration',
            description: 'HEPA and carbon filters remove 99.97% of particulate matter',
        },
        {
            step: '3',
            title: 'Algae Oxygen Generation',
            description: 'Live algae culture produces oxygen through photosynthesis',
        },
        {
            step: '4',
            title: 'Clean Air Release',
            description: 'Purified, oxygen-enriched air circulates back into your space',
        },
    ];

    const maintenanceCosts = {
        filterReplacement: 1500,
        algaeRefresh: 750,
        technicianVisit: 499,
        annualTotal: 4249,
        amcPrice: 3499,
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="container-premium py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Link href="/" className="hover:text-oxygen-700">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-oxygen-700">Products</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container-premium py-12">
                {/* Product Identity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Image Gallery */}
                    <div>
                        <ImageGallery images={product.images || []} productName={product.name} />
                    </div>

                    {/* Product Info */}
                    <div>
                        {/* Category Badge */}
                        <div className="mb-4">
                            <span className="px-3 py-1 bg-oxygen-100 text-oxygen-800 text-sm font-semibold rounded-full">
                                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
                        <p className="text-xl text-slate-600 mb-8">{product.shortDescription}</p>

                        {/* Variant Selection */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Select Coverage Area</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {product.variants.map((v, index) => (
                                    <button
                                        key={v.id}
                                        onClick={() => setSelectedVariant(index)}
                                        className={`p-4 rounded-xl border-2 transition-all text-left ${selectedVariant === index
                                            ? 'border-oxygen-700 bg-oxygen-50'
                                            : 'border-slate-200 hover:border-oxygen-300'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-bold text-slate-900">{v.name}</div>
                                                <div className="text-sm text-slate-600">Up to {v.coverage}</div>
                                            </div>
                                            <div className="text-xl font-bold text-oxygen-700">
                                                {formatPrice(v.price)}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="bg-slate-50 rounded-xl p-6 mb-6">
                            <div className="flex items-baseline gap-3 mb-4">
                                <div className="text-3xl font-bold text-slate-900">
                                    {formatPrice(variant.price)}
                                </div>
                                <div className="text-sm text-slate-600">+ taxes</div>
                            </div>

                            <div className="space-y-3">
                                <Button variant="gradient" size="lg" fullWidth onClick={handleAddToCart}>
                                    Add to Cart
                                </Button>
                                <Link href="/contact">
                                    <Button variant="outline" size="lg" fullWidth>
                                        Request Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Key Specs */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between py-2 border-b border-slate-200">
                                <span className="text-slate-600">Coverage:</span>
                                <span className="font-semibold text-slate-900">Up to {variant.coverage}</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-slate-200">
                                <span className="text-slate-600">Filtration:</span>
                                <span className="font-semibold text-slate-900">99.97% PM2.5</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-slate-200">
                                <span className="text-slate-600">Noise Level:</span>
                                <span className="font-semibold text-slate-900">&lt;35 dB</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-slate-200">
                                <span className="text-slate-600">Warranty:</span>
                                <span className="font-semibold text-slate-900">2 years</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What It Does / Doesn't Do */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Capabilities */}
                    <div className="bg-white rounded-2xl border-2 border-oxygen-200 p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">What This Product Does</h2>
                        <ul className="space-y-3">
                            {capabilities.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Limitations */}
                    <div className="bg-white rounded-2xl border-2 border-slate-300 p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">What It Does NOT Do</h2>
                        <ul className="space-y-3">
                            {limitations.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* How It Works */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-slate-50 rounded-xl border-2 border-slate-200 p-6">
                                    <div className="w-12 h-12 bg-gradient-oxygen rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-600">{step.description}</p>
                                </div>
                                {index < howItWorks.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300 z-10" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Maintenance Transparency */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Maintenance Costs</h2>
                    <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl border-2 border-slate-200 p-8">
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                                <div>
                                    <div className="font-semibold text-slate-900">Filter Replacement</div>
                                    <div className="text-sm text-slate-600">Every 6 months</div>
                                </div>
                                <div className="text-lg font-bold text-slate-900">
                                    ₹{maintenanceCosts.filterReplacement.toLocaleString()}
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                                <div>
                                    <div className="font-semibold text-slate-900">Algae Culture Refresh</div>
                                    <div className="text-sm text-slate-600">Annually</div>
                                </div>
                                <div className="text-lg font-bold text-slate-900">
                                    ₹{maintenanceCosts.algaeRefresh.toLocaleString()}
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                                <div>
                                    <div className="font-semibold text-slate-900">Technician Visit</div>
                                    <div className="text-sm text-slate-600">Per visit</div>
                                </div>
                                <div className="text-lg font-bold text-slate-900">
                                    ₹{maintenanceCosts.technicianVisit.toLocaleString()}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t-2 border-slate-300 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="font-bold text-slate-900">Estimated Annual Cost</div>
                                <div className="text-2xl font-bold text-slate-900">
                                    ₹{maintenanceCosts.annualTotal.toLocaleString()}
                                </div>
                            </div>
                            <div className="p-4 bg-oxygen-50 border border-oxygen-200 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="font-semibold text-slate-900">AMC Option:</div>
                                    <div className="text-xl font-bold text-oxygen-700">
                                        ₹{maintenanceCosts.amcPrice.toLocaleString()}/year
                                    </div>
                                </div>
                                <div className="text-sm text-slate-700">
                                    Save ₹{(maintenanceCosts.annualTotal - maintenanceCosts.amcPrice).toLocaleString()} with all-inclusive annual contract
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Who Should Buy / Who Should Not */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Who Should Buy */}
                    <div className="bg-gradient-to-br from-oxygen-50 to-fresh-50 rounded-2xl border-2 border-oxygen-200 p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Who Should Buy This</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Spaces up to {variant.coverage} that need air purification</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Users who can commit to regular maintenance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Environments with adequate natural or artificial light</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-oxygen-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Those seeking natural oxygen generation, not just filtration</span>
                            </li>
                        </ul>
                    </div>

                    {/* Who Should Not Buy */}
                    <div className="bg-white rounded-2xl border-2 border-slate-300 p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Who Should NOT Buy This</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Spaces larger than {variant.coverage}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Those needing medical-grade air purification</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Users unable to perform or pay for regular maintenance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">Completely dark rooms with no light source</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="max-w-2xl mx-auto text-center bg-slate-50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Purchase?</h2>
                    <p className="text-slate-600 mb-6">
                        Take your time. No countdown timers, no fake urgency. This product will be here when you're ready.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="gradient" size="lg" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                        <Link href="/contact">
                            <Button variant="outline" size="lg">
                                Request Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
