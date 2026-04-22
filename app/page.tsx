import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import Hero from '@/components/sections/Hero';
import WhoThisIsFor from '@/components/sections/WhoThisIsFor';
import ProblemSolution from '@/components/sections/ProblemSolution';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyDifferent from '@/components/sections/WhyDifferent';
import RadicalTransparency from '@/components/sections/RadicalTransparency';
import ManufacturingTransparency from '@/components/sections/ManufacturingTransparency';
import MaintenanceClarity from '@/components/sections/MaintenanceClarity';
import FinalCTA from '@/components/sections/FinalCTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* 1. Above-the-Fold Hero - Space-based selection */}
            <Hero />

            {/* 2. Who This Is For - Self-identification */}
            <WhoThisIsFor />

            {/* 3. Problem/Solution - Calm, factual */}
            <ProblemSolution />

            {/* 4. How It Works - 4-step flow */}
            <HowItWorks />

            {/* 5. Why Different - Honest comparison */}
            <WhyDifferent />

            {/* 6. Radical Transparency - What we do/don't do */}
            <RadicalTransparency />

            {/* 7. Manufacturing - Trust & credibility */}
            <ManufacturingTransparency />

            {/* 8. Maintenance - Cost transparency */}
            <MaintenanceClarity />

            {/* 9. Final CTA - Two clear paths */}
            <FinalCTA />

            {/* 10. Contact Form */}
            <Contact />

            <Footer />
            <MobileNav />
        </main>
    );
}
