import React from 'react';
import {
  MessageSquare,
  Phone,
  Ruler,
  Hammer,
  Armchair,
  Wrench,
  Trees,
  PhoneCall,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  Flame,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  SERVICES,
  WHY_CHOOSE_US,
  WORK_PROCESS_STEPS,
  GALLERY_ITEMS,
} from '../data/businessData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { GalleryItem } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenContactModal: (presetMessage?: string, title?: string, mode?: 'whatsapp' | 'call' | 'both') => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onSelectService: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContactModal,
  onOpenLightbox,
  onSelectService,
}) => {
  // Map icon name to Lucide Icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ruler':
        return <Ruler className="w-6 h-6 text-[#C29A58]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#C29A58]" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-[#C29A58]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#C29A58]" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#C29A58]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#C29A58]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C29A58]" />;
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#38251B] text-[#F8F4ED] overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29A58_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#795238]/60 text-[#C29A58] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#C29A58]/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kot Radha Kishan, Kasur, Punjab</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                Custom Furniture &amp; Complete Woodwork Solutions
              </h1>

              <p className="text-base sm:text-lg text-[#F8F4ED]/85 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                From beautifully crafted sofas, beds and modern plywood furniture to kitchen cabinets, wooden doors, timber cutting and firewood, we help bring your woodwork ideas to life in Kot Radha Kishan, Kasur.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={() => onOpenContactModal(undefined, 'Chat with Workshop on WhatsApp', 'whatsapp')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenContactModal(undefined, 'Call Workshop Owners', 'call')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#795238] hover:bg-[#C29A58] hover:text-[#38251B] text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base border border-[#C29A58]/40 shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </button>
              </div>

              {/* Verified Owners Callout */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#F8F4ED]/75">
                <span className="font-semibold text-[#C29A58]">Direct Communication:</span>
                <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  Zahid: 0300-4306527
                </span>
                <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  Shahid: 0321-8672673
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C29A58] to-[#795238] rounded-2xl blur-xs opacity-50 transform rotate-1" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C29A58]/40 bg-[#292725]">
                  <ImageWithFallback
                    src="/assets/images/hero-trolley-timber-sawmill.jpg"
                    alt="Trolley-based sawmill timber log cutting machine actively slicing a large tree trunk into planks in workshop"
                    fallbackTitle="Abdul Sattar Sawmill & Timber Cutting Machine"
                    loading="eager"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="p-4 bg-[#292725] text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C29A58] font-bold">
                        Heavy Sawmill Log Cutting Machine (Araa)
                      </p>
                      <p className="text-sm font-serif font-semibold text-stone-200">
                        Timber Log Cutting &amp; Custom Carpentry
                      </p>
                    </div>
                    <span className="text-[11px] bg-[#38251B] px-3 py-1 rounded-full text-stone-300 border border-[#C29A58]/30 shrink-0">
                      Kot Radha Kishan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-md border border-[#C29A58]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold tracking-widest uppercase text-[#795238] bg-[#F8F4ED] px-3 py-1 rounded-md border border-[#795238]/20">
                Local Carpentry &amp; Timber Workshop
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#38251B] leading-snug">
                Welcome to Abdul Sattar Trader&apos;s &amp; Furniture Mart
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#292725]/85 leading-relaxed font-normal">
                <p>
                  Managed by brothers Zahid Abdul Sattar and Shahid Abdul Sattar, our workshop provides practical, customized furniture and complete woodwork services in and around Kot Radha Kishan, Kasur.
                </p>
                <p>
                  We understand that ready-made furniture often fails to match the exact dimensions of your rooms or the durability required for daily household life. That is why we specialize in tailored manufacturing: drawing room sofas, poshish and fabric renewal, high-density Master foam fitting, handcrafted wooden beds, modern plywood wardrobes, modular kitchen cabinetry, and solid interior doors.
                </p>
                <p>
                  In addition to furniture making, we operate a dedicated heavy timber log sawing service where customers can bring tree trunks to be cut into precise planks and boards, alongside seasoned firewood sales for domestic heating and lawful uses.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium text-[#38251B]">
                <span className="flex items-center gap-1.5 bg-[#F8F4ED] px-3 py-1.5 rounded-lg border border-[#C29A58]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#795238]" />
                  Customized to Your Exact Sizes
                </span>
                <span className="flex items-center gap-1.5 bg-[#F8F4ED] px-3 py-1.5 rounded-lg border border-[#C29A58]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#795238]" />
                  Quality Foam &amp; Poshish Refurbishment
                </span>
                <span className="flex items-center gap-1.5 bg-[#F8F4ED] px-3 py-1.5 rounded-lg border border-[#C29A58]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#795238]" />
                  Sawmill Timber Log Cutting
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F8F4ED] p-6 sm:p-8 rounded-2xl border border-[#C29A58]/30 space-y-6">
              <h3 className="font-serif font-bold text-lg text-[#38251B]">
                Workshop Hours &amp; Location
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#795238] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#38251B]">Workshop Location</span>
                    <span className="text-[#292725]/80">Kot Radha Kishan, Kasur, Punjab, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#795238] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#38251B]">Working Hours</span>
                    <span className="text-[#292725]/80 block">Saturday – Thursday</span>
                    <span className="text-[#292725]/80 font-medium">8:00 AM – 8:00 PM PKT</span>
                    <span className="text-red-700 font-semibold block text-xs mt-0.5">Friday: Closed</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#38251B] hover:bg-[#795238] text-white py-3 px-4 rounded-xl font-medium text-xs sm:text-sm transition-colors text-center block shadow-xs cursor-pointer"
              >
                View Full Contact Details &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (ALL 12 SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#795238] bg-white px-3 py-1 rounded-full border border-[#C29A58]/30">
            Our Carpentry, Furniture &amp; Timber Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#38251B]">
            Featured Woodwork &amp; Workshop Services
          </h2>
          <p className="text-xs sm:text-base text-[#292725]/80">
            Explore our specialized furniture manufacturing, upholstery, household carpentry, and timber cutting services in Kot Radha Kishan.
          </p>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200 hover:border-[#C29A58]/60 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-52 sm:h-56 bg-stone-100 overflow-hidden">
                <ImageWithFallback
                  src={service.imageUrl}
                  alt={service.altText}
                  fallbackTitle={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Specific Category/Feature Badge instead of generic Service # */}
                <span className="absolute top-3 left-3 bg-[#38251B]/95 backdrop-blur-xs text-[#C29A58] text-xs font-bold px-3 py-1 rounded-md border border-[#C29A58]/40 shadow-xs">
                  {service.badgeLabel}
                </span>
                {service.category === 'timber' && (
                  <span className="absolute top-3 right-3 bg-[#C29A58] text-[#38251B] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    Sawmill &amp; Yard
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#38251B] group-hover:text-[#795238] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292725]/75 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Common Requests bullet preview */}
                <div className="pt-2 border-t border-stone-100">
                  <p className="text-[11px] font-semibold text-[#795238] uppercase tracking-wider mb-1.5">
                    Common requirements:
                  </p>
                  <ul className="text-xs text-[#292725]/70 space-y-1">
                    {service.commonRequests.slice(0, 2).map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-[#C29A58] font-bold">&bull;</span>
                        <span className="line-clamp-1">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      onSelectService(service.id);
                    }}
                    className="text-xs font-semibold text-[#795238] hover:text-[#38251B] flex items-center gap-1 hover:underline"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() =>
                      onOpenContactModal(
                        service.prefilledMessage,
                        `Inquire about ${service.title}`,
                        'whatsapp'
                      )
                    }
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-lg font-medium text-xs shadow-2xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-[#38251B] text-[#F8F4ED] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C29A58] bg-[#795238]/40 px-3 py-1 rounded-full border border-[#C29A58]/20">
              Honest Craftsmanship &bull; Direct Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Why Work With Abdul Sattar Furniture Mart
            </h2>
            <p className="text-sm sm:text-base text-[#F8F4ED]/80">
              Clear commitments, practical craftsmanship, and personal communication with the craftsmen who build your furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#292725] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#C29A58]/40 transition-all duration-200 space-y-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#38251B] border border-[#C29A58]/30 flex items-center justify-center">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F4ED]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (4-STEP PROCESS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#795238] bg-white px-3 py-1 rounded-full border border-[#C29A58]/30">
            Simple &bull; Transparent &bull; Direct
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38251B]">
            How We Work With You
          </h2>
          <p className="text-sm sm:text-base text-[#292725]/80">
            A straightforward process from discussing your idea to completing the woodwork or timber cutting at our workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 relative flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-full bg-[#C29A58] text-[#38251B] font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
                  {step.step}
                </span>
                <h3 className="font-serif font-semibold text-lg text-[#38251B] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#292725]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] font-semibold text-[#795238] uppercase tracking-wider">
                Step 0{step.step} of 04
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#795238] bg-white px-3 py-1 rounded-full border border-[#C29A58]/30">
              Visual Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38251B] mt-2">
              Recent Furniture &amp; Woodwork
            </h2>
            <p className="text-sm text-[#292725]/80 mt-1 max-w-xl">
              Representative examples of our sofa poshish, bedroom furniture, plywood cabinets, kitchen woodwork, and timber cutting.
            </p>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="self-start md:self-auto flex items-center gap-2 text-sm font-semibold text-[#795238] hover:text-[#38251B] bg-white px-5 py-2.5 rounded-xl border border-stone-300 shadow-2xs hover:border-[#C29A58] transition-colors"
          >
            <span>View Full 10+ Item Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Gallery Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-stone-200 transition-all duration-300"
            >
              <div className="relative h-60 bg-stone-100 overflow-hidden">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.altText}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-medium bg-[#38251B]/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    Click to view details &amp; inquire &rarr;
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-[#38251B]/90 text-[#C29A58] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-semibold text-base text-[#38251B] group-hover:text-[#795238] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#292725]/70 line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#38251B] to-[#292725] rounded-3xl p-8 sm:p-12 lg:p-16 text-[#F8F4ED] shadow-xl border border-[#C29A58]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29A58] bg-white/10 px-3 py-1 rounded-full border border-[#C29A58]/30">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Let&apos;s Discuss Your Furniture or Woodwork Project
              </h2>
              <p className="text-sm sm:text-base text-[#F8F4ED]/80 leading-relaxed">
                Whether you need a custom-built bed, sofa upholstery (poshish), master foam replacement, modern kitchen cabinets, wooden doors, or timber log cutting, talk directly to the craftsmen in charge.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#F8F4ED]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C29A58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Workshop Location</span>
                    <span>Kot Radha Kishan, Kasur, Punjab, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C29A58] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Business Hours</span>
                    <span>Saturday – Thursday: 8:00 AM – 8:00 PM PKT</span>
                    <span className="block text-xs text-[#C29A58]">Friday: Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Both Brothers Cards */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C29A58]">
                Choose an Owner to Call or Chat:
              </h3>

              {BUSINESS_INFO.owners.map((owner) => (
                <div
                  key={owner.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#C29A58]/60 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-white">
                        {owner.name}
                      </h4>
                      <p className="text-xs text-[#C29A58] font-medium">{owner.role}</p>
                      <p className="text-base font-semibold text-stone-200 mt-1">
                        {owner.phone}
                      </p>
                    </div>
                    <span className="text-xs bg-[#C29A58]/20 text-[#C29A58] px-2.5 py-1 rounded-full border border-[#C29A58]/30">
                      Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
                    <a
                      href={owner.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={owner.telLink}
                      className="flex items-center justify-center gap-2 bg-[#795238] hover:bg-[#C29A58] hover:text-[#38251B] text-white py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              ))}

              <p className="text-xs text-stone-400 text-center pt-2">
                Note: Please contact us directly to confirm custom dimensions, materials, and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
