import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Li Xinyi",
        role: "Quality Monitoring Specialist",
        company: "8Bacus",
        content: "Working with the 8Bacus team is a pleasure. Their mantra of intelligent urgency is impressive. Their pursuit of meeting my sales and customer service goals is always appreciated. If you need a B2B outsourced call center team, I highly recommend A.J., Ryan and the team at 8Bacus.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li"
    },
    {
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        content: "Working with this team has transformed our customer service operations. Their professionalism and expertise are unmatched. We've seen a 40% increase in customer satisfaction since partnering with them!",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        name: "Michael Chen",
        role: "Operations Manager",
        company: "Global Solutions",
        content: "The lead generation services exceeded our expectations. We've doubled our qualified leads in just 3 months. The team's dedication and strategic approach have been instrumental to our growth.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "Marketing Pro",
        content: "Outstanding market research and insights. They helped us understand our target audience better and refine our strategy. The results speak for themselves - our conversion rate has improved significantly.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
    {
        name: "David Thompson",
        role: "Sales Director",
        company: "Sales Masters",
        content: "The appointment setting service is top-notch. Our sales team now focuses on closing deals instead of chasing leads. This has been a game changer for our business productivity and revenue.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate header from left
            if (headerRef.current) {
                gsap.from(headerRef.current.children, {
                    x: -80,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                });
            }

            // Animate testimonial card from right
            if (cardRef.current) {
                gsap.from(cardRef.current, {
                    x: 80,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-gray-900 pt-180 lg:pt-140 pb-32" id='testimonials'>
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div ref={headerRef} className="text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Hear from
                            <br />
                            <span className="text-[#E96015]">happy customers.</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            What People Say About Us.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 border-2 border-[#E96015] rounded-full flex items-center justify-center text-[#E96015] hover:bg-[#E96015] hover:text-white transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 border-2 border-[#E96015] rounded-full flex items-center justify-center text-[#E96015] hover:bg-[#E96015] hover:text-white transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div ref={cardRef} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            {currentTestimonial.content}
                        </p>

                        <div className="flex items-center gap-4">
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-[#E96015]"
                            />
                            <div>
                                <h4 className="text-xl font-bold text-[#E96015]">
                                    {currentTestimonial.name}
                                </h4>
                                <p className="text-gray-900 font-medium">
                                    {currentTestimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
