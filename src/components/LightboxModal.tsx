import React from 'react';
import { X, MessageSquare, Phone } from 'lucide-react';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onInquireWhatsApp: (item: GalleryItem) => void;
  onCall: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onInquireWhatsApp,
  onCall,
}) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Area */}
        <div className="w-full md:w-3/5 bg-stone-900 flex items-center justify-center min-h-[280px] md:min-h-[460px]">
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.altText}
            fallbackTitle={item.title}
            className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-contain"
          />
        </div>

        {/* Details & CTA Area */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-white overflow-y-auto">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#C29A58] bg-[#F8F4ED] px-2.5 py-1 rounded-md border border-[#C29A58]/20 mb-3">
              {item.category}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#38251B] leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-[#292725]/80 mt-3 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-6 pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold text-[#795238] uppercase tracking-wider mb-2">
                Custom Woodwork & Fabrication
              </h4>
              <p className="text-xs text-[#292725]/70 leading-relaxed">
                Like this design? We can manufacture or adapt this style to your exact room measurements, wood preferences, fabric colors, or log dimensions.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-stone-100 space-y-2.5">
            <button
              onClick={() => onInquireWhatsApp(item)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-medium text-sm transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire About This Design on WhatsApp</span>
            </button>

            <button
              onClick={onCall}
              className="w-full flex items-center justify-center gap-2 bg-[#38251B] hover:bg-[#795238] text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Workshop to Discuss</span>
            </button>
            <p className="text-[11px] text-center text-[#292725]/50">
              Abdul Sattar Trader&apos;s & Furniture Mart &bull; Kot Radha Kishan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
