import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import Hero from '@/components/sections/Hero';
import WhyOxygenix from '@/components/sections/WhyOxygenix';
import ProductCategories from '@/components/sections/ProductCategories';
import HowItWorks from '@/components/sections/HowItWorks';
import TrustScience from '@/components/sections/TrustScience';
import UseCaseStories from '@/components/sections/UseCaseStories';
import Maintenance from '@/components/sections/Maintenance';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <WhyOxygenix />
            <ProductCategories />
            <HowItWorks />
            <TrustScience />
            <UseCaseStories />
            <Maintenance />
            <About />
            <Contact />
            <Footer />
            <MobileNav />
        </main>
    );
}
