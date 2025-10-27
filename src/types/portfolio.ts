export interface CaseStudy {
  overview: string;
  challenges: string;
  solutions: string;
  results: string;
}

export interface ClientsTestimonial {
  quote: string;
  author: string;
}

interface FAQ {
  question: string;
  answer: string;
}

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

  // New optional properties for extended project info
  caseStudy?: CaseStudy;
  features?: string[];
  futureImprovements?: string[];
  faq?: FAQ[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}
