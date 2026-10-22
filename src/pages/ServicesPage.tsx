import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Armchair,
  Layers,
  Home,
  Trees,
} from 'lucide-react';
import { SERVICES, PRESET_MESSAGES } from '../data/businessData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ServicesPageProps {
  initialServiceId?: string;
  onOpenContactModal: (presetMessage?: string, title?: string, mode?: 'whatsapp' | 'call' | 'both') => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialServiceId,
  onOpenContactModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'upholstery' | 'bedroom' | 'living' | 'kitchen-interior' | 'timber'>('all');

  // Scroll to initial service if passed
  useEffect(() => {
    if (initialServiceId) {
      const el = document.getElementById(initialServiceId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [initialServiceId]);

  const categories = [
    { id: 'all', label: 'All Services (12)' },
    { id: 'upholstery', label: 'Sofa & Foam Poshish' },
    { id: 'bedroom', label: 'Beds & Wardrobes' },
    { id: 'living', label: 'Dining, Plywood & TV Units' },
    { id: 'kitchen-interior', label: 'Kitchen Woodwork & Doors' },
    { id: 'timber', label: 'Timber Sawing & Firewood' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    if (selectedFilter === 'all') return true;
    return s.category === selectedFilter;
  });

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#38251B] text-[#F8F4ED] py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29A58_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C29A58] bg-[#795238]/60 px-3.5 py-1.5 rounded-full border border-[#C29A58]/30">
            Comprehensive Woodwork
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-4 max-w-3xl mx-auto leading-tight">
            Our Furniture &amp; Woodwork Services
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4ED]/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            From handcrafted sofas and master foam cushioning to modern plywood cabinets, custom wooden doors, heavy log sawing, and firewood in Kot Radha Kishan.
          </p>
        </div>
      </section>

      {/* 2. Filter Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-stone-200 shadow-xs max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#38251B] text-[#C29A58] shadow-xs'
                    : 'text-[#292725]/75 hover:text-[#38251B] hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Detailed Services Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              id={service.id}
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-stone-200 p-6 sm:p-8 lg:p-10 transition-all scroll-mt-24"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 h-72 sm:h-80 lg:h-96">
                    <ImageWithFallback
                      src={service.imageUrl}
                      alt={service.altText}
                      fallbackTitle={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#38251B]/95 backdrop-blur-xs text-[#C29A58] text-xs font-bold px-3 py-1 rounded-md border border-[#C29A58]/40 shadow-xs">
                      {service.badgeLabel}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#38251B]">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#292725]/85 mt-3 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Common Requests */}
                  <div className="bg-[#F8F4ED] p-4 sm:p-5 rounded-2xl border border-[#C29A58]/20 space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#795238]">
                      Common Customer Requests &amp; Options:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#292725]/85">
                      {service.commonRequests.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#795238] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Workshop Features */}
                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#292725]/60">
                      Craftsmanship &amp; Execution:
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs text-[#38251B]">
                      {service.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 font-medium"
                        >
                          &bull; {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() =>
                        onOpenContactModal(
                          service.prefilledMessage,
                          `Inquire about ${service.title}`,
                          'whatsapp'
                        )
                      }
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Inquire on WhatsApp (Choose Brother)</span>
                    </button>

                    <button
                      onClick={() =>
                        onOpenContactModal(
                          service.prefilledMessage,
                          `Call to discuss ${service.title}`,
                          'call'
                        )
                      }
                      className="flex items-center justify-center gap-2 bg-[#38251B] hover:bg-[#795238] text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call to Discuss</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Notice Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#38251B] text-[#F8F4ED] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C29A58]/30">
          <div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
              Have a Custom Design or Spec in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F4ED]/80 mt-1 max-w-xl">
              You can bring your own photos, dimensions, timber logs, or existing furniture frames to our workshop. We review everything with you before starting work.
            </p>
          </div>
          <button
            onClick={() => onOpenContactModal(PRESET_MESSAGES.customFurniture, 'Discuss Custom Project', 'whatsapp')}
            className="shrink-0 bg-[#C29A58] hover:bg-[#a88242] text-[#38251B] font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
          >
            Start WhatsApp Discussion &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
