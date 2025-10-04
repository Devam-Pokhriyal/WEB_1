'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Target, Eye, Heart, Users, Award, TrendingUp, Globe, Shield, Zap, CheckCircle, ArrowRight, MapPin, Calendar, Mail, Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Statistic {
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface VisibilityState {
  [key: string]: boolean;
}

const About = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [activeTab, setActiveTab] = useState<'story' | 'team' | 'timeline'>('story');

  const statistics: Statistic[] = [
    {
      number: '10+',
      label: 'Years of Excellence',
      description: 'Delivering outstanding results',
      icon: <Calendar className="w-8 h-8 text-blue-500" />
    },
    {
      number: '1000+',
      label: 'Happy Clients',
      description: 'Across 50+ countries',
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'From startups to enterprises',
      icon: <Award className="w-8 h-8 text-purple-500" />
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable and secure solutions',
      icon: <Shield className="w-8 h-8 text-orange-500" />
    }
  ];

  const values: Value[] = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.',
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We are committed to delivering exceptional value and results.',
      icon: <Target className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
      icon: <Award className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Transparency',
      description: 'Open communication, honest feedback, and clear processes build lasting partnerships.',
      icon: <Eye className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Social Impact',
      description: 'We believe in technology that makes the world a better place for everyone.',
      icon: <Heart className="w-8 h-8 text-pink-500" />
    },
    {
      title: 'Continuous Growth',
      description: 'We invest in learning, adapting, and evolving to stay ahead of industry trends.',
      icon: <TrendingUp className="w-8 h-8 text-indigo-500" />
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://via.placeholder.com/300x300/3B82F6/ffffff?text=SJ',
      bio: 'Visionary leader with 15+ years in tech. Former VP at Fortune 500 companies.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://via.placeholder.com/300x300/10B981/ffffff?text=MC',
      bio: 'Tech innovator specializing in scalable architectures and emerging technologies.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      image: 'https://via.placeholder.com/300x300/8B5CF6/ffffff?text=ER',
      bio: 'Award-winning designer focused on creating intuitive and beautiful user experiences.'
    },
    {
      name: 'David Kim',
      position: 'VP of Operations',
      image: 'https://via.placeholder.com/300x300/F59E0B/ffffff?text=DK',
      bio: 'Operations expert ensuring seamless project delivery and client satisfaction.'
    },
    {
      name: 'Lisa Thompson',
      position: 'Head of Marketing',
      image: 'https://via.placeholder.com/300x300/EF4444/ffffff?text=LT',
      bio: 'Marketing strategist with expertise in digital growth and brand development.'
    },
    {
      name: 'Alex Park',
      position: 'Lead Developer',
      image: 'https://via.placeholder.com/300x300/6366F1/ffffff?text=AP',
      bio: 'Full-stack architect building robust and scalable software solutions.'
    }
  ];

  const milestones: Milestone[] = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started with a vision to transform businesses through technology innovation.'
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Secured partnership with leading e-commerce platform, scaling to millions of users.'
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Opened offices in Europe and Asia, serving clients across 25 countries.'
    },
    {
      year: '2020',
      title: 'Award Recognition',
      description: 'Won "Tech Innovation Company of the Year" and achieved ISO 27001 certification.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched AI-powered solutions, revolutionizing how clients approach automation.'
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Committed to carbon neutrality and launched green technology initiatives.'
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

  const handleContactUs = (): void => {
    console.log('Navigating to contact page...');
  };

  const handleJoinTeam = (): void => {
    console.log('Navigating to careers page...');
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Our Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to empowering businesses through innovative digital solutions. Our mission is to bridge the gap between technology and human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleContactUs}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleJoinTeam}
                className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                Join Our Team
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Statistics Section */}
      <section id="stats" data-animate className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              A decade of excellence, innovation, and client success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat: Statistic, index: number) => (
              <div
                key={stat.label}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section id="mission" data-animate className={`py-20 px-6 transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and sustainable success in the digital age.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in transformative technology solutions, creating a world where every business can thrive through intelligent innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between human potential and technological possibility, creating solutions that make work more meaningful and life better.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we create
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value: Value, index: number) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section id="details" data-animate className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${isVisible.details ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover More About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about our story, meet our team, and explore our journey of innovation
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-2xl shadow-sm">
              {(['story', 'team', 'timeline'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'story' ? 'Our Story' : tab === 'team' ? 'Meet the Team' : 'Timeline'}
                </button>
              ))}
            </div>
          </div>

          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="animate-fadeIn">
              <div className="bg-white p-12 rounded-3xl shadow-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey Began</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Founded in 2014 with a simple yet powerful vision: to make technology accessible and transformative for businesses of all sizes. What started as a small team of passionate developers has grown into a global company serving clients across 50+ countries.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Our founders recognized that the digital divide was preventing many businesses from reaching their full potential. They set out to create solutions that were not only powerful but also intuitive, scalable, and affordable.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">Customer-first approach in everything we do</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">Continuous innovation and improvement</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">Commitment to sustainable business practices</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-24 h-24 text-blue-500 mx-auto mb-6" />
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Global Impact</h4>
                        <p className="text-gray-600">Serving clients worldwide with innovative solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="animate-fadeIn">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member: TeamMember, index: number) => (
                  <div
                    key={member.name}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative mb-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="animate-fadeIn">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className="space-y-12">
                  {milestones.map((milestone: Milestone, index: number) => (
                    <div
                      key={milestone.year}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-md"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Join thousands of satisfied clients who have transformed their operations with our innovative solutions. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleContactUs}
              className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={handleJoinTeam}
              className="text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Join Our Team
            </button>
          </div>
        </div>
      </section>

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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;