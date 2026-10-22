import React, { useState } from 'react';
import { MessageSquare, Phone, X, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO, PRESET_MESSAGES } from '../data/businessData';

export const FloatingContactWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getWhatsAppUrl = (phone: string) => {
    const cleanNum = phone.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(PRESET_MESSAGES.general);
    return `https://wa.me/${cleanNum}?text=${encoded}`;
  };

  return (
    <aside aria-label="Quick contact widget" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Contact Drawer */}
      {isExpanded && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#C29A58]/30 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-[#38251B] p-3.5 text-[#F8F4ED] flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C29A58] font-bold">
                Direct Contact
              </p>
              <h3 className="text-sm font-serif font-bold text-white">
                Abdul Sattar Furniture Mart
              </h3>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#F8F4ED]/70 hover:text-white p-1 rounded-md hover:bg-white/10"
              aria-label="Close contact drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3.5 space-y-3 bg-[#F8F4ED]/50 max-h-80 overflow-y-auto">
            <p className="text-xs text-[#292725]/80">
              Reach Zahid or Shahid directly for furniture inquiries, sofa poshish, or timber cutting:
            </p>

            {BUSINESS_INFO.owners.map((owner) => (
              <div
                key={owner.id}
                className="bg-white p-3 rounded-xl border border-stone-200 shadow-2xs space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-bold text-[#38251B]">{owner.name}</h4>
                    <p className="text-[11px] text-[#795238]">{owner.role}</p>
                    <p className="text-xs font-semibold text-[#292725] mt-0.5">{owner.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-stone-100">
                  <a
                    href={getWhatsAppUrl(owner.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-1.5 px-2 rounded-lg text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={owner.telLink}
                    className="flex items-center justify-center gap-1.5 bg-[#38251B] hover:bg-[#795238] text-white py-1.5 px-2 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            ))}

            <div className="text-[11px] text-center text-[#292725]/60 pt-1">
              Sat–Thu: 8am–8pm PKT &bull; Kot Radha Kishan
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Open WhatsApp and Call options"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C29A58] border-2 border-[#25D366] rounded-full animate-ping"></span>
        </div>
        <span className="text-xs md:text-sm font-semibold tracking-wide hidden sm:inline-block">
          Chat / Call Us
        </span>
        <ChevronUp
          className={`w-4 h-4 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
    </aside>
  );
};
