'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '@/lib/utils/validation';
import { requestPasswordReset } from '@/lib/auth/mockAuth';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import Toast from '@/components/ui/Toast';

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: ForgotPasswordFormData) => {
        setIsLoading(true);
        setToast(null);

        try {
            const result = await requestPasswordReset(data.email);

            if (result.success) {
                setIsSuccess(true);
                setToast({ message: 'Password reset instructions sent!', type: 'success' });
            } else {
                setToast({ message: result.error || 'Failed to send reset email', type: 'error' });
            }
        } catch (error) {
            setToast({ message: 'An unexpected error occurred', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <GradientText className="text-3xl font-bold">OXYGENIX LABS</GradientText>
                    </Link>
                    <p className="mt-2 text-slate-600">Reset your password</p>
                </div>

                {/* Form or Success Message */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                    {!isSuccess ? (
                        <>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Forgot Password?</h2>
                                <p className="text-slate-600 text-sm">
                                    Enter your email address and we'll send you instructions to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <Input
                                    {...register('email')}
                                    type="email"
                                    label="Email Address"
                                    placeholder="you@example.com"
                                    error={errors.email?.message}
                                    autoComplete="email"
                                    disabled={isLoading}
                                />

                                <Button
                                    type="submit"
                                    variant="gradient"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Reset Instructions'
                                    )}
                                </Button>
                            </form>

                            <div className="mt-6 text-center">
                                <Link
                                    href="/login"
                                    className="text-sm text-brand-purple hover:text-brand-pink transition-colors font-medium inline-flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Login
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-4">
                            {/* Success Icon */}
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2">Check Your Email</h3>
                            <p className="text-slate-600 mb-6">
                                We've sent password reset instructions to your email address. The link will expire in 30 minutes.
                            </p>

                            <div className="space-y-3">
                                <Link href="/login">
                                    <Button variant="gradient" className="w-full">
                                        Return to Login
                                    </Button>
                                </Link>

                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                >
                                    Didn't receive the email? Try again
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </motion.div>

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
