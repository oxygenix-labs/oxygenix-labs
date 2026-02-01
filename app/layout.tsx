import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Oxygenix Labs - Oxygen. Naturally Engineered.',
    description: 'Air purifiers clean air. Oxygenix engineers oxygen-positive environments. Premium climate-tech solutions for homes, offices, colleges, and hospitals.',
    keywords: ['oxygen systems', 'air purification', 'climate tech', 'clean air', 'algae technology', 'PM2.5 removal'],
    authors: [{ name: 'Oxygenix Labs' }],
    openGraph: {
        title: 'Oxygenix Labs - Oxygen. Naturally Engineered.',
        description: 'Air purifiers clean air. Oxygenix engineers oxygen-positive environments.',
        type: 'website',
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Oxygenix Labs - Oxygen. Naturally Engineered.',
        description: 'Air purifiers clean air. Oxygenix engineers oxygen-positive environments.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="font-sans">
                {children}
            </body>
        </html>
    );
}
