'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, User, Mail, Briefcase, Menu, X } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Navbar = ():  React.ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { href: "/about", label: "About", icon: <User className="w-5 h-5" /> },
   
    { href: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const controlNavbar = (): void => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out hidden md:block ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg border border-gray-200/20 shadow-2xl rounded-2xl px-8 py-4">
          <div className="flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:scale-105"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="font-medium text-gray-700 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Floating Navbar */}
      <div className="md:hidden">
        {/* Mobile Navigation Menu */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200/20 shadow-2xl rounded-t-3xl px-6 py-6">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-col items-center space-y-2 px-4 py-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg active:scale-95"
                >
                  <span className="transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>

        {/* Backdrop for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Brand Logo - Top Left (Optional) */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          Portfolio
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-item-mobile:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;