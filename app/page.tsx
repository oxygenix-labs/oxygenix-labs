import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import Hero from '@/components/sections/Hero';
import RadicalTransparency from '@/components/sections/RadicalTransparency';
import ManufacturingTransparency from '@/components/sections/ManufacturingTransparency';
import MaintenanceClarity from '@/components/sections/MaintenanceClarity';
import TrustScience from '@/components/sections/TrustScience';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <RadicalTransparency />
            <ManufacturingTransparency />
            <MaintenanceClarity />
            <TrustScience />
            <Contact />
            <Footer />
            <MobileNav />
        </main>
    );
}
