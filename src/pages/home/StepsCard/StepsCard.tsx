import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StepsCard = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (cardRef.current) {
                gsap.from(cardRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                });
            }

            if (headerRef.current) {
                gsap.from(headerRef.current.children, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 70%',
                    },
                });
            }

            if (stepsRef.current) {
                gsap.from(stepsRef.current.children, {
                    x: -60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: stepsRef.current,
                        start: 'top 75%',
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full" id='steps'>
            <div className="w-full lg:max-w-5xl mx-auto lg:px-8">
                <div ref={cardRef} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    <div ref={headerRef} className="mb-8">
                        <p className="text-xs font-semibold text-gray-600 mb-2">THREE STEPS TO SUCCESS</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Improve Your Bottom Line
                        </h2>
                        <p className="text-gray-600 max-w-2xl">
                            We have the tools and expertise needed to reduce your operating costs
                            while improving key performance metrics important to your organization.
                        </p>
                    </div>

                    <div ref={stepsRef} className="space-y-6">
                        <div className="bg-[#E96015] rounded-2xl p-6 md:p-8 flex items-center gap-4 md:gap-8">
                            <div className="text-[80px] md:text-[100px] font-bold text-[#D85512] leading-none">
                                01
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Request a Quote</h3>
                                <p className="text-base">
                                    Let us know the challenges you're facing and looking to address.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 flex items-center gap-4 md:gap-8">
                            <div className="text-[80px] md:text-[100px] font-bold text-gray-300 leading-none">
                                02
                            </div>
                            <div className="text-gray-900">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Get a Customized Plan</h3>
                                <p className="text-base text-gray-600">
                                    With the information we learn from you, we'll craft a plan that addresses your business needs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 flex items-center gap-4 md:gap-8">
                            <div className="text-[80px] md:text-[100px] font-bold text-gray-700 leading-none">
                                03
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Sit back & relax!</h3>
                                <p className="text-base text-gray-300">
                                    Have peace of mind knowing that we'll work tirelessly to achieve your business goals. We are driven to succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepsCard;
