import  { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
    title: string;
    description: string;
}

const services: ServiceItem[] = [
    {
        title: "B2B Outbound Marketing",
        description:
            "If you are considering a telemarketing firm for B2B outbound marketing solutions, look no further. Eight Bacus Call Centers LLC is your premier choice for B2B outbound marketing.",
    },
    {
        title: "B2C Outbound Marketing",
        description:
            "Using outbound marketing has become a cost-effective solution for organizations looking to increase sales with the help of outside expertise.",
    },
    {
        title: "TCPA Call Center Consulting",
        description:
            "Our compliance consulting team will help you navigate the Telemarketing Laws at both the federal and state level.",
    },
    {
        title: "Outsourced Telemarketing QA",
        description:
            "As call center experts, we can quickly and cost effectively help you solve your most challenging problems.",
    },
];

const AboutSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    const sectionRef = useRef<HTMLElement | null>(null);
    const leftRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (leftRef.current) {
                gsap.from(leftRef.current, {
                    x: -80,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                });
            }

            if (servicesRef.current) {
                gsap.from(servicesRef.current.children, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#2a2a2a] py-28"
            id="about"
        >
            <div className="max-w-7xl mx-auto px-8 pt-190 lg:pt-110">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div ref={leftRef} className="text-white">
                        <p className="text-sm font-semibold tracking-wider mb-4 text-gray-400">
                            ABOUT US
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            We deliver{" "}
                            <span className="text-[#E96015]">
                                exceptional call center sales
                            </span>{" "}
                            results
                        </h2>

                        <div className="space-y-6 text-gray-300">
                            <p>
                                Eight Bacus Call Centers LLC provides quality call
                                center solutions that achieve sales results.
                            </p>
                            <p>
                                We offer the solutions and services to make the
                                most of your contact center dollars.
                            </p>
                        </div>
                    </div>

                    <div ref={servicesRef} className="space-y-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-600 pb-4"
                            >
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="w-full flex justify-between items-center text-left group"
                                >
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#E96015] transition-colors duration-500 cursor-pointer">
                                        {service.title}
                                    </h3>

                                    <span
                                        className={`text-[#E96015] transition-transform duration-300 ${
                                            expandedIndex === index
                                                ? "rotate-45"
                                                : ""
                                        }`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${
                                        expandedIndex === index
                                            ? "grid-rows-[1fr] opacity-100 mt-4"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-300 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
