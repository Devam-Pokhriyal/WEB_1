'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, Star, Users, Shield, Zap, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface VisibilityState {
  [key: string]: boolean;
}

export default function Home():  React.ReactElement {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  const partners: Partner[] = [
    { name: 'Google', logo: 'https://via.placeholder.com/120x60/4285f4/ffffff?text=Google' },
    { name: 'Microsoft', logo: 'https://via.placeholder.com/120x60/00a1f1/ffffff?text=Microsoft' },
    { name: 'Amazon', logo: 'https://via.placeholder.com/120x60/ff9900/ffffff?text=Amazon' },
    { name: 'Apple', logo: 'https://via.placeholder.com/120x60/000000/ffffff?text=Apple' },
    { name: 'Meta', logo: 'https://via.placeholder.com/120x60/1877f2/ffffff?text=Meta' },
    { name: 'Netflix', logo: 'https://via.placeholder.com/120x60/e50914/ffffff?text=Netflix' }
  ];

  const services: Service[] = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support from our expert team'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Premium Quality',
      description: 'Top-tier solutions crafted with attention to detail'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'This service transformed our business. The results exceeded our expectations and the team was incredibly professional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateCorp',
      content: 'Outstanding quality and support. We\'ve seen a 300% increase in productivity since implementing their solution.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'CTO, FutureWorks',
      content: 'The most reliable partner we\'ve ever worked with. Their expertise and dedication are unmatched.',
      rating: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el: Element) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleGetStarted = (): void => {
    // Add your navigation logic here
    console.log('Get Started clicked');
  };

  const handleLearnMore = (): void => {
    // Add your navigation logic here
    console.log('Learn More clicked');
  };

  const handleTestimonialChange = (index: number): void => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empower your business with cutting-edge solutions that drive growth, innovation, and success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={handleLearnMore}
                className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* About Us Section */}
      <section id="about" data-animate className={`py-20 px-6 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our Company
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are passionate innovators dedicated to creating exceptional digital experiences that make a difference. With over a decade of expertise, we&apos;ve helped thousands of businesses achieve their goals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to bridge the gap between technology and human needs, delivering solutions that are not just functional, but truly transformative.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  10+ Years Experience
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  1000+ Happy Clients
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Award Winning Team
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Team</h3>
                    <p className="text-gray-600">Dedicated professionals working for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" data-animate className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We&apos;re proud to work with some of the world&apos;s most innovative companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner: Partner, index: number) => (
              <div
                key={partner.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="w-full h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-animate className={`py-20 px-6 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your business and drive sustainable growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service: Service, index: number) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-animate className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
          
          <div className="relative">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i: number) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </p>
              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Company
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transforming businesses through innovative solutions and exceptional service. 
                Join thousands of satisfied customers who trust us with their success.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors duration-300" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Portfolio</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">hello@company.com</span>
                </div>
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}