import { Leaf, CheckCircle, Globe, Award } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: 'Organic Moringa Powder',
      description: 'Premium quality moringa powder from organically grown moringa trees. Rich in nutrients, antioxidants, and vitamins. Perfect for health-conscious consumers worldwide.',
      image: 'https://images.pexels.com/photos/5966629/pexels-photo-5966629.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        '100% Organic Certified',
        'No Additives or Preservatives',
        'Export Quality Standards',
        'Rich in Vitamins & Minerals',
        'Sustainable Farming',
        'Lab Tested & Verified'
      ],
      gradient: 'from-green-500/10 to-orange-500/10'
    },
    {
      name: 'Premium Watermelons',
      description: 'Export-quality watermelons grown with sustainable farming practices. Sweet, juicy, and perfectly ripened for international markets with the highest quality standards.',
      image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Export Quality Grade',
        'Optimal Sugar Content',
        'Careful Handling & Packaging',
        'Year-Round Availability',
        'Fresh Farm to Market',
        'International Standards'
      ],
      gradient: 'from-red-500/10 to-orange-500/10'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="text-orange-500" size={20} />
            <span className="text-orange-500 text-sm font-medium">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Quality, <span className="text-orange-500">Global Standards</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Cultivated with care, processed with precision, and delivered with excellence.
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                <div className={`relative overflow-hidden ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Award size={16} />
                    <span>Export Quality</span>
                  </div>
                </div>

                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 text-orange-500">
                    <Globe size={24} />
                    <span className="font-medium">Available for Global Export</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and experience the quality that sets us apart.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg transition-all duration-200 font-medium inline-flex items-center space-x-2"
          >
            <span>Get a Quote</span>
            <Globe size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}