'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signupSchema, type SignupFormData, calculatePasswordStrength } from '@/lib/utils/validation';
import { signup } from '@/lib/auth/mockAuth';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import Toast from '@/components/ui/Toast';

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [password, setPassword] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });

    const watchPassword = watch('password', '');
    const passwordStrength = calculatePasswordStrength(watchPassword);

    const onSubmit = async (data: SignupFormData) => {
        setIsLoading(true);
        setToast(null);

        try {
            const result = await signup(data.email, data.password, data.name);

            if (result.success) {
                setToast({ message: 'Account created successfully! Redirecting...', type: 'success' });
                setTimeout(() => {
                    router.push('/dashboard');
                }, 1500);
            } else {
                setToast({ message: result.error || 'Signup failed', type: 'error' });
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
                    <p className="mt-2 text-slate-600">Create your account</p>
                </div>

                {/* Signup Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <Input
                            {...register('name')}
                            type="text"
                            label="Full Name"
                            placeholder="John Doe"
                            error={errors.name?.message}
                            autoComplete="name"
                            disabled={isLoading}
                        />

                        <Input
                            {...register('email')}
                            type="email"
                            label="Email Address"
                            placeholder="you@example.com"
                            error={errors.email?.message}
                            autoComplete="email"
                            disabled={isLoading}
                        />

                        <div>
                            <Input
                                {...register('password')}
                                type="password"
                                label="Password"
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
                            label="Confirm Password"
                            placeholder="Re-enter your password"
                            error={errors.confirmPassword?.message}
                            autoComplete="new-password"
                            disabled={isLoading}
                        />

                        <Checkbox
                            {...register('acceptTerms')}
                            label={
                                <span>
                                    I agree to the{' '}
                                    <Link href="/terms" className="text-brand-purple hover:underline">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/privacy" className="text-brand-purple hover:underline">
                                        Privacy Policy
                                    </Link>
                                </span>
                            }
                            error={errors.acceptTerms?.message}
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
                                    Creating Account...
                                </span>
                            ) : (
                                'Create Account'
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-slate-500">Already have an account?</span>
                        </div>
                    </div>

                    {/* Login Link */}
                    <Link href="/login">
                        <Button variant="outline" className="w-full">
                            Sign In
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
