import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { MessageSquare, Eye, ZoomIn, Info } from 'lucide-react';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onInquireWhatsApp: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenLightbox,
  onInquireWhatsApp,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'sofas', label: 'Sofas & Poshish' },
    { id: 'beds', label: 'Beds & Bedroom' },
    { id: 'dining', label: 'Dining Tables' },
    { id: 'dressing', label: 'Dressing Tables' },
    { id: 'wardrobes', label: 'Wardrobes & Plywood' },
    { id: 'kitchen', label: 'Kitchen Cabinets' },
    { id: 'tv-units', label: 'TV Units' },
    { id: 'doors', label: 'Wooden Doors' },
    { id: 'timber', label: 'Timber Cutting' },
    { id: 'firewood', label: 'Firewood' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categorySlug === activeCategory;
  });

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#38251B] text-[#F8F4ED] py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29A58_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C29A58] bg-[#795238]/60 px-3.5 py-1.5 rounded-full border border-[#C29A58]/30">
            Design &amp; Craft Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-4 max-w-3xl mx-auto leading-tight">
            Our Work &amp; Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4ED]/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            Browse our gallery of customized furniture designs, sofa upholstery (poshish), plywood cabinets, wooden doors, sawmill timber cutting, and firewood in Kot Radha Kishan.
          </p>
        </div>
      </section>

      {/* 2. Honest Representation Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F4ED] border-l-4 border-[#C29A58] p-4 rounded-r-xl flex items-start gap-3 text-xs sm:text-sm text-[#292725]/80">
          <Info className="w-5 h-5 text-[#795238] shrink-0 mt-0.5" />
          <p>
            <strong>Note for Customers:</strong> The photographs in this gallery represent the furniture designs, carpentry craftsmanship, upholstery techniques, and timber cutting capabilities available from our workshop in Kot Radha Kishan, Kasur. We build each order to your requested sizes, timber preferences, and colors.
          </p>
        </div>
      </div>

      {/* 3. Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-stone-200 shadow-2xs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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

      {/* 4. Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200 hover:border-[#C29A58]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div
                className="relative h-64 bg-stone-100 overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox(item)}
              >
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.altText}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#38251B]/90 backdrop-blur-xs text-[#C29A58] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#C29A58]/30">
                  {item.category}
                </span>

                {/* Hover overlay indicator */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <span className="bg-[#38251B]/90 px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-4 h-4 text-[#C29A58]" />
                    <span>Click to Zoom</span>
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="font-serif font-bold text-lg text-[#38251B] group-hover:text-[#795238] transition-colors leading-snug cursor-pointer"
                    onClick={() => onOpenLightbox(item)}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292725]/75 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenLightbox(item)}
                    className="text-xs font-semibold text-[#795238] hover:text-[#38251B] flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onInquireWhatsApp(item)}
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire Design</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
