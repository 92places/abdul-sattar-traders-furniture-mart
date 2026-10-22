import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { ContactModal } from './components/ContactModal';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryItem } from './types';
import { PRESET_MESSAGES } from './data/businessData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'gallery' | 'contact'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Contact Modal State
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>(undefined);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);
  const [modalMode, setModalMode] = useState<'whatsapp' | 'call' | 'both'>('both');

  // Lightbox State
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenContactModal = (
    presetMessage?: string,
    title?: string,
    mode: 'whatsapp' | 'call' | 'both' = 'both'
  ) => {
    setModalMessage(presetMessage || PRESET_MESSAGES.general);
    setModalTitle(title || 'Connect with Workshop Owners');
    setModalMode(mode);
    setIsContactModalOpen(true);
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  const handleInquireGalleryWhatsApp = (item: GalleryItem) => {
    setActiveLightboxItem(null);
    const msg = `Assalam-o-Alaikum! I am interested in your design: "${item.title}" (${item.category}). Please share details about availability, customized sizing and pricing.`;
    handleOpenContactModal(msg, `Inquire about ${item.title}`, 'whatsapp');
  };

  const handleNavigateToService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4ED] text-[#292725]">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenContactModal(undefined, 'Chat with Workshop on WhatsApp', 'whatsapp')}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
            onOpenLightbox={handleOpenLightbox}
            onSelectService={handleNavigateToService}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenContactModal={handleOpenContactModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            initialServiceId={selectedServiceId}
            onOpenContactModal={handleOpenContactModal}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={handleOpenLightbox}
            onInquireWhatsApp={handleInquireGalleryWhatsApp}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenService={handleNavigateToService}
      />

      {/* Floating Discreet WhatsApp / Call Button */}
      <FloatingContactWidget />

      {/* Universal Owner Selector Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultMessage={modalMessage}
        title={modalTitle}
        defaultMode={modalMode}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onInquireWhatsApp={handleInquireGalleryWhatsApp}
        onCall={() => {
          setActiveLightboxItem(null);
          handleOpenContactModal(undefined, 'Call Workshop Owners', 'call');
        }}
      />
    </div>
  );
}
