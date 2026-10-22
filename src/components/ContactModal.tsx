import React, { useState } from 'react';
import { X, Phone, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, PRESET_MESSAGES } from '../data/businessData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMessage?: string;
  title?: string;
  defaultMode?: 'whatsapp' | 'call' | 'both';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultMessage,
  title = 'Connect with the Workshop Owners',
  defaultMode = 'both',
}) => {
  const [selectedMessage, setSelectedMessage] = useState(defaultMessage || PRESET_MESSAGES.general);

  if (!isOpen) return null;

  const getWhatsAppLink = (phoneNo: string, text: string) => {
    // phoneNo without + or special chars
    const cleanNumber = phoneNo.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(text.trim());
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#C29A58]/20 overflow-hidden text-[#292725]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#38251B] text-[#F8F4ED] p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 text-[#F8F4ED]/70 hover:text-[#FFFFFF] p-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#C29A58] text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct Workshop Contact</span>
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#FFFFFF]">{title}</h2>
          <p className="text-sm text-[#F8F4ED]/80 mt-1">
            Abdul Sattar Trader&apos;s & Furniture Mart &bull; Kot Radha Kishan, Kasur
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Inquiry message box if WhatsApp mode */}
          {defaultMode !== 'call' && (
            <div className="bg-[#F8F4ED] p-4 rounded-xl border border-[#795238]/15">
              <label className="block text-xs font-semibold text-[#795238] uppercase tracking-wider mb-2">
                Inquiry Message on WhatsApp:
              </label>
              <textarea
                value={selectedMessage}
                onChange={(e) => setSelectedMessage(e.target.value)}
                rows={3}
                className="w-full text-sm bg-white border border-[#795238]/20 rounded-lg p-2.5 text-[#292725] focus:outline-hidden focus:ring-2 focus:ring-[#C29A58]"
                placeholder="Write your custom inquiry message here..."
              />
              <p className="text-xs text-[#292725]/60 mt-1.5 flex items-center gap-1">
                <span>Feel free to edit this text before initiating your chat.</span>
              </p>
            </div>
          )}

          {/* Owners Choice */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#795238]">
              Choose Whom to Contact:
            </h3>

            {BUSINESS_INFO.owners.map((owner) => (
              <div
                key={owner.id}
                className="p-4 rounded-xl border border-stone-200 hover:border-[#C29A58] bg-white transition-all shadow-xs hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-[#38251B]">
                      {owner.name}
                    </h4>
                    <p className="text-xs text-[#795238] font-medium">{owner.role}</p>
                    <p className="text-sm font-semibold text-[#292725] tracking-wide mt-0.5">
                      {owner.phone}
                    </p>
                  </div>
                  <span className="inline-flex items-center text-[11px] font-semibold bg-[#F8F4ED] text-[#795238] px-2.5 py-1 rounded-full border border-[#C29A58]/30">
                    Owner
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-stone-100">
                  {/* WhatsApp Action */}
                  <a
                    href={getWhatsAppLink(owner.phone, selectedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-lg font-medium text-xs md:text-sm shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Phone Call Action */}
                  <a
                    href={owner.telLink}
                    className="flex items-center justify-center gap-2 bg-[#38251B] hover:bg-[#795238] text-white py-2.5 px-3 rounded-lg font-medium text-xs md:text-sm shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Workshop Notice */}
          <div className="text-xs text-[#292725]/75 bg-[#F8F4ED]/80 p-3 rounded-lg border-l-3 border-[#C29A58] space-y-1">
            <p className="font-medium text-[#38251B]">Working Hours & Availability:</p>
            <p>Saturday – Thursday: 8:00 AM – 8:00 PM PKT | Friday: Closed</p>
            <p className="text-[11px] text-[#292725]/60 pt-0.5">
              Please contact us to discuss furniture dimensions, timber cutting specifications, and pricing.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 flex justify-between items-center text-xs text-[#292725]/70">
          <span>Kot Radha Kishan, Kasur</span>
          <button
            onClick={onClose}
            className="text-[#795238] font-medium hover:underline hover:text-[#38251B]"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
