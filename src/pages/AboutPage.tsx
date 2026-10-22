import React from 'react';
import {
  MessageSquare,
  Phone,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  Compass,
  Hammer,
  Trees,
  Armchair,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface AboutPageProps {
  onOpenContactModal: (presetMessage?: string, title?: string, mode?: 'whatsapp' | 'call' | 'both') => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContactModal, onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#38251B] text-[#F8F4ED] py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29A58_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C29A58] bg-[#795238]/60 px-3.5 py-1.5 rounded-full border border-[#C29A58]/30">
            About Our Workshop
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-4 max-w-3xl mx-auto leading-tight">
            About Abdul Sattar Trader&apos;s &amp; Furniture Mart
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4ED]/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            A family-operated furniture workshop, upholstery center, and timber cutting service managed by brothers Zahid and Shahid Abdul Sattar in Kot Radha Kishan, Kasur.
          </p>
        </div>
      </section>

      {/* 2. Main Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Workshop Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C29A58]/30 to-[#795238]/40 rounded-3xl blur-md" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#C29A58]/30 bg-stone-900">
                <ImageWithFallback
                  src="./assets/images/trolley-log-sawing-service.jpg"
                  alt="Trolley sawmill machine cutting heavy timber logs in workshop"
                  fallbackTitle="Abdul Sattar Carpentry & Sawmill Workshop"
                  className="w-full h-96 sm:h-[480px] object-cover"
                />
                <div className="p-4 bg-[#292725] text-white">
                  <p className="text-xs uppercase tracking-wider text-[#C29A58] font-bold">
                    Woodwork &amp; Timber Machinery
                  </p>
                  <p className="text-sm font-serif text-stone-200">
                    Workshop Located in Kot Radha Kishan, Kasur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#795238] bg-white px-3 py-1 rounded-md border border-[#C29A58]/30">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#38251B] leading-tight">
              Practical Woodworking Rooted in Craftsmanship &amp; Reliability
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#292725]/85 leading-relaxed font-normal">
              <p>
                Abdul Sattar Trader&apos;s &amp; Furniture Mart is operated directly by brothers <strong>Zahid Abdul Sattar</strong> and <strong>Shahid Abdul Sattar</strong>. We serve homeowners, builders, and local residents who need custom furniture making, sofa upholstery (poshish), carpentry repairs, and timber sawing.
              </p>
              <p>
                Rather than selling mass-produced, fragile showroom furniture, we focus on sturdy construction made for Pakistani households. We work directly with customers on sizing, timber selection, plywood grades, Master foam density, and fabric styles so every piece fits the room it was intended for.
              </p>
              <p>
                In addition to household and bedroom furniture, our workshop operates a dedicated timber cutting sawmill. Customers can bring their own tree logs and timber trunks to our facility in Kot Radha Kishan to be cut into precise planks, rafters, and construction boards according to their required measurements.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#795238]">
                  <Hammer className="w-5 h-5 text-[#C29A58]" />
                  <h3 className="font-serif font-bold text-sm text-[#38251B]">
                    Custom Woodworking
                  </h3>
                </div>
                <p className="text-xs text-[#292725]/75 leading-relaxed">
                  Every bed, sofa, wardrobe, or door is tailored to your required dimensions and style preferences.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#795238]">
                  <Armchair className="w-5 h-5 text-[#C29A58]" />
                  <h3 className="font-serif font-bold text-sm text-[#38251B]">
                    Traditional &amp; Modern
                  </h3>
                </div>
                <p className="text-xs text-[#292725]/75 leading-relaxed">
                  Combining solid wood joinery with contemporary plywood, laminate boards, and high-density Master foam.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#795238]">
                  <Trees className="w-5 h-5 text-[#C29A58]" />
                  <h3 className="font-serif font-bold text-sm text-[#38251B]">
                    Complete Wood Solutions
                  </h3>
                </div>
                <p className="text-xs text-[#292725]/75 leading-relaxed">
                  Furniture making, upholstery, heavy log sawing, and firewood supply all under one business.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#795238]">
                  <ShieldCheck className="w-5 h-5 text-[#C29A58]" />
                  <h3 className="font-serif font-bold text-sm text-[#38251B]">
                    Direct Owner Access
                  </h3>
                </div>
                <p className="text-xs text-[#292725]/75 leading-relaxed">
                  You deal directly with Zahid or Shahid for quotes, progress updates, and specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Two Brothers / Owners Section */}
      <section className="bg-white py-14 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#795238]">
              Personal Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#38251B]">
              Managed by Brothers Zahid &amp; Shahid Abdul Sattar
            </h2>
            <p className="text-xs sm:text-sm text-[#292725]/75">
              Available to discuss design ideas, measurements, timber logs, or visit arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BUSINESS_INFO.owners.map((owner) => (
              <div
                key={owner.id}
                className="bg-[#F8F4ED] rounded-2xl p-6 sm:p-8 border border-[#C29A58]/30 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#795238] bg-white px-3 py-1 rounded-full border border-stone-200">
                      Co-Owner &amp; Manager
                    </span>
                    <span className="text-xs font-semibold text-[#C29A58]">
                      Kot Radha Kishan
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#38251B]">
                    {owner.name}
                  </h3>
                  <p className="text-sm font-medium text-[#795238] mt-1">{owner.role}</p>
                  <p className="text-lg font-semibold text-[#292725] tracking-wide mt-3">
                    {owner.phone}
                  </p>
                  <p className="text-xs text-[#292725]/70 mt-2 leading-relaxed">
                    Contact {owner.name.split(' ')[0]} to discuss your furniture ideas, custom bed designs, sofa poshish, or sawmill timber cutting requirements.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#795238]/15">
                  <a
                    href={owner.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={owner.telLink}
                    className="flex items-center justify-center gap-2 bg-[#38251B] hover:bg-[#795238] text-white py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#38251B] text-[#F8F4ED] rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-[#C29A58]/30 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white max-w-2xl mx-auto leading-snug">
            Ready to Discuss Your Furniture or Timber Project?
          </h2>
          <p className="text-sm sm:text-base text-[#F8F4ED]/80 max-w-xl mx-auto">
            Get in touch directly with Zahid or Shahid. We are happy to review your measurements, discuss designs, or give you advice on materials.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenContactModal(undefined, 'Discuss a Project on WhatsApp', 'whatsapp')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Discuss Project on WhatsApp</span>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/20 transition-all"
            >
              <span>Explore All 12 Services</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
