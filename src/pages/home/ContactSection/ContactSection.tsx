import { useEffect, useRef } from 'react';
import { Globe, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (infoRef.current) {
                gsap.from(infoRef.current.children, {
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

            if (formRef.current) {
                gsap.from(formRef.current, {
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
        <section ref={sectionRef} className="w-full bg-[#2a2a2a]" id='contact'>
            <div className="w-full rounded-4xl py-8 mx-auto px-8 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div ref={infoRef} className="bg-gray-100 rounded-3xl p-12 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Have a project in mind?
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6">
                                Let's connect
                            </h3>
                            <p className="text-gray-600 mb-12">
                                We have three projects with this template and that is because we love the design, the large number of possibilities.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-[#E96015]" />
                                </div>
                                <span className="text-lg font-semibold">collective.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-[#E96015]" />
                                </div>
                                <span className="text-lg font-semibold">+62 812-3456-7890</span>
                            </div>
                        </div>
                    </div>

                    <div ref={formRef} className="bg-[#2a2a2a] rounded-3xl p-12">
                        <h3 className="text-3xl font-bold text-white mb-2">Send a message</h3>
                        <p className="text-gray-400 mb-8">We're here to answer any question you may have.</p>

                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 focus:outline-none focus:border-[#E96015] transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 focus:outline-none focus:border-[#E96015] transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 focus:outline-none focus:border-[#E96015] transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your message (optional)"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 focus:outline-none focus:border-[#E96015] transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-transparent border-2 border-[#E96015] text-[#E96015] py-4 rounded-full font-semibold hover:bg-[#E96015] hover:text-white transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
