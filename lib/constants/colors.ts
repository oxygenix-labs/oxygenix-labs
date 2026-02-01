// Brand Color System - Exact specification from requirements

export const colors = {
    text: {
        light: '#ffffff',
        dark: '#1e293b',
    },
    gradient: {
        light: {
            start: '#a78bfa',
            mid: '#ec4899',
            end: '#f472b6',
        },
        dark: {
            start: '#8b5cf6',
            mid: '#d946ef',
            end: '#ec4899',
        },
    },
} as const;

export const getTextColor = (variant: 'light' | 'dark' = 'dark') => {
    return variant === 'light' ? colors.text.light : colors.text.dark;
};

export const getPrimaryGradient = (variant: 'light' | 'dark' = 'light') => {
    const palette = variant === 'light' ? colors.gradient.light : colors.gradient.dark;
    return [palette.start, palette.mid, palette.end];
};

export const getGradientCSS = (variant: 'light' | 'dark' = 'light') => {
    const [start, mid, end] = getPrimaryGradient(variant);
    return `linear-gradient(135deg, ${start} 0%, ${mid} 50%, ${end} 100%)`;
};
