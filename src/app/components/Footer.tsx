import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for all your grocery needs. Fresh products, best
            deals, and fast delivery at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/hero" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm">
            📍 123 Grocery Lane, Food City, FC 45678
          </p>
          <p className="text-gray-400 text-sm">📞 +123 456 7890</p>
          <p className="text-gray-400 text-sm">✉️ support@groceryapp.com</p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.facebook.com/alishbah.rajput.12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alishba-majeed-5099b8310/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/_alishbaaa_majeed/profilecard/?igsh=aDIyYnAxZXJybngx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Grocery App. All rights reserved By Alishba Majeed💕. |{" "}
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
