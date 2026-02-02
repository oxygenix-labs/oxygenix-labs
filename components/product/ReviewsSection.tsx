'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils/formatting';

interface Review {
    id: string;
    userName: string;
    userInitials: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    verified: boolean;
    helpful: number;
    images?: string[];
}

interface ReviewsSectionProps {
    productId: string;
    productName: string;
    averageRating: number;
    totalReviews: number;
}

// Mock reviews data
const mockReviews: Review[] = [
    {
        id: '1',
        userName: 'Rajesh Kumar',
        userInitials: 'RK',
        rating: 5,
        date: '2024-01-15',
        title: 'Excellent product! Highly recommended',
        comment: 'The air quality in my bedroom has improved significantly. The algae-based oxygen generation is truly innovative. Very quiet operation and the app control is smooth.',
        verified: true,
        helpful: 24,
    },
    {
        id: '2',
        userName: 'Priya Sharma',
        userInitials: 'PS',
        rating: 4,
        date: '2024-01-10',
        title: 'Great value for money',
        comment: 'Good product overall. The HEPA filter works well and I can feel the difference in air quality. Only minor issue is the initial setup took some time.',
        verified: true,
        helpful: 18,
    },
    {
        id: '3',
        userName: 'Amit Patel',
        userInitials: 'AP',
        rating: 5,
        date: '2024-01-05',
        title: 'Perfect for my office',
        comment: 'Installed this in my home office and the difference is remarkable. My allergies have reduced and I feel more energetic throughout the day. The AMC is worth it!',
        verified: true,
        helpful: 31,
    },
];

export default function ReviewsSection({ productId, productName, averageRating, totalReviews }: ReviewsSectionProps) {
    const [showWriteReview, setShowWriteReview] = useState(false);
    const [newReview, setNewReview] = useState({ rating: 5, title: '', comment: '' });

    const ratingDistribution = [
        { stars: 5, count: 245, percentage: 72 },
        { stars: 4, count: 68, percentage: 20 },
        { stars: 3, count: 20, percentage: 6 },
        { stars: 2, count: 5, percentage: 1 },
        { stars: 1, count: 4, percentage: 1 },
    ];

    const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
        const sizeClasses = {
            sm: 'w-4 h-4',
            md: 'w-5 h-5',
            lg: 'w-6 h-6',
        };

        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400' : 'text-slate-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Customer Reviews</h2>

            {/* Rating Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-200">
                {/* Average Rating */}
                <div className="text-center md:text-left">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-6xl font-bold text-slate-900">{averageRating}</div>
                        <div>
                            {renderStars(averageRating, 'lg')}
                            <p className="text-sm text-slate-600 mt-1">{totalReviews} reviews</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowWriteReview(!showWriteReview)}
                        className="px-6 py-3 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-pink transition-colors"
                    >
                        Write a Review
                    </button>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2">
                    {ratingDistribution.map((dist) => (
                        <div key={dist.stars} className="flex items-center gap-3">
                            <span className="text-sm font-medium text-slate-700 w-12">{dist.stars} star</span>
                            <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400 rounded-full transition-all"
                                    style={{ width: `${dist.percentage}%` }}
                                />
                            </div>
                            <span className="text-sm text-slate-600 w-12 text-right">{dist.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Write Review Form */}
            {showWriteReview && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-200"
                >
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Write Your Review</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Your Rating</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setNewReview({ ...newReview, rating: star })}
                                        className="transition-transform hover:scale-110"
                                    >
                                        <svg
                                            className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Review Title</label>
                            <input
                                type="text"
                                value={newReview.title}
                                onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                                placeholder="Summarize your experience"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Your Review</label>
                            <textarea
                                value={newReview.comment}
                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                placeholder="Share your experience with this product..."
                                rows={4}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button className="px-6 py-3 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-pink transition-colors">
                                Submit Review
                            </button>
                            <button
                                onClick={() => setShowWriteReview(false)}
                                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-slate-400 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
                {mockReviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-slate-200 last:border-0">
                        <div className="flex items-start gap-4">
                            {/* User Avatar */}
                            <div className="w-12 h-12 rounded-full bg-gradient-primary-light flex items-center justify-center text-white font-bold flex-shrink-0">
                                {review.userInitials}
                            </div>

                            {/* Review Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-semibold text-slate-900">{review.userName}</span>
                                    {review.verified && (
                                        <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Verified Purchase
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-3 mb-2">
                                    {renderStars(review.rating, 'sm')}
                                    <span className="text-sm text-slate-500">{formatDate(review.date)}</span>
                                </div>

                                <h4 className="font-semibold text-slate-900 mb-2">{review.title}</h4>
                                <p className="text-slate-700 mb-3">{review.comment}</p>

                                <div className="flex items-center gap-4 text-sm">
                                    <button className="flex items-center gap-1 text-slate-600 hover:text-brand-purple transition-colors">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                        Helpful ({review.helpful})
                                    </button>
                                    <button className="text-slate-600 hover:text-brand-purple transition-colors">
                                        Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
                <button className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-brand-purple hover:text-brand-purple transition-colors">
                    Load More Reviews
                </button>
            </div>
        </div>
    );
}
