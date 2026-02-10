import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pciLogo from '../../../assets/pcilogo.png';

gsap.registerPlugin(ScrollTrigger);

const PCISection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (textRef.current) {
                gsap.from(textRef.current.children, {
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
        <section ref={sectionRef} className="w-full bg-[#2a2a2a] py-20" id='pci'>
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div ref={textRef} className="text-white">
                        <p className="text-sm font-semibold tracking-wider mb-4 text-gray-400 uppercase">
                            PCI Level 1 Call Center
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            A PCI Level 1 Call Center Ensures{' '}
                            <span className="text-[#E96015]">Credit Card Data is Secure</span>
                        </h2>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                As a company, if you accept or process payment cards, the PCI Data Security Standards apply to you. If you take credit cards via inbound telemarketing, customer service or outbound telemarketing, you will need a PCI compliant call center, preferably a PCI Certified Level 1 call center.
                            </p>

                            <p>
                                It's in the news continuously – consumer credit card data is hacked and stolen. In an effort to combat these threats, Visa, MasterCard, American Express, Discover and JCB created a set of standards known as the Payment Card Industry Data Security Standards (PCI DSS). PCI DSS is required for all entities that store, process, or transmit cardholder data, including call center vendors and outsourcers.
                            </p>

                            <p>
                                These standards include technical and operational requirements for organizations accepting or processing payment transactions. PCI DSS helps a company to avoid potential severe penalties/fines or even lose their credit card processing arrangement if a breach were to occur.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end pt-10 lg-pt-0">
                        <div ref={cardRef} className="relative bg-white rounded-2xl p-8 pt-20 shadow-xl max-w-md w-full border-b-8 border-[#E96015]">
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                                <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
                                    <img
                                        src={pciLogo}
                                        alt="PCI Level 1 Certified"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="text-gray-700 text-sm leading-relaxed">
                                <p>
                                    <strong>8Bacus</strong> has been a PCI Certified Level 1 Call Center since May 2013. Over the years, the PCI Security Standards Council continues to add requirements and controls to make cardholder data more secure. Even though these requirements, and therefore the recertification process, becomes more difficult to obtain, 8Bacus has successfully made the adjustments necessary to continue to be PCI Level 1 certified.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PCISection;
