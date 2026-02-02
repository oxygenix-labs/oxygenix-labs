'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { clsx } from 'clsx';
import Button from '@/components/ui/Button';
import { getCurrentUser, logout } from '@/lib/auth/mockAuth';
import { getInitials } from '@/lib/utils/formatting';
import { useCartStore } from '@/lib/store/cartStore';
import CartDrawer from '@/components/cart/CartDrawer';

// Auth-aware buttons component
function AuthButtons() {
    const router = useRouter();
    const [user, setUser] = useState(getCurrentUser());
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const itemCount = useCartStore((state) => state.getItemCount());

    useEffect(() => {
        // Update user state on mount and when localStorage changes
        const handleStorageChange = () => {
            setUser(getCurrentUser());
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <>
            {/* Cart Icon */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
                <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-pink text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {itemCount}
                    </span>
                )}
            </button>

            {/* User Menu or Auth Buttons */}
            {user ? (
                <div className="relative">
                    <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-primary-light flex items-center justify-center text-white font-semibold text-sm">
                            {getInitials(user.name)}
                        </div>
                        <span className="font-medium text-slate-900">{user.name}</span>
                        <svg className={clsx('w-4 h-4 text-slate-600 transition-transform', isUserMenuOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isUserMenuOpen && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setIsUserMenuOpen(false)} />
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                                <Link href="/dashboard" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    Dashboard
                                </Link>
                                <Link href="/dashboard/orders" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    My Orders
                                </Link>
                                <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    Profile
                                </Link>
                                <div className="border-t border-slate-200 my-2" />
                                <button
                                    onClick={() => {
                                        logout();
                                        setUser(null);
                                        setIsUserMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <>
                    <Link href="/login">
                        <Button variant="outline" size="sm">
                            Login
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="gradient" size="sm">
                            Sign Up
                        </Button>
                    </Link>
                </>
            )}

            {/* Cart Drawer */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    const isLandingPage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#products', label: 'Products' },
        { href: '#how-it-works', label: 'How It Works' },
        { href: '#use-cases', label: 'Use Cases' },
        { href: '#about', label: 'About' },
    ];

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent'
            )}
        >
            <nav className="container-premium py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-primary-light rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">O</span>
                        </div>
                        <span className="text-xl font-bold text-slate-900">
                            Oxygenix <span className="font-normal text-slate-600">Labs</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons / User Menu */}
                    <div className="hidden lg:flex items-center gap-4">
                        {!isLandingPage && <AuthButtons />}
                        {isLandingPage && (
                            <>
                                <Link href="/products">
                                    <Button variant="outline" size="sm">
                                        Browse Products
                                    </Button>
                                </Link>
                                <Link href="/login">
                                    <Button variant="gradient" size="sm">
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-slate-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-700 hover:text-slate-900 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-2 pt-4">
                                <Link href="/login">
                                    <Button variant="outline" size="sm" fullWidth>
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button variant="gradient" size="sm" fullWidth>
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
