import { ArrowRight, Leaf, Globe } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjdhMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMTktMS43OTEtNC00LTRzLTQgMS43ODEtNCA0IDEuNzkxIDQgNCA0IDQtMS43ODEgNC00em0wIDI4YzAtMi4yMTktMS43OTEtNC00LTRzLTQgMS43ODEtNCA0IDEuNzkxIDQgNCA0IDQtMS43ODEgNC00ek04IDMyYzIuMjE5IDAgNC0xLjc4MSA0LTRzLTEuNzgxLTQtNC00LTQgMS43ODEtNCA0IDEuNzgxIDQgNCA0em00OCAwYzIuMjE5IDAgNC0xLjc4MSA0LTRzLTEuNzgxLTQtNC00LTQgMS43ODEtNCA0IDEuNzgxIDQgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
              <Leaf className="text-orange-500" size={20} />
              <span className="text-orange-500 text-sm font-medium">100% Organic & Export Quality</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Pure Nature,
              <span className="block text-orange-500 mt-2">Global Reach</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Premium organic moringa powder and export-quality watermelons,
              cultivated with care and delivered worldwide. Experience the finest
              in sustainable agriculture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-700 hover:border-orange-500 text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium"
              >
                Get in Touch
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-gray-400 text-sm mt-1">Organic</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 flex items-center">
                  <Globe size={32} />
                </div>
                <div className="text-gray-400 text-sm mt-1">Global Export</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">Premium</div>
                <div className="text-gray-400 text-sm mt-1">Quality</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <img
                src="https://images.pexels.com/photos/5966629/pexels-photo-5966629.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organic Moringa"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Fresh Watermelon"
                  className="rounded-xl w-full h-32 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/6508361/pexels-photo-6508361.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Organic Farming"
                  className="rounded-xl w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}