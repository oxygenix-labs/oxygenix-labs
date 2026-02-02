import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string | React.ReactNode;
    error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, error, className, ...props }, ref) => {
        const checkboxId = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

        return (
            <div className="w-full">
                <div className="flex items-start gap-3">
                    <input
                        ref={ref}
                        type="checkbox"
                        id={checkboxId}
                        className={clsx(
                            'w-5 h-5 rounded border-slate-300 text-brand-purple',
                            'focus:ring-2 focus:ring-brand-purple focus:ring-offset-1',
                            'disabled:cursor-not-allowed disabled:opacity-50',
                            'cursor-pointer',
                            className
                        )}
                        {...props}
                    />
                    {label && (
                        <label
                            htmlFor={checkboxId}
                            className="text-sm text-slate-700 cursor-pointer select-none"
                        >
                            {label}
                        </label>
                    )}
                </div>
                {error && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1 ml-8">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
