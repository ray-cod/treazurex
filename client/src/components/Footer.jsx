import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send, Sun, Moon } from "lucide-react";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Stay Connected</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join our newsletter for the latest updates and exclusive offers.
          </p>
          <form className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 pr-10 bg-white dark:bg-black text-sm"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-black dark:bg-white text-white dark:text-black rounded-md"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="space-y-2 text-sm flex flex-col">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Products
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2 text-sm">
            <p>123 home Street</p>
            <p>Johannesburg, South Africa</p>
            <p>Phone: +27 69 152 7208</p>
            <p>Email: raimilassissi8@gmail.com</p>
          </address>
        </div>

        {/* Social & Theme */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-3 mb-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                className="p-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="flex items-center gap-2 text-sm">
            <Sun className="h-4 w-4" />
            <div
              className={`relative w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full px-1 cursor-pointer transition`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div
                className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkMode ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
            <Moon className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-6 px-4 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-gray-600 dark:text-gray-400">
          © 2025 Raimi Dikamona. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
