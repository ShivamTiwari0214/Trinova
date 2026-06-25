import { useState } from 'react';
import { QuoteProvider } from './contexts/QuoteContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { QuoteCart } from './components/QuoteCart';
import { ProductDetail } from './components/ProductDetail';
import { Product } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [showQuoteCart, setShowQuoteCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'products':
        return <ProductsPage onProductClick={handleProductClick} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header onNavigate={setCurrentPage} onOpenQuote={() => setShowQuoteCart(true)} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />

        <QuoteCart isOpen={showQuoteCart} onClose={() => setShowQuoteCart(false)} />
        <ProductDetail
          product={selectedProduct}
          isOpen={showProductDetail}
          onClose={() => setShowProductDetail(false)}
        />
      </div>
    </QuoteProvider>
  );
}