import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone, Smartphone, Target, MessageCircle, BarChart3, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "B2C Outbound Marketing",
        description: "Using outbound marketing has become a cost effective solution for organizations looking to increase sales and we help you outside expertise.",
        icon: Phone
    },
    {
        title: "Inbound Call Center",
        description: "We are experts at helping you create a staffing plan and forecast to ensure your calls are handled with minimum wait time and maximum customer experience.",
        icon: Smartphone
    },
    {
        title: "Telemarketing Lead Generation",
        description: "By utilizing our business to business lead generation services, your sales team is supplied with a steady stream of qualified leads to help you hit your sales goal.",
        icon: Target
    },
    {
        title: "Customer Service Solutions",
        description: "Deliver exceptional customer experiences with our dedicated support team trained to handle inquiries efficiently and professionally.",
        icon: MessageCircle
    },
    {
        title: "Market Research Services",
        description: "Our market research services deliver actionable insights that help businesses understand customer behavior, market trends, and strategic opportunities clearly.",
        icon: BarChart3
    },
    {
        title: "Appointment Setting",
        description: "Professional appointment setting services connect your sales representatives with qualified decision makers, increasing meeting efficiency and overall conversion success rates.",
        icon: Calendar
    }
];

const ServicesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

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
        <section ref={sectionRef} className="w-full bg-[#F3F3F3] pb-80 -mt-5 pt-10 lg:pt-10" id='services'>
            <div className="max-w-7xl mx-auto px-8">
                <div ref={headerRef} className="text-center mb-12">
                    <p className="text-sm font-semibold text-gray-600 mb-2">SERVICES</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Business Call Center & Telemarketing Services
                        <br />
                        <span className="text-[#E96015]">that achieve results</span>
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
                        We exist because the world is driven by sales. We deliver exceptional results because our
                        company culture is vibrant and alive. We offer business call center & telemarketing services
                        to meet the needs of your contact center dollars. Quality Contact Solutions serves an array of
                        verticals and offers solutions that apply to each customer, market, and industry.
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
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <SwiperSlide key={index} className="h-auto">
                                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                                        <div className="w-16 h-16 bg-[#E96015]/10 rounded-full flex items-center justify-center mb-4">
                                            <Icon className="w-8 h-8 text-[#E96015]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button className="swiper-button-prev-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#E96015] hover:bg-[#E96015] hover:text-white transition-all duration-300 lg:translate-x-122 lg:-translate-y-16 relative z-10">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="swiper-button-next-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#E96015] hover:bg-[#E96015] hover:text-white transition-all duration-300 lg:-translate-x-122 lg:-translate-y-16 relative z-10">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
