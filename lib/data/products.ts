// Product data structure

export interface ProductVariant {
    id: string;
    name: string;
    coverage: string;
    price: number;
    roomSize: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    category: 'home' | 'corporate' | 'college' | 'hospital';
    categoryLabel: string;
    description: string;
    shortDescription: string;
    image: string;
    variants: ProductVariant[];
    features: string[];
    specifications: {
        dimensions: string;
        weight: string;
        powerConsumption: string;
        noiseLevel: string;
        filterLife: string;
        algaeMaintenanceInterval: string;
    };
    maintenanceCost: {
        yearly: number;
        amcAvailable: boolean;
    };
}

export const products: Product[] = [
    // Home Use Products
    {
        id: 'home-compact',
        name: 'Oxygenix Home Compact',
        slug: 'home-compact',
        category: 'home',
        categoryLabel: 'Home Use',
        description: 'Perfect for bedrooms and small living spaces. Combines HEPA filtration with algae-based oxygen support for healthier indoor air.',
        shortDescription: 'Ideal for bedrooms and small rooms',
        image: '/products/home-compact.jpg',
        variants: [
            { id: 'hc-200', name: 'HC-200', coverage: '200 sq ft', price: 24999, roomSize: 'Small Bedroom' },
            { id: 'hc-300', name: 'HC-300', coverage: '300 sq ft', price: 29999, roomSize: 'Master Bedroom' },
        ],
        features: [
            'HEPA H13 filtration',
            'Algae-based oxygen generation',
            'Smart air quality monitoring',
            'Whisper-quiet operation',
            'Mobile app control',
        ],
        specifications: {
            dimensions: '450 × 450 × 650 mm',
            weight: '8.5 kg',
            powerConsumption: '45W',
            noiseLevel: '28 dB',
            filterLife: '12 months',
            algaeMaintenanceInterval: '6 months',
        },
        maintenanceCost: {
            yearly: 4999,
            amcAvailable: true,
        },
    },
    {
        id: 'home-pro',
        name: 'Oxygenix Home Pro',
        slug: 'home-pro',
        category: 'home',
        categoryLabel: 'Home Use',
        description: 'Designed for living rooms and open spaces. Enhanced oxygen output for larger areas with premium build quality.',
        shortDescription: 'Perfect for living rooms and halls',
        image: '/products/home-pro.jpg',
        variants: [
            { id: 'hp-500', name: 'HP-500', coverage: '500 sq ft', price: 39999, roomSize: 'Living Room' },
            { id: 'hp-800', name: 'HP-800', coverage: '800 sq ft', price: 49999, roomSize: 'Large Hall' },
        ],
        features: [
            'Advanced HEPA filtration',
            'Enhanced algae oxygen system',
            'Real-time AQI display',
            'Auto mode with sensors',
            'Premium metal build',
        ],
        specifications: {
            dimensions: '550 × 550 × 750 mm',
            weight: '12 kg',
            powerConsumption: '65W',
            noiseLevel: '32 dB',
            filterLife: '12 months',
            algaeMaintenanceInterval: '6 months',
        },
        maintenanceCost: {
            yearly: 6999,
            amcAvailable: true,
        },
    },

    // Corporate Use Products
    {
        id: 'corporate-office',
        name: 'Oxygenix Corporate 1000',
        slug: 'corporate-office',
        category: 'corporate',
        categoryLabel: 'Corporate Use',
        description: 'Engineered for office environments. Handles high occupancy with continuous oxygen support for improved productivity.',
        shortDescription: 'Ideal for offices and meeting rooms',
        image: '/products/corporate-office.jpg',
        variants: [
            { id: 'co-1000', name: 'CO-1000', coverage: '1000 sq ft', price: 79999, roomSize: 'Office Floor' },
            { id: 'co-1500', name: 'CO-1500', coverage: '1500 sq ft', price: 99999, roomSize: 'Large Office' },
        ],
        features: [
            'Commercial-grade filtration',
            'High-capacity oxygen generation',
            'Centralized monitoring',
            'Low maintenance design',
            'Scalable deployment',
        ],
        specifications: {
            dimensions: '700 × 700 × 1000 mm',
            weight: '25 kg',
            powerConsumption: '120W',
            noiseLevel: '38 dB',
            filterLife: '18 months',
            algaeMaintenanceInterval: '9 months',
        },
        maintenanceCost: {
            yearly: 12999,
            amcAvailable: true,
        },
    },

    // College Use Products
    {
        id: 'college-classroom',
        name: 'Oxygenix Edu 800',
        slug: 'college-classroom',
        category: 'college',
        categoryLabel: 'Colleges & Schools',
        description: 'Designed for classrooms and libraries. Creates optimal learning environments with clean, oxygen-rich air.',
        shortDescription: 'Perfect for classrooms and libraries',
        image: '/products/college-classroom.jpg',
        variants: [
            { id: 'edu-800', name: 'EDU-800', coverage: '800 sq ft', price: 59999, roomSize: 'Classroom' },
            { id: 'edu-1200', name: 'EDU-1200', coverage: '1200 sq ft', price: 74999, roomSize: 'Large Hall' },
        ],
        features: [
            'Student-safe design',
            'Durable construction',
            'Energy efficient',
            'Minimal maintenance',
            'Educational AQI display',
        ],
        specifications: {
            dimensions: '600 × 600 × 850 mm',
            weight: '18 kg',
            powerConsumption: '85W',
            noiseLevel: '35 dB',
            filterLife: '15 months',
            algaeMaintenanceInterval: '8 months',
        },
        maintenanceCost: {
            yearly: 8999,
            amcAvailable: true,
        },
    },

    // Hospital Use Products
    {
        id: 'hospital-care',
        name: 'Oxygenix MedCare 600',
        slug: 'hospital-care',
        category: 'hospital',
        categoryLabel: 'Hospitals & Clinics',
        description: 'Medical-grade air quality for healthcare settings. Supports patient recovery with clean, oxygen-enriched environments.',
        shortDescription: 'Medical-grade for healthcare',
        image: '/products/hospital-care.jpg',
        variants: [
            { id: 'mc-600', name: 'MC-600', coverage: '600 sq ft', price: 89999, roomSize: 'Patient Room' },
            { id: 'mc-1000', name: 'MC-1000', coverage: '1000 sq ft', price: 119999, roomSize: 'Ward' },
        ],
        features: [
            'Medical-grade HEPA',
            'Sterile oxygen generation',
            'Hospital-safe materials',
            'Silent operation',
            'Compliance certified',
        ],
        specifications: {
            dimensions: '650 × 650 × 900 mm',
            weight: '22 kg',
            powerConsumption: '95W',
            noiseLevel: '30 dB',
            filterLife: '12 months',
            algaeMaintenanceInterval: '6 months',
        },
        maintenanceCost: {
            yearly: 14999,
            amcAvailable: true,
        },
    },
];

export const getProductsByCategory = (category: Product['category']) => {
    return products.filter((p) => p.category === category);
};

export const getProductBySlug = (slug: string) => {
    return products.find((p) => p.slug === slug);
};
