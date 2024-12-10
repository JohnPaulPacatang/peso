import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="mx-auto px-6 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-blue text-xl font-bold">PESO Manpower Inc</h2>
            <p className="text-gray-600 mt-4">
              Developing a Responsive Website for Public Employment Service Office.
            </p>
          </div>

        
          <div>
            <h3 className="text-gray-800 font-semibold">Links</h3>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-darkblue">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-darkblue">About us</Link>
              </li>
              <li>
                <Link to="/announcement" className="text-gray-600 hover:text-darkblue">Announcement</Link>
              </li>
              <li>
                <Link to="/job-listing" className="text-gray-600 hover:text-darkblue">Job listing</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-600 hover:text-darkblue">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-800 font-semibold">Contact Us</h3>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>
                <a className="hover:text-darkblue" href="https://maps.app.goo.gl/QKC7B8i4wWcqKUR29" target="_blank" rel="noopener noreferrer">
                  887-1519 Zapote Rd, Caloocan, 1400 Metro Manila
                </a>
              </li>
              <li>
                <a href="tel:09945865688" className="hover:text-darkblue">09945865688</a>
              </li>
              <li>
                <a href="mailto:peso@gmail.com" className="hover:text-darkblue">peso@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-gray-800 font-semibold mb-2">Social Link</h4>
              <div className="flex space-x-4 text-gray-600 text-lg">
                <FaFacebookF className="cursor-pointer hover:text-green" />
                <FaInstagram className="cursor-pointer hover:text-green" />
                <FaLinkedinIn className="cursor-pointer hover:text-green" />
                <FaPinterestP className="cursor-pointer hover:text-green" />
                <FaYoutube className="cursor-pointer hover:text-green" />
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-800 font-semibold">For more inquiry</h3>
            <p className="text-gray-600 mt-4">
              Contact us for more information about available job opportunities and application details.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-600 text-sm">
          Copyright © 2024 All Rights Reserved by PESO Manpower Inc
        </div>
      </div>
    </footer>
  );
};

export default Footer;
