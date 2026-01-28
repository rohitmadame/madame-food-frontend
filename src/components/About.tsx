import { Leaf, Heart, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'We practice sustainable, chemical-free farming methods that preserve the environment and ensure the purity of our products.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing and quality checks to meet international export standards and certifications.'
    },
    {
      icon: Heart,
      title: 'Health First',
      description: 'Our commitment to providing nutrient-rich, healthy products drives everything we do, from seed to harvest.'
    },
    {
      icon: TrendingUp,
      title: 'Global Excellence',
      description: 'We maintain the highest standards in cultivation, processing, and packaging for successful global distribution.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6508361/pexels-photo-6508361.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organic Farming"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-orange-100 text-sm mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Leaf className="text-orange-500" size={20} />
              <span className="text-orange-500 text-sm font-medium">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cultivating Excellence in <span className="text-orange-500">Organic Agriculture</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Madame Enterprises is a leading producer and exporter of premium organic products.
              We specialize in cultivating the finest organic moringa and export-quality watermelons,
              delivering nature's best to markets worldwide.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our commitment to sustainable farming practices, combined with state-of-the-art
              processing facilities, ensures that every product meets the highest international
              quality standards. From our farms to your table, we maintain excellence at every step.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="bg-white group-hover:bg-orange-50 rounded-xl w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300">
                <value.icon className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 group-hover:text-orange-50 transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-400">Organic Certified</div>
          </div>
          <div className="text-center border-l border-r border-gray-800 md:border-l md:border-r-0">
            <div className="text-5xl font-bold text-orange-500 mb-2">25+</div>
            <div className="text-gray-400">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">1000+</div>
            <div className="text-gray-400">Satisfied Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
