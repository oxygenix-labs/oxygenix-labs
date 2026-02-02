'use client';

import React, { ReactNode } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardTopBar from '@/components/dashboard/DashboardTopBar';

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Bar */}
            <DashboardTopBar />

            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <div className="lg:pl-64 pt-16">
                <main className="py-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
