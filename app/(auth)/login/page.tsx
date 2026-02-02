'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { loginSchema, type LoginFormData } from '@/lib/utils/validation';
import { login } from '@/lib/auth/mockAuth';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import Toast from '@/components/ui/Toast';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setToast(null);

        try {
            const result = await login(data.email, data.password);

            if (result.success) {
                setToast({ message: 'Login successful! Redirecting...', type: 'success' });
                setTimeout(() => {
                    router.push('/dashboard');
                }, 1000);
            } else {
                setToast({ message: result.error || 'Login failed', type: 'error' });
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
                    <p className="mt-2 text-slate-600">Sign in to your account</p>
                </div>

                {/* Login Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
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

                        <Input
                            {...register('password')}
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            error={errors.password?.message}
                            autoComplete="current-password"
                            disabled={isLoading}
                        />

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-slate-300 text-brand-purple focus:ring-brand-purple"
                                />
                                <span className="text-slate-600">Remember me</span>
                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-brand-purple hover:text-brand-pink transition-colors font-medium"
                            >
                                Forgot password?
                            </Link>
                        </div>

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
                                    Signing in...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm font-medium text-blue-900 mb-2">Demo Credentials:</p>
                        <p className="text-xs text-blue-700 font-mono">
                            Email: demo@oxygenixlabs.com<br />
                            Password: password123
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-slate-500">Don't have an account?</span>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <Link href="/signup">
                        <Button variant="outline" className="w-full">
                            Create Account
                        </Button>
                    </Link>
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
