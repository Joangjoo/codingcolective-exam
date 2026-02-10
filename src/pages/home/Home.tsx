import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroSection from './HeroSection/HeroSection'
import FloatingCard from './FloatingCard/FloatingCard'
import AboutSection from './AboutSection/AboutSection'
import ValuesSection from './ValuesSection/ValuesSection'
import PCISection from './PCISection/PCISection'
import CompanySection from './CompanySection/CompanySection'
import ServicesSection from './ServicesSection/ServicesSection'
import StepsCard from './StepsCard/StepsCard'
import TestimonialsSection from './TestimonialsSection/TestimonialsSection'
import ContactSection from './ContactSection/ContactSection'
const Home = () => {
    return (
        <div className=" min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            <div className="relative w-full overflow-visible">
                <HeroSection />
            </div>

            <div className="absolute -mt-64 right-0 left-0 z-20">
                <FloatingCard />
            </div>
            <div className="w-full">
                <AboutSection />
            </div>
            <div className="w-full">
                <ValuesSection />
            </div>
            <div className="w-full">
                <PCISection />
            </div>
            <div className="w-full">
                <CompanySection />
            </div>
            <div className="relative w-full overflow-visible">
                <ServicesSection />
            </div>
            <div className="absolute -mt-72 right-0 left-0 z-20">
                <StepsCard />
            </div>
            <div className="w-full">
                <TestimonialsSection />
            </div>
            <div className="w-full">
                <ContactSection />
            </div>
            <Footer />
        </div>
    )
}

export default Home
