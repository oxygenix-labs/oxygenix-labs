'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setMousePosition({ x, y });
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div
                className="relative aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                            transform: isZoomed ? 'scale(2)' : 'scale(1)',
                            transition: 'transform 0.2s ease-out',
                        }}
                    >
                        {/* Placeholder Product Image */}
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-64 h-64 bg-gradient-primary-light rounded-full flex items-center justify-center shadow-2xl">
                                <span className="text-8xl text-white font-bold">O</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Zoom Indicator */}
                {isZoomed && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        🔍 Zoomed
                    </div>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-3">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                ? 'border-brand-purple shadow-lg scale-105'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                            <div className="w-12 h-12 bg-gradient-primary-light rounded-full flex items-center justify-center">
                                <span className="text-xl text-white font-bold">O</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* 360° View Badge */}
            <div className="flex items-center justify-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm font-medium text-blue-900">Hover to zoom • Click thumbnails to change view</span>
            </div>
        </div>
    );
}
