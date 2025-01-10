import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Website Info */}
                <div>
                    <Logo></Logo>
                    <p className="mt-4 text-sm">
                    Your ultimate destination for exploring movies, TV shows, reviews, and cinematic updates. Immerse yourself in the world of entertainment.
                    </p>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                    <ul className="mt-4 space-y-2">
                    <li>
                        <a className="hover:text-white">
                        support@sineworld.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+1234567890" className="hover:text-white">
                        +1 (234) 567-890
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-white">
                        Contact Form
                        </a>
                    </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <ul className="mt-4 flex justify-center md:justify-start space-x-4">
                    <li>
                        <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500"
                        >
                        <FaFacebookF size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400"
                        >
                        <FaTwitter size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-pink-500"
                        >
                        <FaInstagram size={24} />
                        </a>
                    </li>
                    </ul>
                </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Bottom Section */}
                <div className="text-center mt-4 text-sm">
                <p>
                    © {new Date().getFullYear()} <span className="font-bold">sineworld</span>. All rights reserved.
                </p>
                <p className="mt-1">
                    Designed with ❤️ by Movie Enthusiasts.
                </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
