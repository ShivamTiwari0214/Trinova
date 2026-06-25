import { X, Minus, Plus, Trash2, Send } from 'lucide-react';
import { useQuote } from '../contexts/QuoteContext';
import { useState } from 'react';

interface QuoteCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteCart({ isOpen, onClose }: QuoteCartProps) {
  const { items, removeFromQuote, updateQuantity, updateNotes, clearQuote } = useQuote();
  const [showRFQForm, setShowRFQForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmitRFQ = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted successfully! Our team will contact you shortly.');
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      message: ''
    });
    clearQuote();
    setShowRFQForm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col border-2 border-gray-100">
        <div className="bg-gradient-to-r from-[#1a2847] to-[#2d4068] text-white px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-1">Request for Quote</h2>
            <p className="text-gray-300 text-sm">Build your custom quote and submit for pricing</p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {!showRFQForm ? (
            <>
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-8xl mb-4">🛒</div>
                  <h3 className="text-2xl font-bold text-[#1a2847] mb-2">Your quote cart is empty</h3>
                  <p className="text-gray-500">Add products from our catalog to request a quote</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.product.id} className="border-2 border-gray-100 hover:border-[#7ed957] rounded-2xl p-6 transition-all">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl">⚙️</span>
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-[#1a2847]">{item.product.name}</h3>
                              <p className="text-sm text-gray-600">{item.product.category} - {item.product.subcategory}</p>
                            </div>
                            <button
                              onClick={() => removeFromQuote(item.product.id)}
                              className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-semibold w-12 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <span className="text-sm text-gray-600">units</span>
                          </div>

                          <input
                            type="text"
                            placeholder="Add specifications (e.g., M8x40, Grade 8.8, Zinc Plated)"
                            value={item.notes || ''}
                            onChange={(e) => updateNotes(item.product.id, e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <form onSubmit={handleSubmitRFQ} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
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
                <label className="block text-sm font-semibold mb-2">Email *</label>
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
                <label className="block text-sm font-semibold mb-2">Additional Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                  placeholder="Any specific requirements, delivery timeline, or questions..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Quote Summary</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {items.map(item => (
                    <li key={item.product.id}>
                      {item.product.name} - Qty: {item.quantity}
                      {item.notes && <span className="text-gray-500"> ({item.notes})</span>}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowRFQForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#7ed957] text-[#1a2847] px-6 py-3 rounded-lg font-semibold hover:bg-[#6bc847] transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Submit Quote Request
                </button>
              </div>
            </form>
          )}
        </div>

        {!showRFQForm && items.length > 0 && (
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-t-2 border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Total Items in Quote</p>
                <p className="text-3xl font-bold text-[#1a2847]">{items.reduce((sum, item) => sum + item.quantity, 0)}</p>
              </div>
              <button
                onClick={() => setShowRFQForm(true)}
                className="flex items-center gap-2 bg-[#1a2847] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#2d4068] transition-all hover:shadow-lg hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Proceed to Quote Request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
