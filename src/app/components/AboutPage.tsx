import { Award, Users, Factory, TrendingUp } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#1a2847] to-[#2d4068] text-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#7ed957]/20 border border-[#7ed957]/30 rounded-full text-[#7ed957] text-sm font-semibold mb-6">
            Our Story
          </div>
          <h1 className="text-5xl font-bold mb-4">About Trinova Industries</h1>
          <p className="text-xl text-gray-300">Building Stronger Connections Since 2010</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2847] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Trinova Industries has been a trusted name in industrial manufacturing and supply for over 15 years.
                Starting from humble beginnings in Ayodhya, we have grown to become one of the leading suppliers of
                industrial fasteners, agricultural equipment parts, and safety products in the region.
              </p>
              <p>
                Our commitment to quality and customer satisfaction has earned us ISO 9001:2015 certification and the
                trust of over 500 satisfied clients across various industries.
              </p>
              <p>
                We specialize in providing comprehensive solutions for industrial, agricultural, and commercial needs,
                with a product range spanning over 5000+ items across 7 major categories.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1a2847] mb-6">Our Mission</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#7ed957]">
              <p className="text-lg text-gray-700 italic mb-6">
                "To provide reliable, high-quality industrial products and exceptional service that helps our
                clients build stronger, more efficient operations."
              </p>
              <h3 className="font-bold text-[#1a2847] mb-3">Core Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                  Quality First - ISO certified excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                  Customer Focus - Your success is our priority
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                  Innovation - Continuous improvement and adaptation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                  Integrity - Honest business practices
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-[#7ed957]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Factory className="w-8 h-8 text-[#1a2847]" />
            </div>
            <div className="text-4xl font-bold text-[#1a2847] mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-[#7ed957]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#1a2847]" />
            </div>
            <div className="text-4xl font-bold text-[#1a2847] mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-[#7ed957]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-[#1a2847]" />
            </div>
            <div className="text-4xl font-bold text-[#1a2847] mb-2">5000+</div>
            <div className="text-gray-600">Products</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-[#7ed957]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#1a2847]" />
            </div>
            <div className="text-4xl font-bold text-[#1a2847] mb-2">ISO</div>
            <div className="text-gray-600">9001:2015</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#1a2847] mb-6 text-center">Certifications & Standards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2847]">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management System Certified</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2847]">International Standards</h3>
              <p className="text-sm text-gray-600">ISI / DIN / ASTM / ANSI Compliant</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2847]">RoHS Compliant</h3>
              <p className="text-sm text-gray-600">Environmentally Responsible Manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
