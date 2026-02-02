import { z } from 'zod';

// Email validation
export const emailSchema = z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address');

// Password validation
export const passwordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number');

// Name validation
export const nameSchema = z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters');

// Phone validation (Indian format)
export const phoneSchema = z
    .string()
    .regex(/^(\+91[\s]?)?[6-9]\d{9}$/, 'Please enter a valid Indian phone number')
    .optional();

// Login form schema
export const loginSchema = z.object({
    email: emailSchema,
    password: z.string().min(1, 'Password is required'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Signup form schema
export const signupSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((val) => val === true, {
        message: 'You must accept the terms and conditions',
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

export type SignupFormData = z.infer<typeof signupSchema>;

// Forgot password schema
export const forgotPasswordSchema = z.object({
    email: emailSchema,
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// Reset password schema
export const resetPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

// Profile update schema
export const profileUpdateSchema = z.object({
    name: nameSchema,
    phone: phoneSchema,
});

export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;

// Address schema
export const addressSchema = z.object({
    fullName: nameSchema,
    phone: z.string().regex(/^(\+91[\s]?)?[6-9]\d{9}$/, 'Please enter a valid phone number'),
    addressLine1: z.string().min(5, 'Address must be at least 5 characters'),
    addressLine2: z.string().optional(),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    pincode: z.string().regex(/^\d{6}$/, 'Please enter a valid 6-digit pincode'),
    isDefault: z.boolean().optional(),
});

export type AddressFormData = z.infer<typeof addressSchema>;

// Password strength calculator
export function calculatePasswordStrength(password: string): {
    score: number; // 0-4
    label: string;
    color: string;
} {
    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e'];

    return {
        score: Math.min(score, 4),
        label: labels[Math.min(score, 4)],
        color: colors[Math.min(score, 4)],
    };
}
