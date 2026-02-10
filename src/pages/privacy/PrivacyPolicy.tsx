import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const sections = [
    {
        title: null,
        content: [
            "This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website https://ebccllc.com or use our services."
        ]
    },
    {
        title: "Definitions",
        content: [
            "Account means a unique account created for You to access our Service or parts of our Service.",
            "Company refers to Eight Bacus Call Centers LLC.",
            "Cookies are small files placed on Your device containing details of Your browsing history.",
            "Device means any device that can access the Service.",
            "Personal Data is any information relating to an identifiable individual.",
            "Service refers to the Website and services provided by the Company.",
            "Service Provider means third parties processing data on behalf of the Company.",
            "Usage Data refers to data collected automatically from Service usage.",
            "Website refers to https://ebccllc.com.",
            "You means the individual or legal entity accessing the Service."
        ]
    },
    {
        title: "Data We Collect and Use",
        content: [
            "We may collect Personal Data such as email address, name, phone number, and address information.",
            "Personal Data is used to provide and maintain our Service.",
            "To perform contracts and provide purchased services.",
            "To contact you regarding updates, security notifications, or relevant communications.",
            "To provide news, offers, and promotional information unless opted out.",
            "To manage your requests.",
            "For business transfers such as mergers or acquisitions.",
            "For analytics, improving services, and marketing effectiveness."
        ]
    },
    {
        title: "Sharing of Personal Data",
        content: [
            "With Service Providers for monitoring and communication.",
            "For business transfers during mergers or asset sales.",
            "With affiliates under common control.",
            "With business partners for promotions.",
            "With other users when information is shared publicly.",
            "With your consent."
        ]
    },
    {
        title: "International Data Transfers",
        content: [
            "Your data may be transferred to locations outside your jurisdiction.",
            "By using our Service, you consent to such transfers.",
            "We ensure appropriate safeguards are in place."
        ]
    },
    {
        title: "Data Retention",
        content: [
            "Personal Data is retained only as long as necessary or required by law."
        ]
    },
    {
        title: "Your Rights (GDPR)",
        content: [
            "Access to your data.",
            "Correction of inaccurate data.",
            "Erasure of personal data.",
            "Restriction of processing.",
            "Data portability.",
            "Objection to processing.",
            "To exercise rights, contact support@ebccllc.com."
        ]
    },
    {
        title: "Data Security",
        content: [
            "We implement appropriate technical and organizational security measures."
        ]
    },
    {
        title: "Updates to This Policy",
        content: [
            "We may update this Privacy Policy periodically.",
            "Changes will be communicated via the Website or email."
        ]
    },
    {
        title: "Contact Us",
        content: [
            "If you have questions, contact us at support@ebccllc.com."
        ]
    }
];

const PrivacyPolicy = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />
            <section className="w-full bg-[#2a2a2a]">
                <div className="relative h-[70vh] flex items-center">
                    <img
                        src="../../src/assets/privacy.jpg"
                        alt="Privacy Policy"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />

                    <div className="relative z-10 max-w-7xl mx-auto px-8">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            <span className="text-[#E96015]">Privacy</span> Policy
                        </h1>
                        <p className="text-white text-lg">
                            Effective Date: 18 July 2025
                        </p>
                    </div>
                </div>

                <div className="relative -mt-32 z-20 pb-20">
                    <div className="w-full mx-auto bg-white rounded-4xl p-12 space-y-10">
                        {sections.map((section, index) => (
                            <div key={index} className="scroll-reveal">
                                {section.title && (
                                    <h3 className="text-xl font-bold mb-4">
                                        {section.title}
                                    </h3>
                                )}
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    {section.content.map((text, i) => (
                                        <p key={i}>{text}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
