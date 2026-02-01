'use client';

import React from 'react';
import Button from '@/components/ui/Button';

export default function MobileNav() {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl">
            <div className="container-premium py-3">
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                        Request Demo
                    </Button>
                    <Button variant="primary" size="sm" className="flex-1">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
