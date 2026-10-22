import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Armchair, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenService }) => {
  return (
    <footer className="bg-[#38251B] text-[#F8F4ED] border-t border-[#C29A58]/20">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C29A58] to-[#795238] flex items-center justify-center text-[#38251B] border border-[#C29A58]/40 shadow-inner">
                <Armchair className="w-5 h-5 text-[#38251B]" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white block leading-tight">
                  Abdul Sattar
                </span>
                <span className="text-[9px] tracking-widest uppercase font-semibold text-[#C29A58]">
                  Trader&apos;s &amp; Furniture Mart
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F8F4ED]/75 leading-relaxed">
              Family-operated woodwork, carpentry, upholstery, and timber cutting workshop managed by brothers Zahid and Shahid Abdul Sattar in Kot Radha Kishan, Kasur.
            </p>

            <div className="pt-2 text-xs text-[#C29A58]">
              <p className="font-semibold uppercase tracking-wider text-[#C29A58]/90">Craftsmanship &bull; Custom Fit &bull; Reliable Service</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#C29A58]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#F8F4ED]/80">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C29A58] transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C29A58] transition-colors"
                >
                  About the Workshop &amp; Owners
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C29A58] transition-colors"
                >
                  All 12 Woodwork &amp; Timber Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C29A58] transition-colors"
                >
                  Our Work / Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C29A58] transition-colors"
                >
                  Contact &amp; WhatsApp Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#C29A58]">
              Services Offered
            </h3>
            <ul className="space-y-1.5 text-xs text-[#F8F4ED]/75">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      onOpenService(s.id);
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    &bull; {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#C29A58] hover:underline pt-1 inline-block"
                >
                  + View Timber Cutting, Firewood &amp; more &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#C29A58]">
              Contact Workshop Owners
            </h3>

            {/* Owner 1: Zahid */}
            <div className="bg-[#292725] p-3 rounded-xl border border-white/5 space-y-1.5">
              <p className="text-xs font-bold text-white">Zahid Abdul Sattar</p>
              <p className="text-[11px] text-[#C29A58]">{BUSINESS_INFO.owners[0].phone}</p>
              <div className="flex gap-2 pt-1">
                <a
                  href={BUSINESS_INFO.owners[0].telLink}
                  className="text-[11px] bg-[#795238] hover:bg-[#C29A58] text-white px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> Call
                </a>
                <a
                  href={BUSINESS_INFO.owners[0].waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3 fill-white" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Owner 2: Shahid */}
            <div className="bg-[#292725] p-3 rounded-xl border border-white/5 space-y-1.5">
              <p className="text-xs font-bold text-white">Shahid Abdul Sattar</p>
              <p className="text-[11px] text-[#C29A58]">{BUSINESS_INFO.owners[1].phone}</p>
              <div className="flex gap-2 pt-1">
                <a
                  href={BUSINESS_INFO.owners[1].telLink}
                  className="text-[11px] bg-[#795238] hover:bg-[#C29A58] text-white px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> Call
                </a>
                <a
                  href={BUSINESS_INFO.owners[1].waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3 fill-white" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="pt-2 space-y-1.5 text-xs text-[#F8F4ED]/80">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 hover:text-[#C29A58] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#C29A58] shrink-0 mt-0.5" />
                <span>
                  Kot Radha Kishan, Kasur, Punjab, Pakistan
                  <span className="block text-[10px] text-[#C29A58] group-hover:underline">
                    View location on Google Maps &rarr;
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-1.5 text-[#F8F4ED]/70 pt-1">
                <Clock className="w-4 h-4 text-[#C29A58] shrink-0 mt-0.5" />
                <div>
                  <p>Sat–Thu: 8:00 AM – 8:00 PM PKT</p>
                  <p className="text-[#C29A58]/90 font-medium">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Notice */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F8F4ED]/60 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Abdul Sattar Trader&apos;s &amp; Furniture Mart. All rights reserved.
          </p>
          <p className="text-[11px] max-w-md text-stone-400">
            Kot Radha Kishan, Kasur, Punjab, Pakistan. Please call or WhatsApp our owners directly to confirm specifications, timber cutting, and pricing.
          </p>
        </div>
      </div>
    </footer>
  );
};
