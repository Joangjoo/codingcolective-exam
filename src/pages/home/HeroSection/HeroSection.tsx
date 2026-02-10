import { useEffect, useRef } from "react";
import gsap from "gsap";



const HeroSection = () => {
    const section = useRef<HTMLDivElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const subtitle = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({defaults : {ease : "power3.out"}})

            tl.from(title.current, {
                y: 60,
                opacity: 0,
                duration: 1,
            })
            .from(subtitle.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
            }, "-=0.4"); 
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full pb-80 lg:pb-122 bg-linear-to-br from-[#1a2332] via-[#1e3a3a] to-[#0f1419] overflow-hidden" id='home' ref={section}>
            <div className="flex items-center h-full max-w-7xl mx-auto lg:px-32 pt-80">
                <div className="max-w-3xl ml-3 md:ml-0">
                    <h1 className="text-xl md:text-7xl lg:text-4xl font-bold text-white mb-6 leading-tight" ref={title}>
                        Your Trusted Partner in <br />
                        <span className="text-[#E96015] bg-linear-to-r from-[#E96015] to-[#ff8c42] bg-clip-text">
                            Customer Support Excellence
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-xl text-gray-300 leading-relaxed mb-8" ref={subtitle}>
                        We specialize in outbound calls that connect, engage, and convert. With proven telemarketing strategies and skilled agents, we help your business generate leads, close deals, and grow faster — one call at a time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
