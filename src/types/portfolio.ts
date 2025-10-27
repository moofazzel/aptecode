// ----- Core Project Interface -----
export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  technologies: string[];
  liveUrl: string;
  featured: boolean;
  year: string;
  awards: string[];
  client: string;
  impact: string;

  // ----- New optional extended fields -----
  problem?: string;
  solution?: string[]; // multiple bullet points
  features?: string[];
  results?: string[];

  performance?: {
    lighthouseTarget?: {
      performance?: string;
      accessibility?: string;
      seo?: string;
    };
    imageStrategy?: string;
    caching?: string;
  };

  seo?: {
    schema?: string[];
    metaHighlights?: string[];
  };

  timeline?: string;
}

// ----- Testimonial Interface (unchanged) -----
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}
