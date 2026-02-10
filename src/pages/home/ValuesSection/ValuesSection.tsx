import { useEffect, useRef } from 'react';
import { Award, Clock, Headphones, Target, Smile, Briefcase, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './ValuesSection.css';

gsap.registerPlugin(ScrollTrigger);

const ValuesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const values = [
        {
            icon: Award,
            title: 'Quality',
            description: 'Delivering excellence in every interaction'
        },
        {
            icon: Clock,
            title: 'Urgency',
            description: 'Responding swiftly to your business needs'
        },
        {
            icon: Headphones,
            title: 'Service',
            description: 'Providing exceptional customer support'
        },
        {
            icon: Target,
            title: 'Achieving Goals',
            description: 'Focused on meeting your objectives'
        },
        {
            icon: Smile,
            title: 'Being Positive',
            description: 'Maintaining an optimistic approach'
        },
        {
            icon: Briefcase,
            title: 'Conducting Worthwhile Work',
            description: 'Creating meaningful business impact'
        },
        {
            icon: Handshake,
            title: 'Being Easy to Work With',
            description: 'Building collaborative partnerships'
        }
    ];

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (headerRef.current) {
                gsap.from(headerRef.current.children, {
                    y: 60,
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

            if (carouselRef.current) {
                gsap.from(carouselRef.current, {
                    y: 80,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: carouselRef.current,
                        start: 'top 80%',
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#2a2a2a] py-20" id='values'>
            <div className="w-full py-12 mx-auto px-8 bg-gray-50 rounded-4xl">
                <div ref={headerRef} className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-wider mb-4 text-gray-500 uppercase">What We Achieve</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-[#E96015]">Values</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Eight Bacus Call Centers LLC serves an array of verticals and offers solutions that apply to each customer, market and industry. We are known for being a world-class telemarketing organization and for providing exceptional results through our well-trained agents.
                    </p>
                </div>

                <div ref={carouselRef} className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="pb-16"
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                                        <div className="w-16 h-16 bg-[#E96015]/10 rounded-full flex items-center justify-center mb-4">
                                            <Icon className="w-8 h-8 text-[#E96015]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button className="swiper-button-prev-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#E96015] hover:bg-[#E96015] hover:text-white transition-all duration-300 lg:translate-x-132 lg:-translate-y-16 relative z-10">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="swiper-button-next-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#E96015] hover:bg-[#E96015] hover:text-white transition-all duration-300 lg:-translate-x-132 lg:-translate-y-16 relative z-10">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
