import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="py-10 border-t font-poppins relative z-10" style={{ background: '#1F2937', color: '#ffffff', borderTopColor: 'rgba(108,76,241,0.2)' }} id="contact">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 text-left">
          
          {/* Brand Column (Left) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white tracking-wide">
              Engloray Learning - Generation
            </h3>
            <p className="text-sm text-gray-300 font-semibold">
              Welcomes You All !
            </p>
            <div className="flex gap-4 mt-2">
              {[
                { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
                { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
                { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
                { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-brand-purple text-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column (Middle) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase">
              CONTACT US
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-300 font-medium">
              <a href="tel:+919843218042" className="hover:text-brand-purple transition-colors text-white font-bold">
                +91 98432 18042
              </a>
              <a href="tel:+919843206327" className="hover:text-brand-purple transition-colors text-white font-bold">
                +91 98432 06327
              </a>
              <p className="mt-1 text-gray-400 font-normal">Mon - Sun: 9am - 6pm</p>
              <p className="text-gray-400 font-normal">Madurai, Tamilnadu 625532</p>
              <a href="mailto:engloraytech@gmail.com" style={{ color: '#A78BFA' }} className="hover:underline mt-1 font-semibold">
                engloraytech@gmail.com
              </a>
            </div>
          </div>

          {/* Subscribe Column (Right) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase">
              SUBSCRIBE
            </h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full max-w-sm px-4 py-2.5 rounded-lg bg-white border text-slate-800 text-sm outline-none" style={{ borderColor: 'rgba(108,76,241,0.3)' }}
              />
              <span className="text-xs text-gray-400 italic mt-1 block">
                * Don't worry, we don't spam
              </span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-400 font-medium">
          <p>
            Copyright &copy; {new Date().getFullYear()}, Engloray Learning - Generation All rights reserved | Sitemap
          </p>
          <div className="flex gap-4 mt-1">
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
