/**
 * Abdul Sattar Trader's & Furniture Mart - Kot Radha Kishan
 * Pure Static Vanilla JavaScript
 * Zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close when clicking a nav link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Services Filter Tabs
  const serviceFilterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  serviceFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      serviceFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      serviceCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Gallery Filter Tabs
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

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

  // 4. Lightbox Modal
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(title, desc, imgSrc, category) {
    if (!lightbox) return;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;

    // Build WhatsApp URL
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
    }
  });

  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const desc = card.getAttribute('data-desc');
      const img = card.getAttribute('data-img');
      const cat = card.getAttribute('data-cat-name');
      openLightbox(title, desc, img, cat);
    });
  });

  // 5. Interactive WhatsApp Quote / Measurement Estimator
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
    const ownerVal = estOwner.value; // '923004306527' or '923218672673'
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
    // Initial call
    updateEstimatorMessage();
  }

  // 6. Direct Contact Inquiry Composer Form
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

  // 7. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach((other) => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 8. Floating Contact Widget
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
