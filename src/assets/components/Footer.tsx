import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-sm text-gray-600 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Social */}
        <div>
          <h1 className="text-xl font-bold text-blue-600 mb-2">ZYTRADE</h1>
          <p className="mb-4">
            © 2010 - 2025, Zytrade Broking Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xl text-gray-600">
            <FaYoutube />
            <FaWhatsapp />
            <FaTelegram />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-gray-800 font-semibold mb-2">Company</h2>
          <ul className="space-y-1">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Referral programme</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">ZYTRADE.tech</a>
            </li>
            <li>
              <a href="#">Open source</a>
            </li>
            <li>
              <a href="#">Press & media</a>
            </li>
            <li>
              <a href="#">ZYTRADE Cares (CSR)</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-gray-800 font-semibold mb-2">Support</h2>
          <ul className="space-y-1">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Support portal</a>
            </li>
            <li>
              <a href="#">Z-Connect blog</a>
            </li>
            <li>
              <a href="#">List of charges</a>
            </li>
            <li>
              <a href="#">Downloads & resources</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Market overview</a>
            </li>
            <li>
              <a href="#">How to file a complaint?</a>
            </li>
            <li>
              <a href="#">Status of your complaints</a>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-gray-800 font-semibold mb-2">Account</h2>
          <ul className="space-y-1">
            <li>
              <a href="#">Open an account</a>
            </li>
            <li>
              <a href="#">Fund transfer</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 pb-6 text-xs text-gray-500 space-y-2">
        <p>
          Zytrade Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 ...
          <br />
          Disclosure Document as prescribed by SEBI | CDSL | NSDL.
        </p>
        <p>
          Procedure to file a complaint on{" "}
          <a href="#" className="text-blue-600 underline">
            SEBI SCORES
          </a>
        </p>
        <p>
          <a href="#" className="text-blue-600 underline">
            Smart Online Dispute Resolution
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-600 underline">
            Grievances Redressal Mechanism
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
