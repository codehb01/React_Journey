import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerSections = [
    {
      title: "Features",
      links: ["Weather", "Forecast", "Emergency"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookies"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="text-blue-300 mb-10 lg:mb-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl">Climate</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {footerSections.map((section, index) => (
              <div key={index}>
                <p className="text-xl font-bold text-white">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to="#"
                        className="text-white hover:text-blue-300 transition"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
