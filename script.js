/**
 * Abdul Sattar Trader's & Furniture Mart - Kot Radha Kishan
 * Pure Static Multi-Page Vanilla JavaScript
 * Zero framework dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle (Active across all pages)
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Services Filter Tabs (On services.html & index.html preview)
  const serviceFilterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceDetailCards = document.querySelectorAll('.service-detail-card, .service-card');

  if (serviceFilterBtns.length > 0 && serviceDetailCards.length > 0) {
    serviceFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        serviceFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        serviceDetailCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'grid';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Gallery Filter Tabs (On gallery.html)
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (galleryFilterBtns.length > 0 && galleryCards.length > 0) {
    galleryFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        galleryFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-gallery-filter');

        galleryCards.forEach((card) => {
          const cat = card.getAttribute('data-gallery-cat');
          if (filter === 'all' || cat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Lightbox Modal (For gallery items)
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(title, desc, imgSrc, category) {
    if (!lightbox || !lightboxImg || !lightboxTitle || !lightboxDesc || !lightboxWaBtn) return;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;

    const message = `Assalam-o-Alaikum! I am interested in your design: "${title}" (${category}). Please share details about pricing and custom sizing.`;
    const cleanNumber = '923004306527'; // Zahid by default
    lightboxWaBtn.href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeContactModal();
    }
  });

  if (galleryCards.length > 0) {
    galleryCards.forEach((card) => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        const img = card.getAttribute('data-img');
        const cat = card.getAttribute('data-cat-name') || 'Woodwork';
        openLightbox(title, desc, img, cat);
      });
    });
  }

  // 5. Universal Contact Modal (Connect with Workshop Owners)
  const contactModal = document.getElementById('contactModal');
  const contactModalClose = document.getElementById('contactModalClose');
  const contactModalMsg = document.getElementById('contactModalMsg');
  const modalWaBtns = document.querySelectorAll('.modal-wa-btn');

  function openContactModal(defaultText) {
    if (!contactModal) return;
    if (contactModalMsg && defaultText) {
      contactModalMsg.value = defaultText;
      updateModalWaLinks(defaultText);
    }
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateModalWaLinks(text) {
    modalWaBtns.forEach((btn) => {
      const phone = btn.getAttribute('data-phone') || '923004306527';
      btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(text.trim())}`;
    });
  }

  if (contactModalClose) {
    contactModalClose.addEventListener('click', closeContactModal);
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });
  }

  if (contactModalMsg) {
    contactModalMsg.addEventListener('input', (e) => {
      updateModalWaLinks(e.target.value);
    });
  }

  // Triggers for opening Contact Modal
  document.querySelectorAll('.open-contact-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customMsg = btn.getAttribute('data-msg') || "Assalam-o-Alaikum! I would like to inquire about furniture and woodwork services.";
      openContactModal(customMsg);
    });
  });

  // 6. Interactive WhatsApp Quote / Measurement Estimator
  const estItem = document.getElementById('estItem');
  const estMaterial = document.getElementById('estMaterial');
  const estDimensions = document.getElementById('estDimensions');
  const estOwner = document.getElementById('estOwner');
  const estPreview = document.getElementById('estPreview');
  const estSubmitBtn = document.getElementById('estSubmitBtn');

  function updateEstimatorMessage() {
    if (!estItem || !estMaterial || !estDimensions || !estOwner || !estPreview || !estSubmitBtn) return;

    const itemVal = estItem.options[estItem.selectedIndex].text;
    const materialVal = estMaterial.options[estMaterial.selectedIndex].text;
    const dimVal = estDimensions.value.trim() || 'Standard / Custom requirements';
    const ownerVal = estOwner.value;
    const ownerName = estOwner.options[estOwner.selectedIndex].text;

    const fullMessage = `Assalam-o-Alaikum ${ownerName}!\nI would like an estimated quote and details for:\n- Item: ${itemVal}\n- Preferred Wood / Material: ${materialVal}\n- Specifications / Sizes: ${dimVal}\nLocation: Kot Radha Kishan workshop inquiry. Please guide me about pricing and availability.`;

    estPreview.textContent = fullMessage;
    estSubmitBtn.href = `https://wa.me/${ownerVal}?text=${encodeURIComponent(fullMessage)}`;
  }

  if (estItem && estMaterial && estDimensions && estOwner) {
    estItem.addEventListener('change', updateEstimatorMessage);
    estMaterial.addEventListener('change', updateEstimatorMessage);
    estDimensions.addEventListener('input', updateEstimatorMessage);
    estOwner.addEventListener('change', updateEstimatorMessage);
    updateEstimatorMessage();
  }

  // 7. Direct Contact Inquiry Composer Form (On contact.html)
  const composerOwner = document.getElementById('composerOwner');
  const composerTopic = document.getElementById('composerTopic');
  const composerMessage = document.getElementById('composerMessage');
  const composerSendBtn = document.getElementById('composerSendBtn');

  const topicTemplates = {
    general: "Assalam-o-Alaikum! I would like to inquire about furniture and woodwork services at Abdul Sattar Trader's & Furniture Mart in Kot Radha Kishan.",
    sofa: "Assalam-o-Alaikum! I would like to inquire about sofa manufacturing, poshish repair, fabric replacement, or Master foam installation.",
    custom: "Assalam-o-Alaikum! I want to discuss a customized bedroom/household furniture project with specific wood and dimensions.",
    timber: "Assalam-o-Alaikum! I have tree logs and would like to inquire about timber cutting charges and sawmill trolley availability.",
    firewood: "Assalam-o-Alaikum! I would like to inquire about dry firewood availability and verified weight on the platform scale (tarazu)."
  };

  if (composerTopic && composerMessage) {
    composerTopic.addEventListener('change', () => {
      const selected = composerTopic.value;
      composerMessage.value = topicTemplates[selected] || topicTemplates.general;
      updateComposerUrl();
    });
  }

  function updateComposerUrl() {
    if (!composerOwner || !composerMessage || !composerSendBtn) return;
    const phone = composerOwner.value;
    const msg = composerMessage.value;
    composerSendBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  if (composerOwner && composerMessage) {
    composerOwner.addEventListener('change', updateComposerUrl);
    composerMessage.addEventListener('input', updateComposerUrl);
    updateComposerUrl();
  }

  // 8. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach((other) => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 9. Floating Contact Widget
  const floatingBtn = document.getElementById('floatingMainBtn');
  const floatingPopover = document.getElementById('floatingPopover');
  const closePopoverBtn = document.getElementById('closePopoverBtn');

  if (floatingBtn && floatingPopover) {
    floatingBtn.addEventListener('click', () => {
      floatingPopover.classList.toggle('active');
    });
  }

  if (closePopoverBtn && floatingPopover) {
    closePopoverBtn.addEventListener('click', () => {
      floatingPopover.classList.remove('active');
    });
  }
});
