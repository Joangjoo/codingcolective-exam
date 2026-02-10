import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-[#2a2a2a] text-white py-12">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <div className="col-span-2 border-b-2  border-[#9b9b9b]">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="../../src/assets/logo.png" alt="logo" className='w-32 h-32' />
                        </div>
                    </div>


                    <div className="flex gap-10 col-span-1">
                        <div className="flex gap-12">
                            <div className="space-y-3">
                                <a href="#home" className="block text-gray-300 hover:text-[#E96015] transition-colors">
                                    Home
                                </a>
                                <a href="#about" className="block text-gray-300 hover:text-[#E96015] transition-colors">
                                    About Us
                                </a>
                                <a href="#service" className="block text-gray-300 hover:text-[#E96015] transition-colors">
                                    Service
                                </a>
                                <a href="#contact" className="block text-gray-300 hover:text-[#E96015] transition-colors">
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Link to="/terms" className="block text-gray-300 hover:text-[#E96015] transition-colors">
                                Terms and Conditions
                            </Link>
                            <Link to="/privacy" className="block text-gray-300 hover:text-[#E96015] transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="pt-8">
                    <p className="text-sm text-gray-500 leading-relaxed">
                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
