import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#FAF9F6] text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <span className="text-xl font-bold bg-decops-text-gradient bg-clip-text text-transparent">
            DECOPS PVT LTD
          </span>

          <p className="mt-3 text-sm font-medium leading-relaxed text-gray-700 max-w-xs">
            Engineered for continuous digital evolution. Innovating enterprise
            products and scalable IT services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-900 font-semibold text-sm mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-decops-pink transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-decops-pink transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/vision"
                className="text-gray-700 hover:text-decops-pink transition-colors"
              >
                Vision & Mission
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-decops-pink transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Core Solutions */}
        <div>
          <h4 className="text-gray-900 font-semibold text-sm mb-4">
            Core Solutions
          </h4>

          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <span className="text-gray-700 hover:text-decops-pink transition-colors cursor-pointer">
                Cloud & DevOps Acceleration
              </span>
            </li>

            <li>
              <span className="text-gray-700 hover:text-decops-pink transition-colors cursor-pointer">
                Custom Software Engineering
              </span>
            </li>

            <li>
              <span className="text-gray-700 hover:text-decops-pink transition-colors cursor-pointer">
                Cybersecurity Architecture
              </span>
            </li>

            <li>
              <span className="text-gray-700 hover:text-decops-pink transition-colors cursor-pointer">
                IT Managed Operations
              </span>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-gray-900 font-semibold text-sm mb-4">
            Connect
          </h4>

          <p className="text-sm font-medium text-gray-700">
            Kozhikode, Kerala, India
          </p>

          <p className="text-sm font-medium text-gray-700 mt-2">
            info@decops.in
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center">
        <p className="text-xs font-medium text-gray-700">
          © {new Date().getFullYear()} Decops Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
