import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const sections = [
  {
    title: null,
    content: [
      `The terms "We" / "Us" / "Our"/” Company” individually and collectively refer to Eight Bacus Call Centers LLC and the terms "Visitor” ”User” refer to the users.`,
      `This page states the Terms and Conditions under which you (Visitor) may visit this website https://ebccllc.com . Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site.`,
      `The business, any of its business divisions and/or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies reserve their respective rights to revise these Terms and Conditions at any time by updating this posting.`,
      `You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website.`,
    ],
  },
  {
    title: "USE OF CONTENT",
    content: [
      `All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site are properties either owned or used under licence.`,
      `The use of these properties or any other content on this site is strictly prohibited without written permission.`,
      `You may not sell, reproduce, display, distribute, or otherwise use the materials for any public or commercial purpose.`,
    ],
  },
  {
    title: "Security Rules",
    content: [
      `Visitors are prohibited from violating or attempting to violate the security of the Website.`,
      `This includes unauthorized access, probing systems, introducing malware, overloading services, or sending unsolicited electronic communications.`,
      `Violations may result in civil or criminal liability and cooperation with law enforcement authorities.`,
    ],
  },
  {
    title: "General Rules",
    content: [
      `Visitors may not transmit or distribute material that violates any law or regulation.`,
      `This includes infringing intellectual property rights, violating privacy, or distributing abusive or obscene content.`,
    ],
  },
  {
    title: "INDEMNITY",
    content: [
      `The User agrees to indemnify and hold harmless the Company, its officers, directors, employees and agents from all claims arising from use of the Website.`,
    ],
  },
  {
    title: "LIABILITY",
    content: [
      `The Company shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages.`,
      `This includes loss of profits, data, service interruption, or unauthorized access.`,
      `Total liability shall not exceed the amount paid by the User to the Company, if any.`,
    ],
  },
  {
    title: "DISCLAIMER OF CONSEQUENTIAL DAMAGES",
    content: [
      `In no event shall the Company or its associated entities be liable for any damages resulting from use or inability to use the Website.`,
    ],
  },
];

const TermsConditions = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".scroll-reveal");

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

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Navbar />
    <section className="w-full bg-[#2a2a2a]">
      <div className="relative h-[70vh] flex items-center">
        <img
          src="../../src/assets/term.jpg"
          alt="Terms Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 max-w-7xl lg:px-64">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-[#E96015]">Terms</span> and <span className="text-[#E96015]">Conditions</span>
          </h1>
          <p className="text-white text-lg">
            Effective Date: 18 July 2025
          </p>
        </div>
      </div>

      <div className="relative -mt-32 z-20">
        <div className="w-full mx-auto bg-white rounded-4xl p-12 space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="scroll-reveal">
              {section.title && (
                <h3 className="text-xl font-bold mb-4">
                  {section.title}
                </h3>
              )}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {section.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
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

export default TermsConditions;
