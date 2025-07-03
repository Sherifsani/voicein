import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              invoice<span className="text-[#4F65B0]">.</span>
            </h1>
            <p className="text-gray-600 max-w-md mb-6">
              Smart invoicing for your business needs. Create professional
              invoices, get paid faster, and track payments with our simple tool
              designed for freelancers in Africa and beyond.
            </p>
            <div className="flex gap-4 text-sm">
              <span className="px-3 py-1 bg-[#4F65B0]/10 text-[#4F65B0] rounded-full font-medium">
                1% Transaction Fee
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                No Monthly Fees
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                About
              </li>
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Features
              </li>
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Help Center
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Invoice. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Made with ❤️ for African entrepreneurs</span>
            <div className="flex gap-4">
              <span className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Twitter
              </span>
              <span className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                LinkedIn
              </span>
              <span className="hover:text-[#4F65B0] transition-colors cursor-pointer">
                Email
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
