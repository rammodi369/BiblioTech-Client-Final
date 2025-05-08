import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-white border-t border-gray-300 py-12 mt-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {[
          {
            title: "About",
            links: ["About Us", "Feedback"],
            path: ["/about-us", "/feedback"],
          },
          {
            title: "Resources",
            links: ["Study Materials", "Q&A Bank"],
            path: ["/materials", "/question-Bank"],
          },
        ].map((section, i) => (
          <div key={i}>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={section.path[j]}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="text-gray-600 text-sm">
          <p className="font-semibold text-gray-800 text-lg mb-4">Contact Us</p>
          <p>Email: ram@cmentor.com</p>
          <p>Phone: +91 9214905309</p>
          <p>Location: Jaipur, India</p>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Biblio Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
