import { X, Plus } from 'lucide-react';
import { Product } from '../data/products';
import { useQuote } from '../contexts/QuoteContext';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  const { addToQuote } = useQuote();

  if (!isOpen || !product) return null;

  const handleAddToQuote = () => {
    addToQuote(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col border-2 border-gray-100">
        <div className="bg-gradient-to-r from-[#1a2847] to-[#2d4068] text-white px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-1">Product Details</h2>
            <p className="text-gray-300 text-sm">Complete specifications and information</p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl h-96 flex items-center justify-center mb-6 border-2 border-gray-200">
                <div className="text-9xl">⚙️</div>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-gray-200">
                <h4 className="font-bold mb-3 text-[#1a2847] text-lg">Product Category</h4>
                <p className="text-gray-700 mb-1">{product.category}</p>
                <p className="text-[#7ed957] font-bold text-lg">{product.subcategory}</p>
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1 bg-[#7ed957]/20 border border-[#7ed957]/30 rounded-full text-[#7ed957] text-xs font-semibold mb-4 uppercase tracking-wide">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-[#1a2847] mb-4 leading-tight">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100">
                  <h3 className="font-bold text-lg mb-4 text-[#1a2847] flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Available Materials
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map(mat => (
                      <span key={mat} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-200">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100">
                  <h3 className="font-bold text-lg mb-4 text-[#1a2847] flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Available Finishes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map(fin => (
                      <span key={fin} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl text-sm font-semibold border border-purple-200">
                        {fin}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100">
                  <h3 className="font-bold text-lg mb-4 text-[#1a2847] flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map(app => (
                      <span key={app} className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {product.specifications && product.specifications.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-[#1a2847]">Specifications</h3>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2 text-lg">💡 Custom Requirements?</h4>
                  <p className="text-amber-700 leading-relaxed">
                    We can customize materials, sizes, finishes, and specifications to meet your exact requirements.
                    Add this product to your quote and specify your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-t-2 border-gray-200 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:bg-white transition-all text-gray-700"
          >
            Close
          </button>
          <button
            onClick={handleAddToQuote}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1a2847] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2d4068] transition-all hover:shadow-lg hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Add to Quote Request
          </button>
        </div>
      </div>
    </div>
  );
}
