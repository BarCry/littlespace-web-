export type MenuCategory = 
  | 'Coffee' 
  | 'Non-Coffee' 
  | 'Food' 
  | 'Snacks' 
  | 'Bottle Package';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  priceFormatted: string;
  description: string;
  volume?: string;
  imagePlaceholder: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'coffee' | 'cycling' | 'community' | 'detail';
  caption: string;
  aspectRatio: string;
  gridSpan: string; // for editorial masonry
  placeholderLabel: string;
}

export interface SiteConfig {
  brandName: string;
  legalName: string;
  tagline: string;
  subheadline: string;
  instagramHandle: string;
  instagramUrl: string;
  instagramDisplayName: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  email: string;
  openingHours: {
    days: string;
    time: string;
  };
  location: {
    city: string;
    province: string;
    country: string;
    displayAddress: string;
    googleMapsPlaceholderUrl: string;
  };
  owner: {
    name: string;
    title: string;
    storyBrief: string;
  };
}
