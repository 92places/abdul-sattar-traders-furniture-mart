import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { BUSINESS_INFO, PRESET_MESSAGES } from '../data/businessData';

export const ContactPage: React.FC = () => {
  const [selectedOwnerId, setSelectedOwnerId] = useState<'zahid' | 'shahid'>('zahid');
  const [presetType, setPresetType] = useState<string>('general');
  const [customMessage, setCustomMessage] = useState<string>(PRESET_MESSAGES.general);

  const selectedOwner =
    BUSINESS_INFO.owners.find((o) => o.id === selectedOwnerId) || BUSINESS_INFO.owners[0];

  const handlePresetChange = (type: string) => {
    setPresetType(type);
    switch (type) {
      case 'general':
        setCustomMessage(PRESET_MESSAGES.general);
        break;
      case 'sofa':
        setCustomMessage(PRESET_MESSAGES.sofaPoshish);
        break;
      case 'custom':
        setCustomMessage(PRESET_MESSAGES.customFurniture);
        break;
      case 'timber':
        setCustomMessage(PRESET_MESSAGES.timberCutting);
        break;
      case 'firewood':
        setCustomMessage(PRESET_MESSAGES.firewood);
        break;
      default:
        break;
    }
  };

  const getEncodedWhatsAppUrl = () => {
    const cleanNumber = selectedOwner.phone.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(customMessage.trim());
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#38251B] text-[#F8F4ED] py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29A58_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C29A58] bg-[#795238]/60 px-3.5 py-1.5 rounded-full border border-[#C29A58]/30">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-4 max-w-3xl mx-auto leading-tight">
            Let&apos;s Discuss Your Furniture or Woodwork Project
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4ED]/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            Reach out directly to brothers Zahid Abdul Sattar and Shahid Abdul Sattar via normal phone call or WhatsApp to confirm dimensions, timber specs, and pricing.
          </p>
        </div>
      </section>

      {/* 2. Direct Contact Cards for Both Owners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_INFO.owners.map((owner) => (
            <div
              key={owner.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 hover:border-[#C29A58] transition-all space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#795238] bg-[#F8F4ED] px-3 py-1 rounded-full border border-[#C29A58]/30">
                    Workshop Owner
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Call &amp; WhatsApp
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#38251B]">
                  {owner.name}
                </h2>
                <p className="text-sm font-medium text-[#795238] mt-1">{owner.role}</p>

                <div className="mt-4 p-4 bg-[#F8F4ED]/80 rounded-2xl border border-stone-200">
                  <span className="text-xs text-[#292725]/60 uppercase font-semibold tracking-wider block">
                    Phone Number:
                  </span>
                  <span className="text-xl font-bold text-[#38251B] tracking-wider mt-1 block">
                    {owner.phone}
                  </span>
                </div>
              </div>

              {/* Explicit Separated Actions */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#292725]/60">
                  Choose Contact Method:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={owner.telLink}
                    className="flex items-center justify-center gap-2 bg-[#38251B] hover:bg-[#795238] text-white py-3 px-4 rounded-xl font-semibold text-sm transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={owner.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-semibold text-sm transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive WhatsApp Message Composer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md border border-[#C29A58]/30">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#795238] bg-[#F8F4ED] px-3 py-1 rounded-md border border-[#795238]/20">
                Direct WhatsApp Inquiry Composer
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#38251B]">
                Compose Your Pre-Filled Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#292725]/75">
                Select whom to contact and your inquiry topic. You can edit the text before sending it directly to WhatsApp.
              </p>
            </div>

            {/* Step A: Choose Brother */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#38251B] block">
                1. Select Which Owner to Message:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUSINESS_INFO.owners.map((owner) => {
                  const isSelected = selectedOwnerId === owner.id;
                  return (
                    <button
                      key={owner.id}
                      type="button"
                      onClick={() => setSelectedOwnerId(owner.id as 'zahid' | 'shahid')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#25D366] bg-emerald-50/50 ring-2 ring-[#25D366]/30'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif font-bold text-base text-[#38251B]">
                            {owner.name}
                          </p>
                          <p className="text-xs text-[#795238]">{owner.phone}</p>
                        </div>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs">
                            ✓
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step B: Choose Preset Topic */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#38251B] block">
                2. Select Inquiry Topic / Template:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'general', label: 'General Furniture' },
                  { id: 'sofa', label: 'Sofa Poshish / Foam' },
                  { id: 'custom', label: 'Custom Furniture' },
                  { id: 'timber', label: 'Timber Log Sawing' },
                  { id: 'firewood', label: 'Firewood Inquiry' },
                ].map((item) => {
                  const isCurrent = presetType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handlePresetChange(item.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#38251B] text-[#C29A58] shadow-xs'
                          : 'bg-stone-100 hover:bg-stone-200 text-[#292725]/80'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step C: Message Box */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#38251B] block">
                3. Review or Edit Your Message:
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                rows={4}
                className="w-full text-sm bg-white border border-stone-300 rounded-2xl p-4 text-[#292725] focus:outline-hidden focus:ring-2 focus:ring-[#25D366] shadow-inner"
              />
              <p className="text-[11px] text-[#292725]/60">
                This message will be pre-filled when WhatsApp opens on your phone or computer.
              </p>
            </div>

            {/* Step D: Send Button */}
            <div className="pt-2">
              <a
                href={getEncodedWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-md hover:shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Open in WhatsApp &rarr; Message {selectedOwner.name}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Location & Working Hours Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F4ED] rounded-3xl p-8 sm:p-12 border border-[#C29A58]/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Workshop Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#795238]">
                <MapPin className="w-5 h-5 text-[#C29A58]" />
                <h3 className="font-serif font-bold text-xl text-[#38251B]">
                  Workshop Location
                </h3>
              </div>
              <p className="text-base font-semibold text-[#292725]">
                {BUSINESS_INFO.location}
              </p>
              <p className="text-xs text-[#292725]/75 leading-relaxed">
                We operate our carpentry, upholstery, and timber log sawing facility within Kot Radha Kishan, Kasur, Punjab. Customers are welcome to bring materials, timber trunks, or dimensions to the workshop.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#795238] hover:text-[#38251B] bg-white px-4 py-2.5 rounded-xl border border-stone-300 shadow-2xs hover:border-[#C29A58] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C29A58]" />
                  <span>Search Kot Radha Kishan on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#795238]">
                <Clock className="w-5 h-5 text-[#C29A58]" />
                <h3 className="font-serif font-bold text-xl text-[#38251B]">
                  Business &amp; Workshop Hours
                </h3>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2 text-sm">
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <span className="font-medium text-[#292725]">Saturday to Thursday</span>
                  <span className="font-bold text-[#38251B]">8:00 AM – 8:00 PM PKT</span>
                </div>
                <div className="flex justify-between items-center py-1 text-red-700">
                  <span className="font-medium">Friday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#292725]/70 pt-1">
                <AlertCircle className="w-4 h-4 text-[#C29A58] shrink-0 mt-0.5" />
                <span>
                  Please contact us directly to confirm the scope, timber availability, and pricing for your specific project.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
