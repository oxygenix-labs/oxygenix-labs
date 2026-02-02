'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { resetPasswordSchema, type ResetPasswordFormData, calculatePasswordStrength } from '@/lib/utils/validation';
import { resetPassword } from '@/lib/auth/mockAuth';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import Toast from '@/components/ui/Toast';

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token') || '';

    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const watchPassword = watch('password', '');
    const passwordStrength = calculatePasswordStrength(watchPassword);

    const onSubmit = async (data: ResetPasswordFormData) => {
        setIsLoading(true);
        setToast(null);

        try {
            const result = await resetPassword(token, data.password);

            if (result.success) {
                setToast({ message: 'Password reset successful! Redirecting to login...', type: 'success' });
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            } else {
                setToast({ message: result.error || 'Failed to reset password', type: 'error' });
            }
        } catch (error) {
            setToast({ message: 'An unexpected error occurred', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    // Check if token exists
    if (!token) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md text-center">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Invalid Reset Link</h2>
                        <p className="text-slate-600 mb-6">
                            This password reset link is invalid or has expired. Please request a new one.
                        </p>
                        <Link href="/forgot-password">
                            <Button variant="gradient" className="w-full">
                                Request New Link
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

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
                    <p className="mt-2 text-slate-600">Create a new password</p>
                </div>

                {/* Reset Password Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Reset Password</h2>
                        <p className="text-slate-600 text-sm">
                            Enter your new password below. Make sure it's strong and secure.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <Input
                                {...register('password')}
                                type="password"
                                label="New Password"
                                placeholder="Create a strong password"
                                error={errors.password?.message}
                                autoComplete="new-password"
                                disabled={isLoading}
                            />
                            {watchPassword && (
                                <div className="mt-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-slate-600">Password Strength:</span>
                                        <span className="text-xs font-medium" style={{ color: passwordStrength.color }}>
                                            {passwordStrength.label}
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full transition-all duration-300 rounded-full"
                                            style={{
                                                width: `${(passwordStrength.score / 4) * 100}%`,
                                                backgroundColor: passwordStrength.color,
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <Input
                            {...register('confirmPassword')}
                            type="password"
                            label="Confirm New Password"
                            placeholder="Re-enter your password"
                            error={errors.confirmPassword?.message}
                            autoComplete="new-password"
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
                                    Resetting Password...
                                </span>
                            ) : (
                                'Reset Password'
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-900">
                            <strong>Note:</strong> After resetting your password, you'll be logged out from all devices for security.
                        </p>
                    </div>
                </div>

                {/* Back to Login */}
                <div className="mt-6 text-center">
                    <Link
                        href="/login"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Login
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
