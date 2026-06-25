import { useState, useMemo } from 'react';
import { Search, Filter, Plus, X, Grid3x3, List, ChevronDown } from 'lucide-react';
import { products, categories, materials, finishes, applications, Product } from '../data/products';
import { useQuote } from '../contexts/QuoteContext';

interface ProductsPageProps {
  onProductClick: (product: Product) => void;
}

export function ProductsPage({ onProductClick }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const { addToQuote } = useQuote();

  const currentCategory = categories.find(cat => cat.name === selectedCategory);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
      const matchesMaterial = selectedMaterial === 'all' || product.materials.includes(selectedMaterial);
      const matchesFinish = selectedFinish === 'all' || product.finishes.includes(selectedFinish);
      const matchesApplication = selectedApplication === 'all' || product.applications.includes(selectedApplication);

      return matchesSearch && matchesCategory && matchesSubcategory && matchesMaterial && matchesFinish && matchesApplication;
    });
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedMaterial, selectedFinish, selectedApplication]);

  const handleAddToQuote = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToQuote(product);
  };

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedSubcategory !== 'all',
    selectedMaterial !== 'all',
    selectedFinish !== 'all',
    selectedApplication !== 'all'
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-8 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-[#1a2847] mb-2">Product Catalog</h1>
          <p className="text-lg text-gray-600">Browse our extensive range of 5000+ industrial and commercial products</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by product name, category, or specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                showFilters
                  ? 'bg-[#1a2847] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-5 h-5" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-[#7ed957] text-[#1a2847] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            <div className="flex gap-2 border border-gray-300 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-[#7ed957] text-[#1a2847]' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-[#7ed957] text-[#1a2847]' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-[#1a2847]">Refine Results</h3>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedSubcategory('all');
                        setSelectedMaterial('all');
                        setSelectedFinish('all');
                        setSelectedApplication('all');
                        setSearchQuery('');
                      }}
                      className="text-sm text-[#7ed957] hover:underline font-medium"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 text-gray-900">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedSubcategory('all');
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent bg-white"
                    >
                      <option value="all">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  {currentCategory && (
                    <div>
                      <label className="block text-sm font-bold mb-3 text-gray-900">Subcategory</label>
                      <select
                        value={selectedSubcategory}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent bg-white"
                      >
                        <option value="all">All Subcategories</option>
                        {currentCategory.subcategories.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold mb-3 text-gray-900">Material</label>
                    <select
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent bg-white"
                    >
                      <option value="all">All Materials</option>
                      {materials.map(mat => (
                        <option key={mat} value={mat}>{mat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-3 text-gray-900">Finish</label>
                    <select
                      value={selectedFinish}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent bg-white"
                    >
                      <option value="all">All Finishes</option>
                      {finishes.map(fin => (
                        <option key={fin} value={fin}>{fin}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-3 text-gray-900">Application</label>
                    <select
                      value={selectedApplication}
                      onChange={(e) => setSelectedApplication(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:border-transparent bg-white"
                    >
                      <option value="all">All Applications</option>
                      {applications.map(app => (
                        <option key={app} value={app}>{app}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-700">
                <span className="font-bold text-[#1a2847]">{filteredProducts.length}</span> products found
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] bg-white">
                <option>Sort by: Relevance</option>
                <option>Name: A to Z</option>
                <option>Name: Z to A</option>
                <option>Newest First</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-16 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#1a2847] mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                    setSelectedMaterial('all');
                    setSelectedFinish('all');
                    setSelectedApplication('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-[#7ed957] text-[#1a2847] rounded-xl font-semibold hover:bg-[#6bc847] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    onClick={() => onProductClick(product)}
                    className={`group bg-white rounded-xl shadow-sm border-2 border-gray-100 hover:border-[#7ed957] hover:shadow-xl transition-all cursor-pointer ${
                      viewMode === 'list' ? 'flex gap-6' : ''
                    }`}
                  >
                    <div className={`bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center ${
                      viewMode === 'grid' ? 'h-56 rounded-t-xl' : 'w-48 rounded-l-xl flex-shrink-0'
                    }`}>
                      <div className="text-7xl">⚙️</div>
                    </div>

                    <div className="p-6 flex-1">
                      <div className="text-xs font-semibold text-[#7ed957] mb-2 uppercase tracking-wide">
                        {product.category}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-[#1a2847] group-hover:text-[#7ed957] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div>
                          <div className="text-xs font-semibold text-gray-500 mb-2">MATERIALS</div>
                          <div className="flex flex-wrap gap-2">
                            {product.materials.slice(0, 3).map(mat => (
                              <span key={mat} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 mb-2">APPLICATIONS</div>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.slice(0, 2).map(app => (
                              <span key={app} className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={(e) => handleAddToQuote(product, e)}
                        className="w-full flex items-center justify-center gap-2 bg-[#1a2847] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2d4068] transition-all hover:shadow-lg"
                      >
                        <Plus className="w-5 h-5" />
                        Add to Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
