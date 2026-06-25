import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#1a2847] to-[#2d4068] text-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#7ed957]/20 border border-[#7ed957]/30 rounded-full text-[#7ed957] text-sm font-semibold mb-6">
            Get in Touch
          </div>
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">We're here to help with your industrial supply needs</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2847] mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our products or need a custom quote? Our team is ready to assist you.
              Fill out the form and we'll respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-[#7ed957] transition-all">
                <div className="bg-gradient-to-br from-[#7ed957] to-[#6bc847] p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1a2847]">Address</h3>
                  <p className="text-gray-700">
                    Building no 76, Bhawani Complex<br />
                    Ayodhya, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-[#7ed957] transition-all">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1a2847]">Phone</h3>
                  <a href="tel:7068696119" className="text-[#7ed957] hover:underline">
                    7068696119
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-[#7ed957] transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1a2847]">Email</h3>
                  <a href="mailto:info@trinova23.com" className="text-[#7ed957] hover:underline">
                    info@trinova23.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-[#7ed957] transition-all">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1a2847]">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1a2847] to-[#2d4068] text-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">GST Information</h3>
                <p className="text-gray-300">GST Number: 09BDTPT7985G1ZC</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 p-8">
              <h2 className="text-3xl font-bold text-[#1a2847] mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                      placeholder="Contact Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#1a2847] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#2d4068] transition-all hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
