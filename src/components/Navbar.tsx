import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone, MapPin, Clock, Armchair } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContactModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Our Work / Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#38251B] border-b border-[#C29A58]/20 shadow-md">
      {/* Top micro-bar for local presence & hours */}
      <div className="bg-[#292725] text-[#F8F4ED]/80 text-xs py-1.5 px-4 hidden sm:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#C29A58]">
              <MapPin className="w-3.5 h-3.5 text-[#C29A58]" />
              <span className="text-[#F8F4ED]/90">Kot Radha Kishan, Kasur, Punjab, Pakistan</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#F8F4ED]/70">
              <Clock className="w-3.5 h-3.5 text-[#C29A58]" />
              <span>Sat–Thu: 8:00 AM – 8:00 PM PKT (Fri Closed)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#F8F4ED]/60">Direct Calls:</span>
            <a
              href="tel:+923004306527"
              className="hover:text-[#C29A58] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C29A58]" />
              <span>Zahid: 0300-4306527</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+923218672673"
              className="hover:text-[#C29A58] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C29A58]" />
              <span>Shahid: 0321-8672673</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C29A58] to-[#795238] flex items-center justify-center shadow-inner text-[#38251B] border border-[#C29A58]/50 group-hover:scale-105 transition-transform">
              <Armchair className="w-5 h-5 text-[#38251B]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#F8F4ED] group-hover:text-[#C29A58] transition-colors">
                Abdul Sattar
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold uppercase text-[#C29A58]">
                Trader&apos;s &amp; Furniture Mart
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#FFFFFF] bg-[#795238]/60 font-semibold border-b-2 border-[#C29A58]'
                      : 'text-[#F8F4ED]/80 hover:text-[#FFFFFF] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContactModal}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenContactModal}
              className="sm:hidden p-2 bg-[#25D366] text-white rounded-lg"
              aria-label="WhatsApp quick contact"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F8F4ED] hover:bg-white/10 focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#292725] border-b border-[#C29A58]/20 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#C29A58] bg-[#38251B] font-semibold'
                      : 'text-[#F8F4ED]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Direct Contacts */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <p className="text-xs font-semibold text-[#C29A58] uppercase tracking-wider">
              Contact Workshop Owners:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.owners[0].telLink}
                className="flex items-center justify-center gap-1.5 bg-[#38251B] text-white py-2 px-2 rounded-lg text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C29A58]" />
                <span>Call Zahid</span>
              </a>
              <a
                href={BUSINESS_INFO.owners[1].telLink}
                className="flex items-center justify-center gap-1.5 bg-[#38251B] text-white py-2 px-2 rounded-lg text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C29A58]" />
                <span>Call Shahid</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-lg text-xs font-medium mt-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Choose Brother on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
