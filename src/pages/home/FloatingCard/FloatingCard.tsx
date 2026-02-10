import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingCard = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", 
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(cardRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
            .from(imageRef.current, {
                x: -60,
                opacity: 0,
                duration: 0.8,
            }, "-=0.6")
            .from(textRef.current!.children, {
                x: 60,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
            }, "-=0.6");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-32">
            <div className="w-full lg:max-w-6xl mx-auto lg:px-8">
                <div
                    ref={cardRef}
                    className="w-full bg-white rounded-3xl shadow-2xl p-12 md:p-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Hitting Your Sales Goals Should Feel{" "}
                        <span className="text-[#E96015]">Effortless</span>
                        <br />— With the Right Support.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div
                            ref={imageRef}
                            className="rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                                alt="Customer service representative"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div
                            ref={textRef}
                            className="space-y-6 text-gray-700"
                        >
                            <p className="leading-relaxed">
                                Achieving your sales and service targets takes more than just effort — it demands strategy, focus, and the right team behind you.
                            </p>

                            <p className="font-semibold text-lg text-gray-900">
                                That's where we come in.
                            </p>

                            <p className="leading-relaxed">
                                With our expert telemarketing services, you'll turn every customer interaction into real opportunities — without spreading your team thin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloatingCard;
