import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://food-backend-cyb1.onrender.com/api/inquiry/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      alert('Thank you! Your inquiry has been sent successfully ✅');

      setFormData({
        full_name: '',
        email: '',
        phone: '',
        company_name: '',
        message: ''
      });
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      alert('Failed to send inquiry ❌');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Mail className="text-orange-500" size={20} />
            <span className="text-orange-500 text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Start a <span className="text-orange-500">Conversation</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to experience premium quality? Reach out to discuss your requirements.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <InfoCard icon={<Phone />} title="Phone" text1="+1 (555) 123-4567" text2="Mon-Fri, 9am-6pm" />
          <InfoCard icon={<Mail />} title="Email" text1="info@madamefood.com" text2="sales@madamefood.com" />
          <InfoCard icon={<MapPin />} title="Location" text1="Export Processing Zone" text2="Global Distribution Center" />
        </div>

        {/* FORM */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Full Name *" name="full_name" value={formData.full_name} onChange={handleChange} />
              <Input label="Email Address *" name="email" value={formData.email} onChange={handleChange} type="email" />
              <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
              <Input label="Company Name" name="company_name" value={formData.company_name} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500"
              />
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg flex items-center justify-center space-x-2">
              <span>Send Message</span>
              <Send size={20} />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

/* SMALL REUSABLE COMPONENTS */

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-white font-medium mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500"
        required={label.includes('*')}
      />
    </div>
  );
}

function InfoCard({ icon, title, text1, text2 }: any) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition">
      <div className="bg-orange-500/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-orange-500">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400">{text1}</p>
      <p className="text-gray-400">{text2}</p>
    </div>
  );
}
