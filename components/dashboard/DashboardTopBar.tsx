'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/lib/auth/mockAuth';
import { getInitials } from '@/lib/utils/formatting';

export default function DashboardTopBar() {
    const router = useRouter();
    const [user, setUser] = useState(getCurrentUser());
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [notifications] = useState(2); // Mock notification count

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 h-16">
            <div className="h-full px-6 flex items-center justify-between">
                {/* Left: Mobile Menu + Logo */}
                <div className="flex items-center gap-4">
                    <button className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
                        <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <Link href="/" className="lg:hidden flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-primary-light rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">O</span>
                        </div>
                        <span className="font-bold text-slate-900">Oxygenix Labs</span>
                    </Link>
                </div>

                {/* Right: Notifications + User */}
                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        {notifications > 0 && (
                            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                {notifications}
                            </span>
                        )}
                    </button>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            <div className="w-9 h-9 rounded-full bg-gradient-primary-light flex items-center justify-center text-white font-semibold text-sm">
                                {getInitials(user.name)}
                            </div>
                            <div className="hidden md:block text-left">
                                <div className="text-sm font-semibold text-slate-900">{user.name}</div>
                                <div className="text-xs text-slate-500">{user.email}</div>
                            </div>
                            <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isUserMenuOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setIsUserMenuOpen(false)} />
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                                    <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                                        Account Settings
                                    </Link>
                                    <Link href="/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                                        Back to Website
                                    </Link>
                                    <div className="border-t border-slate-200 my-2" />
                                    <button
                                        onClick={() => {
                                            logout();
                                            setUser(null);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
