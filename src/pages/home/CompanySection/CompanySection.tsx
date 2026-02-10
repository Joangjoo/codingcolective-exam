import { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wNk1Dd1fZHB4lN5ywlG8rc3KW2yJLuk7JQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhryQQ8ciwja7JoCb-fAmvbgWufYu52aXsg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimwhivDUFwPFHksrmaTkSyGqBkU-_CLd3DQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4hLRMA3ABfKDMeBl6WJoN6LbM4TOG5k1cA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLW3QaVRtq_PRbokWurkQBDZvBdrZ-cycVfQ&s"
];

const CompanySection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (headerRef.current) {
                gsap.from(headerRef.current.children, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                });
            }

            if (marqueeRef.current) {
                gsap.from(marqueeRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: marqueeRef.current,
                        start: 'top 85%',
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#2a2a2a]" id='service'>
            <div className="w-full rounded-2xl py-8 mx-auto px-8 bg-white">
                <div ref={headerRef} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        The Company We Keep
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our team is active in a large number of telemarketing, call center and professional trade organizations.
                    </p>
                </div>

                <div ref={marqueeRef}>
                    <Marquee speed={50} gradient={false} pauseOnHover={true} className="mt-16">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Company Logo"
                                className="h-24 w-auto mx-8"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default CompanySection;
