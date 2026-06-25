import { Wrench, Shield, Award, TrendingUp, ArrowRight, CheckCircle, Package, Truck, Clock, Users } from 'lucide-react';
import { categories } from '../data/products';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-[#1a2847] to-[#2d4068] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7ed957] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#7ed957]/20 border border-[#7ed957]/30 rounded-full text-[#7ed957] text-sm font-semibold mb-6">
                ISO 9001:2015 Certified Manufacturer
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Building <span className="text-[#7ed957]">Stronger</span><br />
                Connections Every Day
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premier supplier of industrial fasteners, agricultural equipment, CNC parts, and safety products.
                Trusted by 500+ businesses across India for quality, reliability, and exceptional service.
              </p>
              <div className="flex gap-4 mb-12">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-[#7ed957] text-[#1a2847] px-8 py-4 rounded-lg font-semibold hover:bg-[#6bc847] transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  Browse Catalog
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="border-2 border-white/50 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1a2847] transition-all"
                >
                  Request Quote
                </button>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7ed957]">5000+</div>
                  <div className="text-sm text-gray-400 mt-1">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7ed957]">500+</div>
                  <div className="text-sm text-gray-400 mt-1">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7ed957]">15+</div>
                  <div className="text-sm text-gray-400 mt-1">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7ed957]">24/7</div>
                  <div className="text-sm text-gray-400 mt-1">Support</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#7ed957] to-[#6bc847] rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                      <Package className="w-12 h-12 mx-auto mb-3 text-[#1a2847]" />
                      <div className="text-2xl font-bold text-[#1a2847]">7 Categories</div>
                      <div className="text-sm text-[#1a2847]/80 mt-1">Product Range</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                      <Truck className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold">Fast Delivery</div>
                      <div className="text-sm text-gray-300 mt-1">Pan India</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                      <Clock className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold">Quick Response</div>
                      <div className="text-sm text-gray-300 mt-1">24 Hours</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                      <Users className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold">Expert Team</div>
                      <div className="text-sm text-gray-300 mt-1">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2847] mb-4">Why Choose Trinova Industries?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence in industrial supply with certified quality, extensive inventory, and unmatched customer service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#7ed957] hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-[#7ed957] to-[#6bc847] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#1a2847]">ISO Certified</h3>
              <p className="text-gray-600 leading-relaxed">
                ISO 9001:2015 certified manufacturing processes ensuring the highest quality standards in every product.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#7ed957] hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#1a2847]">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed">
                All products meet international standards - ISI, DIN, ASTM, ANSI. Fully RoHS compliant and environmentally responsible.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#7ed957] hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#1a2847]">Extensive Range</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive catalog of 5000+ products across 7 major industrial categories to meet all your needs.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#7ed957] hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#1a2847]">Competitive Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Best-in-class pricing for bulk and wholesale orders with flexible payment terms and fast delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2847] mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of industrial and commercial products across 7 specialized categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => onNavigate('products')}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#7ed957] text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    idx % 4 === 0 ? 'bg-blue-100' :
                    idx % 4 === 1 ? 'bg-green-100' :
                    idx % 4 === 2 ? 'bg-purple-100' : 'bg-orange-100'
                  }`}>
                    {idx === 0 ? '⚙️' : idx === 1 ? '🚜' : idx === 2 ? '🔧' : idx === 3 ? '🦺' : idx === 4 ? '🪣' : idx === 5 ? '🏍️' : '🕉️'}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#7ed957] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2847] group-hover:text-[#7ed957] transition-colors">
                  {cat.name}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {cat.subcategories.slice(0, 4).map((sub) => (
                    <li key={sub} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#7ed957] flex-shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                  {cat.subcategories.length > 4 && (
                    <li className="text-[#7ed957] font-semibold pt-2 pl-6">
                      +{cat.subcategories.length - 4} more items
                    </li>
                  )}
                </ul>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1a2847] to-[#2d4068] text-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Contact us today for bulk orders, custom requirements, or technical consultations.
                Our expert team is ready to assist you with all your industrial supply needs.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#7ed957] text-[#1a2847] px-10 py-4 rounded-xl font-semibold hover:bg-[#6bc847] transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/50 px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1a2847] transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
