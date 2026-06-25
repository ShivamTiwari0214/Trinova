import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Award, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a2847] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7ed957] to-[#6bc847] rounded-lg flex items-center justify-center">
                <span className="text-[#1a2847] font-bold text-xl">T</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">
                  TRINOVA <span className="text-[#7ed957]">INDUSTRIES</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading manufacturer and supplier of industrial fasteners, agricultural equipment, CNC parts, and safety products. ISO 9001:2015 certified quality you can trust.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#7ed957] hover:text-[#1a2847] transition-all flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#7ed957] hover:text-[#1a2847] transition-all flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#7ed957] hover:text-[#1a2847] transition-all flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#7ed957] hover:text-[#1a2847] transition-all flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Home</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Products</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Certifications</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Product Categories</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Industrial Fasteners</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Agricultural Equipment</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">CNC & VMC Parts</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Safety Products</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Plastic Products</a></li>
              <li><a href="#" className="hover:text-[#7ed957] hover:translate-x-1 inline-block transition-all">Two Wheeler Parts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#7ed957]" />
                <span>Building no 76, Bhawani Complex<br />Ayodhya, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#7ed957]" />
                <a href="tel:7068696119" className="hover:text-[#7ed957] transition-colors">+91 7068696119</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#7ed957]" />
                <a href="mailto:info@trinova23.com" className="hover:text-[#7ed957] transition-colors">info@trinova23.com</a>
              </li>
              <li className="pt-3 border-t border-white/10">
                <p className="text-sm font-semibold text-gray-300">GST: 09BDTPT7985G1ZC</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">&copy; 2026 Trinova Industries. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#7ed957] text-[#1a2847] rounded-lg font-semibold">
                <Award className="w-4 h-4" />
                <span className="text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-4 h-4 text-[#7ed957]" />
                <span className="text-sm">ISI Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-sm">RoHS Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
