'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getCurrentUser } from '@/lib/auth/mockAuth';
import { getInitials } from '@/lib/utils/formatting';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import GradientText from '@/components/ui/GradientText';
import Toast from '@/components/ui/Toast';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function ProfilePage() {
    const router = useRouter();
    const user = getCurrentUser();
    const [isEditing, setIsEditing] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || '',
        city: user?.city || '',
        state: user?.state || '',
        pincode: user?.pincode || '',
    });

    useEffect(() => {
        if (!user) {
            router.push('/login?redirect=/dashboard/profile');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    const handleSave = () => {
        // In real app, would save to backend
        setToast({ message: '✅ Profile updated successfully!', type: 'success' });
        setIsEditing(false);
        setTimeout(() => setToast(null), 3000);
    };

    const handleCancel = () => {
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            address: user.address || '',
            city: user.city || '',
            state: user.state || '',
            pincode: user.pincode || '',
        });
        setIsEditing(false);
    };

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto px-6">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Link href="/dashboard" className="hover:text-slate-900 transition-colors">Dashboard</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">Profile</span>
                    </div>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <GradientText className="text-4xl font-bold mb-2">My Profile</GradientText>
                    <p className="text-lg text-slate-600">Manage your account information</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-primary-light flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                                    {getInitials(user.name)}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-1">{user.name}</h2>
                                <p className="text-slate-600">{user.email}</p>
                            </div>

                            <div className="space-y-3">
                                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg className="w-5 h-5 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium text-slate-900">Verified Account</span>
                                    </div>
                                </div>

                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="text-xs text-slate-600 mb-1">Member Since</div>
                                    <div className="font-semibold text-slate-900">January 2024</div>
                                </div>

                                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                    <div className="text-xs text-slate-600 mb-1">Total Orders</div>
                                    <div className="font-semibold text-slate-900">3 Orders</div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <Link href="/dashboard/orders">
                                    <Button variant="outline" fullWidth className="mb-3">
                                        View Orders
                                    </Button>
                                </Link>
                                <Button variant="outline" fullWidth>
                                    Change Password
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-slate-900">Personal Information</h3>
                                {!isEditing && (
                                    <Button variant="primary" onClick={() => setIsEditing(true)}>
                                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit Profile
                                    </Button>
                                )}
                            </div>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <Input
                                        label="Full Name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        disabled={!isEditing}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <Input
                                        label="Email Address"
                                        type="email"
                                        value={formData.email}
                                        disabled={true}
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Email cannot be changed</p>
                                </div>

                                {/* Phone */}
                                <div>
                                    <Input
                                        label="Phone Number"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        disabled={!isEditing}
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                {/* Address Section */}
                                <div className="pt-6 border-t border-slate-200">
                                    <h4 className="text-lg font-bold text-slate-900 mb-4">Address Information</h4>

                                    <div className="space-y-4">
                                        <Input
                                            label="Street Address"
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            disabled={!isEditing}
                                            placeholder="123 Main Street"
                                        />

                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                label="City"
                                                type="text"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                disabled={!isEditing}
                                                placeholder="Mumbai"
                                            />

                                            <Input
                                                label="State"
                                                type="text"
                                                value={formData.state}
                                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                                disabled={!isEditing}
                                                placeholder="Maharashtra"
                                            />
                                        </div>

                                        <Input
                                            label="PIN Code"
                                            type="text"
                                            value={formData.pincode}
                                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                            disabled={!isEditing}
                                            placeholder="400001"
                                        />
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                {isEditing && (
                                    <div className="flex gap-4 pt-6">
                                        <Button variant="gradient" onClick={handleSave} className="flex-1">
                                            Save Changes
                                        </Button>
                                        <Button variant="outline" onClick={handleCancel} className="flex-1">
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Preferences Section */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mt-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Preferences</h3>

                            <div className="space-y-4">
                                <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                                    <div>
                                        <div className="font-semibold text-slate-900">Email Notifications</div>
                                        <div className="text-sm text-slate-600">Receive updates about your orders</div>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-brand-purple focus:ring-brand-purple" />
                                </label>

                                <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                                    <div>
                                        <div className="font-semibold text-slate-900">Marketing Emails</div>
                                        <div className="text-sm text-slate-600">Get news about products and offers</div>
                                    </div>
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-brand-purple focus:ring-brand-purple" />
                                </label>

                                <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                                    <div>
                                        <div className="font-semibold text-slate-900">SMS Notifications</div>
                                        <div className="text-sm text-slate-600">Receive order updates via SMS</div>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-brand-purple focus:ring-brand-purple" />
                                </label>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </DashboardLayout>
    );
}
