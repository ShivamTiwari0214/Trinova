import { ChevronDown, ShoppingCart, Search, Phone, Mail, MapPin, FileText } from 'lucide-react';
import { useState } from 'react';
import { useQuote } from '../contexts/QuoteContext';
import { categories } from '../data/products';

interface HeaderProps {
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
}

export function Header({ onNavigate, onOpenQuote }: HeaderProps) {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const { getTotalItems } = useQuote();

  const handleNavigate = (page: string) => {
    setActiveNav(page);
    onNavigate(page);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="bg-[#1a2847] text-white py-2 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-8">
            <a href="tel:7068696119" className="flex items-center gap-2 hover:text-[#7ed957] transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 7068696119</span>
            </a>
            <a href="mailto:info@trinova23.com" className="flex items-center gap-2 hover:text-[#7ed957] transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@trinova23.com</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ayodhya, India</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <span className="px-3 py-1 bg-[#7ed957] text-[#1a2847] rounded font-semibold">ISO 9001:2015</span>
            <span className="text-gray-300">ISI Certified</span>
            <span className="text-gray-300">RoHS Compliant</span>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1a2847] to-[#2d4068] rounded-lg flex items-center justify-center">
              <span className="text-[#7ed957] font-bold text-xl">T</span>
            </div>
            <div>
              <div className="text-xl font-bold text-[#1a2847] leading-tight">
                TRINOVA <span className="text-[#7ed957]">INDUSTRIES</span>
              </div>
              <div className="text-xs text-gray-500">Stronger Connections. Reliable Solutions.</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNavigate('home')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeNav === 'home'
                  ? 'bg-[#7ed957] text-[#1a2847]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </button>

            <div className="relative">
              <button
                onMouseEnter={() => setShowMegaMenu(true)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                  activeNav === 'products'
                    ? 'bg-[#7ed957] text-[#1a2847]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleNavigate('products')}
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>

              {showMegaMenu && (
                <div
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                  className="absolute left-0 top-full mt-1 bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-[900px]"
                >
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-[#1a2847]">Browse by Category</h3>
                    <p className="text-sm text-gray-600 mt-1">Select a category to view our extensive product range</p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {categories.map(cat => (
                      <div key={cat.id} className="group">
                        <h4 className="font-bold text-[#1a2847] mb-3 pb-2 border-b border-gray-200 group-hover:text-[#7ed957] transition-colors">
                          {cat.name}
                        </h4>
                        <ul className="space-y-2">
                          {cat.subcategories.slice(0, 5).map(sub => (
                            <li key={sub}>
                              <button
                                onClick={() => {
                                  setShowMegaMenu(false);
                                  handleNavigate('products');
                                }}
                                className="text-sm text-gray-600 hover:text-[#7ed957] hover:translate-x-1 transition-all block"
                              >
                                {sub}
                              </button>
                            </li>
                          ))}
                          {cat.subcategories.length > 5 && (
                            <li className="text-xs text-[#7ed957] font-semibold pt-1">
                              +{cat.subcategories.length - 5} more
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('about')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeNav === 'about'
                  ? 'bg-[#7ed957] text-[#1a2847]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavigate('contact')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeNav === 'contact'
                  ? 'bg-[#7ed957] text-[#1a2847]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-700">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <FileText className="w-4 h-4" />
              Catalog
            </button>
            <button
              onClick={onOpenQuote}
              className="relative px-4 py-2.5 bg-[#1a2847] text-white rounded-lg hover:bg-[#2d4068] transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium">Quote ({getTotalItems()})</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#7ed957] text-[#1a2847] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
