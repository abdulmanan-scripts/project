import React, { useState } from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import StrategyCallModal from '../components/StrategyCallModal';

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="transform hover:scale-105 transition-all duration-500 perspective-1000">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 transform-gpu">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Business Ave\nSuite 100\nNew York, NY 10001"
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567\nMon-Fri 9AM-6PM EST"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "hello@company.com\nWe respond within 24hrs"
              },
              {
                icon: Clock,
                title: "Business Hours",
                info: "Monday - Friday\n9:00 AM - 6:00 PM EST"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-y-12 preserve-3d cursor-pointer group"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:rotate-360 transition-transform duration-700 transform-gpu">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="transform hover:scale-105 transition-all duration-500 perspective-1000">
              <Card className="shadow-3xl hover:shadow-4xl transition-all duration-500 transform hover:rotate-y-6 preserve-3d">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transform hover:scale-105 transition-all duration-300 focus:rotate-x-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transform hover:scale-105 transition-all duration-300 focus:rotate-x-2"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="transform hover:scale-105 transition-all duration-300 focus:rotate-x-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300 focus:rotate-x-2"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:rotate-x-6 shadow-lg hover:shadow-3xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div className="transform hover:scale-105 transition-all duration-500">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "24/7 Support",
                      description: "Round-the-clock assistance whenever you need it"
                    },
                    {
                      title: "Expert Team",
                      description: "Experienced professionals dedicated to your success"
                    },
                    {
                      title: "Custom Solutions",
                      description: "Tailored strategies that fit your unique business needs"
                    },
                    {
                      title: "Proven Results",
                      description: "Track record of delivering measurable outcomes"
                    }
                  ].map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:rotate-y-3 cursor-pointer group"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-500 group-hover:rotate-360 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="transform hover:scale-105 transition-all duration-500 perspective-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transform-gpu">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free strategy call and discover how we can help transform your business.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-110 hover:rotate-x-6 shadow-2xl hover:shadow-3xl"
            >
              Book Your Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactPage;