import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // OXYGEN GREEN - Primary brand color (rich, cool-toned, professional)
                oxygen: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',  // PRIMARY BRAND GREEN
                    800: '#05664f',
                    900: '#064e3b',
                },
                // FRESH GREEN - Secondary (soft, breathable, calm)
                fresh: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#86efac',
                    500: '#4ade80',
                    600: '#22c55e',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                // TEAL ACCENT - Optional cool complement
                teal: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                },
                // Legacy brand colors (deprecated - use oxygen/fresh instead)
                brand: {
                    purple: '#047857',  // Mapped to oxygen-700
                    pink: '#10b981',    // Mapped to oxygen-500
                },
            },
            backgroundImage: {
                // PRIMARY GRADIENTS - Green-forward
                'gradient-oxygen': 'linear-gradient(135deg, rgb(4 120 87) 0%, rgb(16 185 129) 100%)',
                'gradient-oxygen-light': 'linear-gradient(135deg, rgb(5 150 105) 0%, rgb(52 211 153) 100%)',
                'gradient-fresh': 'linear-gradient(135deg, rgb(21 128 61) 0%, rgb(74 222 128) 100%)',
                'gradient-oxygen-teal': 'linear-gradient(135deg, rgb(4 120 87) 0%, rgb(13 148 136) 100%)',
                'gradient-subtle': 'linear-gradient(135deg, rgb(241 245 249) 0%, rgb(226 232 240) 100%)',

                // Legacy gradients (deprecated)
                'gradient-primary': 'linear-gradient(135deg, rgb(4 120 87) 0%, rgb(16 185 129) 100%)',
                'gradient-primary-light': 'linear-gradient(135deg, rgb(5 150 105) 0%, rgb(52 211 153) 100%)',
            },
            boxShadow: {
                'oxygen': '0 10px 30px -5px rgb(4 120 87 / 0.2)',
                'oxygen-lg': '0 20px 40px -10px rgb(4 120 87 / 0.3)',
                'fresh': '0 10px 30px -5px rgb(34 197 94 / 0.2)',
            },
            animation: {
                'oxygen-pulse': 'oxygen-pulse 2s ease-in-out infinite',
                'breathe': 'breathe 3s ease-in-out infinite',
            },
            keyframes: {
                'oxygen-pulse': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
                'breathe': {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
