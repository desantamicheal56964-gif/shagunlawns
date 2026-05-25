export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
  timestamp: string;
}

export interface EventCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  eventType: string;
  quote: string;
  rating: number;
  image: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  tags?: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
