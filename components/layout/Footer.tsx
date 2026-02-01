import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const footerLinks = {
        products: [
            { label: 'Home Use', href: '/products#home' },
            { label: 'Corporate', href: '/products#corporate' },
            { label: 'Colleges', href: '/products#college' },
            { label: 'Hospitals', href: '/products#hospital' },
        ],
        company: [
            { label: 'About Us', href: '#about' },
            { label: 'Manufacturing', href: '#manufacturing' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact', href: '#contact' },
        ],
        support: [
            { label: 'Maintenance', href: '#maintenance' },
            { label: 'AMC Plans', href: '/amc' },
            { label: 'Documentation', href: '/docs' },
            { label: 'FAQs', href: '/faq' },
        ],
        legal: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Warranty', href: '/warranty' },
        ],
    };

    return (
        <footer className="bg-slate-900 text-white">
            <div className="container-premium section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-primary-light rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">O</span>
                            </div>
                            <span className="text-xl font-bold">
                                Oxygenix <span className="font-normal text-slate-400">Labs</span>
                            </span>
                        </div>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            Engineering oxygen-positive environments. Premium climate-tech solutions for a healthier tomorrow.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold mb-4">Products</h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Oxygenix Labs. Built in India with precision.
                    </p>
                    <div className="flex gap-6 text-sm">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.href} href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
