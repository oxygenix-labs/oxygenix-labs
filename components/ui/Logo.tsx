import Link from 'next/link';
import { clsx } from 'clsx';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark'; // 'light' background means dark text
    size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className, variant = 'light', size = 'md' }: LogoProps) {
    const isDarkBg = variant === 'dark';

    const sizes = {
        sm: {
            svg: 'h-8 w-auto md:h-10',
            text: 'text-xl md:text-2xl',
            subtext: 'text-[10px] md:text-xs mt-0.5'
        },
        md: {
            svg: 'h-10 w-auto md:h-12',
            text: 'text-2xl md:text-3xl',
            subtext: 'text-[10px] md:text-xs mt-1'
        },
        lg: {
            svg: 'h-12 w-auto md:h-16',
            text: 'text-4xl md:text-5xl',
            subtext: 'text-sm md:text-base mt-1.5'
        }
    };

    return (
        <Link href="/" className={clsx('flex items-center gap-3 group', className)}>
            <svg viewBox="0 0 116 100" className={clsx("flex-shrink-0 drop-shadow-sm", sizes[size].svg)} fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="iconOxygen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id="iconFresh" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#15803d" />
                        <stop offset="100%" stopColor="#4ade80" />
                    </linearGradient>
                </defs>
                <circle cx="30" cy="50" r="26" fill="url(#iconOxygen)" className="group-hover:opacity-90 transition-opacity" />
                <path d="M64 26 L94 74 M94 26 L64 74" stroke="url(#iconFresh)" strokeWidth="12" strokeLinecap="round" />
                <circle cx="106" cy="74" r="6" fill="#10b981" />
            </svg>
            <div className="flex items-start tracking-tighter">
                <span className={clsx(
                    "font-extrabold transition-colors",
                    sizes[size].text,
                    isDarkBg ? "text-white group-hover:text-oxygen-400" : "text-slate-900 group-hover:text-oxygen-700"
                )}>
                    OXYGENIX
                </span>
                <span className={clsx(
                    "font-bold tracking-wider uppercase ml-1",
                    sizes[size].subtext,
                    isDarkBg ? "text-slate-400" : "text-slate-500"
                )}>
                    Labs
                </span>
            </div>
        </Link>
    );
}
