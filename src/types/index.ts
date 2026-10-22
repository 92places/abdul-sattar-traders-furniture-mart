export interface OwnerContact {
  id: 'zahid' | 'shahid';
  name: string;
  role: string;
  phone: string;
  telLink: string;
  waLink: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badgeLabel: string;
  shortDescription: string;
  fullDescription: string;
  category: 'upholstery' | 'bedroom' | 'living' | 'kitchen-interior' | 'timber';
  imageUrl: string;
  altText: string;
  commonRequests: string[];
  features: string[];
  prefilledMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'sofas' | 'beds' | 'dining' | 'dressing' | 'wardrobes' | 'kitchen' | 'tv-units' | 'doors' | 'timber' | 'firewood';
  imageUrl: string;
  altText: string;
  description: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}
